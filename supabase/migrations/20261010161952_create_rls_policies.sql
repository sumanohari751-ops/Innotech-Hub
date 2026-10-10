/*
# Create RLS Policies for All Core Tables

## Security Model
- profiles: owner-scoped (user sees/edits own profile, all authenticated can read)
- organizations: public read, creator can insert/update
- organization_members: membership-scoped access
- saas_products, pricing_plans: public read (anon + authenticated)
- demo_requests: public insert, authenticated read
- events: public read if published, creator CRUD
- registrations: owner or event owner access
- teams/team_members: team member or event owner access
- submissions: submitter or event owner access
- certificates: owner read + public verified read, event owner insert
- notifications: owner-scoped CRUD
- communities: public read, creator manages
- community_members: public read, self-join, creator manages
- audit_logs: owner-scoped read/insert
*/

-- PROFILES
DROP POLICY IF EXISTS "select_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "profiles_public_read" ON profiles;
CREATE POLICY "profiles_public_read" ON profiles FOR SELECT TO authenticated USING (true);
DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ORGANIZATIONS
DROP POLICY IF EXISTS "orgs_public_read" ON organizations;
CREATE POLICY "orgs_public_read" ON organizations FOR SELECT TO authenticated USING (true);
DROP POLICY IF EXISTS "orgs_insert_by_creator" ON organizations;
CREATE POLICY "orgs_insert_by_creator" ON organizations FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);
DROP POLICY IF EXISTS "orgs_update_by_creator" ON organizations;
CREATE POLICY "orgs_update_by_creator" ON organizations FOR UPDATE TO authenticated USING (auth.uid() = created_by) WITH CHECK (auth.uid() = created_by);

-- ORGANIZATION MEMBERS
DROP POLICY IF EXISTS "org_members_read" ON organization_members;
CREATE POLICY "org_members_read" ON organization_members FOR SELECT TO authenticated USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM organizations WHERE id = org_id AND created_by = auth.uid())
);
DROP POLICY IF EXISTS "org_members_insert_self" ON organization_members;
CREATE POLICY "org_members_insert_self" ON organization_members FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "org_members_update" ON organization_members;
CREATE POLICY "org_members_update" ON organization_members FOR UPDATE TO authenticated USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM organizations WHERE id = org_id AND created_by = auth.uid())
) WITH CHECK (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM organizations WHERE id = org_id AND created_by = auth.uid())
);
DROP POLICY IF EXISTS "org_members_delete" ON organization_members;
CREATE POLICY "org_members_delete" ON organization_members FOR DELETE TO authenticated USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM organizations WHERE id = org_id AND created_by = auth.uid())
);

-- SAAS PRODUCTS (public read)
DROP POLICY IF EXISTS "products_public_read" ON saas_products;
CREATE POLICY "products_public_read" ON saas_products FOR SELECT TO anon, authenticated USING (is_published = true);

-- PRICING PLANS (public read)
DROP POLICY IF EXISTS "pricing_public_read" ON pricing_plans;
CREATE POLICY "pricing_public_read" ON pricing_plans FOR SELECT TO anon, authenticated USING (is_published = true);

-- DEMO REQUESTS (public insert, authenticated read)
DROP POLICY IF EXISTS "demo_requests_insert_public" ON demo_requests;
CREATE POLICY "demo_requests_insert_public" ON demo_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "demo_requests_read_auth" ON demo_requests;
CREATE POLICY "demo_requests_read_auth" ON demo_requests FOR SELECT TO authenticated USING (true);

-- EVENTS
DROP POLICY IF EXISTS "events_public_read" ON events;
CREATE POLICY "events_public_read" ON events FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "events_insert_by_creator" ON events;
CREATE POLICY "events_insert_by_creator" ON events FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);
DROP POLICY IF EXISTS "events_update_by_creator" ON events;
CREATE POLICY "events_update_by_creator" ON events FOR UPDATE TO authenticated USING (auth.uid() = created_by) WITH CHECK (auth.uid() = created_by);
DROP POLICY IF EXISTS "events_delete_by_creator" ON events;
CREATE POLICY "events_delete_by_creator" ON events FOR DELETE TO authenticated USING (auth.uid() = created_by);

-- REGISTRATIONS
DROP POLICY IF EXISTS "registrations_read" ON registrations;
CREATE POLICY "registrations_read" ON registrations FOR SELECT TO authenticated USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM events WHERE id = event_id AND created_by = auth.uid())
);
DROP POLICY IF EXISTS "registrations_insert_own" ON registrations;
CREATE POLICY "registrations_insert_own" ON registrations FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "registrations_update" ON registrations;
CREATE POLICY "registrations_update" ON registrations FOR UPDATE TO authenticated USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM events WHERE id = event_id AND created_by = auth.uid())
) WITH CHECK (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM events WHERE id = event_id AND created_by = auth.uid())
);

-- TEAMS
DROP POLICY IF EXISTS "teams_read" ON teams;
CREATE POLICY "teams_read" ON teams FOR SELECT TO authenticated USING (
  leader_id = auth.uid() OR
  EXISTS (SELECT 1 FROM team_members WHERE team_id = teams.id AND user_id = auth.uid()) OR
  EXISTS (SELECT 1 FROM events WHERE id = event_id AND created_by = auth.uid())
);
DROP POLICY IF EXISTS "teams_insert_leader" ON teams;
CREATE POLICY "teams_insert_leader" ON teams FOR INSERT TO authenticated WITH CHECK (leader_id = auth.uid());
DROP POLICY IF EXISTS "teams_update" ON teams;
CREATE POLICY "teams_update" ON teams FOR UPDATE TO authenticated USING (
  leader_id = auth.uid() OR
  EXISTS (SELECT 1 FROM events WHERE id = teams.event_id AND created_by = auth.uid())
) WITH CHECK (
  leader_id = auth.uid() OR
  EXISTS (SELECT 1 FROM events WHERE id = teams.event_id AND created_by = auth.uid())
);

-- TEAM MEMBERS
DROP POLICY IF EXISTS "team_members_read" ON team_members;
CREATE POLICY "team_members_read" ON team_members FOR SELECT TO authenticated USING (
  user_id = auth.uid() OR
  EXISTS (SELECT 1 FROM teams WHERE id = team_id AND leader_id = auth.uid()) OR
  EXISTS (SELECT 1 FROM teams t JOIN events e ON e.id = t.event_id WHERE t.id = team_id AND e.created_by = auth.uid())
);
DROP POLICY IF EXISTS "team_members_insert" ON team_members;
CREATE POLICY "team_members_insert" ON team_members FOR INSERT TO authenticated WITH CHECK (
  user_id = auth.uid() OR
  EXISTS (SELECT 1 FROM teams WHERE id = team_id AND leader_id = auth.uid())
);
DROP POLICY IF EXISTS "team_members_delete" ON team_members;
CREATE POLICY "team_members_delete" ON team_members FOR DELETE TO authenticated USING (
  user_id = auth.uid() OR
  EXISTS (SELECT 1 FROM teams WHERE id = team_id AND leader_id = auth.uid())
);

-- SUBMISSIONS
DROP POLICY IF EXISTS "submissions_read" ON submissions;
CREATE POLICY "submissions_read" ON submissions FOR SELECT TO authenticated USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM teams WHERE id = team_id AND leader_id = auth.uid()) OR
  EXISTS (SELECT 1 FROM events WHERE id = event_id AND created_by = auth.uid())
);
DROP POLICY IF EXISTS "submissions_insert_own" ON submissions;
CREATE POLICY "submissions_insert_own" ON submissions FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "submissions_update_own" ON submissions;
CREATE POLICY "submissions_update_own" ON submissions FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- CERTIFICATES
DROP POLICY IF EXISTS "certificates_read" ON certificates;
CREATE POLICY "certificates_read" ON certificates FOR SELECT TO anon, authenticated USING (
  (auth.uid() = user_id) OR
  (is_revoked = false AND status = 'issued')
);
DROP POLICY IF EXISTS "certificates_insert" ON certificates;
CREATE POLICY "certificates_insert" ON certificates FOR INSERT TO authenticated WITH CHECK (
  EXISTS (SELECT 1 FROM events WHERE id = event_id AND created_by = auth.uid())
);
DROP POLICY IF EXISTS "certificates_update" ON certificates;
CREATE POLICY "certificates_update" ON certificates FOR UPDATE TO authenticated USING (
  EXISTS (SELECT 1 FROM events WHERE id = event_id AND created_by = auth.uid())
) WITH CHECK (
  EXISTS (SELECT 1 FROM events WHERE id = event_id AND created_by = auth.uid())
);

-- NOTIFICATIONS
DROP POLICY IF EXISTS "notifications_read_own" ON notifications;
CREATE POLICY "notifications_read_own" ON notifications FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "notifications_insert_own" ON notifications;
CREATE POLICY "notifications_insert_own" ON notifications FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "notifications_update_own" ON notifications;
CREATE POLICY "notifications_update_own" ON notifications FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "notifications_delete_own" ON notifications;
CREATE POLICY "notifications_delete_own" ON notifications FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- COMMUNITIES
DROP POLICY IF EXISTS "communities_public_read" ON communities;
CREATE POLICY "communities_public_read" ON communities FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "communities_insert_by_creator" ON communities;
CREATE POLICY "communities_insert_by_creator" ON communities FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);
DROP POLICY IF EXISTS "communities_update_by_creator" ON communities;
CREATE POLICY "communities_update_by_creator" ON communities FOR UPDATE TO authenticated USING (auth.uid() = created_by) WITH CHECK (auth.uid() = created_by);

-- COMMUNITY MEMBERS
DROP POLICY IF EXISTS "community_members_read" ON community_members;
CREATE POLICY "community_members_read" ON community_members FOR SELECT TO authenticated USING (true);
DROP POLICY IF EXISTS "community_members_insert_self" ON community_members;
CREATE POLICY "community_members_insert_self" ON community_members FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "community_members_update" ON community_members;
CREATE POLICY "community_members_update" ON community_members FOR UPDATE TO authenticated USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM communities WHERE id = community_id AND created_by = auth.uid())
) WITH CHECK (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM communities WHERE id = community_id AND created_by = auth.uid())
);
DROP POLICY IF EXISTS "community_members_delete" ON community_members;
CREATE POLICY "community_members_delete" ON community_members FOR DELETE TO authenticated USING (
  auth.uid() = user_id OR
  EXISTS (SELECT 1 FROM communities WHERE id = community_id AND created_by = auth.uid())
);

-- AUDIT LOGS
DROP POLICY IF EXISTS "audit_logs_read_own" ON audit_logs;
CREATE POLICY "audit_logs_read_own" ON audit_logs FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "audit_logs_insert_own" ON audit_logs;
CREATE POLICY "audit_logs_insert_own" ON audit_logs FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
