import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Added padding to account for fixed navbar */}
        <Hero />
        <Services />
        <Features />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </div>
    </div>
  );
};

export default Index;