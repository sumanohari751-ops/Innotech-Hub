import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-18">{children}</main>
      <Footer />
    </>
  );
}
