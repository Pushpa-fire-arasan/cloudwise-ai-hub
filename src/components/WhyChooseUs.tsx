import { Check } from "lucide-react";

const benefits = [
  "Industry-leading expertise in AI and cloud technologies",
  "Customized solutions for your business needs",
  "24/7 support and maintenance",
  "Proven track record of successful implementations",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose db4cloud?</h2>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Technology workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};