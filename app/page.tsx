import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Coverage from "@/app/components/Coverage";
import Carriers from "@/app/components/Carriers";
import Detention from "@/app/components/Detention";
import Quote from "@/app/components/Quote";
import Footer from "@/app/components/Footer";

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
