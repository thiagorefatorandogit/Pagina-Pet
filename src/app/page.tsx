import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/Services";
import { Testimonials } from "./_components/Testimonials";
import { Footer } from "./_components/footer";
import AppointmentForm from "@/components/AppointmentForm";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <AppointmentForm />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}