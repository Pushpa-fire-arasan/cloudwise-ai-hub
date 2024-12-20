import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "db4cloud transformed our business with their AI solutions. The results exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
  },
  {
    text: "Their cloud consulting services helped us scale efficiently while reducing costs significantly.",
    author: "Michael Chen",
    role: "CEO, StartupX",
  },
  {
    text: "Outstanding expertise in both AI and cloud technologies. A true partner in digital transformation.",
    author: "Lisa Rodriguez",
    role: "Director of Innovation, Enterprise Co",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-down">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-zoom-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-8 h-8 text-secondary mb-4 animate-float" />
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};