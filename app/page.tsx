import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Coverage from "@/app/components/Coverage";
import Carriers from "@/app/components/Carriers";
import Detention from "@/app/components/Detention";
import Quote from "@/app/components/Quote";
import Footer from "@/app/components/Footer";

// Home renders Hero, which reads MARLOWE_COVERAGE_API_KEY at request time.
// Forcing dynamic rendering keeps that check off the build-time static
// generation path -- next.config.js output:"export" is also incompatible
// with force-dynamic, so removing it (already done) was a necessary but
// not sufficient prerequisite for this fix.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <Coverage />
      <Carriers />
      <Detention />
      <Quote />
      <Footer />
    </main>
  );
}
