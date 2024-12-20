import { Button } from "@/components/ui/button";

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Let's discuss how our AI and cloud solutions can help you achieve your business goals.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-secondary hover:bg-white/90"
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
};