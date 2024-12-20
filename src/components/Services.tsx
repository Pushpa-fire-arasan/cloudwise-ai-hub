import { CloudCog, Brain, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Cloud Solutions",
    description: "Scalable, secure, and efficient cloud infrastructure tailored to your needs.",
    icon: CloudCog,
  },
  {
    title: "AI Integration",
    description: "Harness the power of artificial intelligence to optimize your operations.",
    icon: Brain,
  },
  {
    title: "Expert Consulting",
    description: "Strategic guidance from industry experts to accelerate your digital transformation.",
    icon: Users,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};