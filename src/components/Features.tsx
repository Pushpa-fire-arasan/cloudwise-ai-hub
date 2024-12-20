import { Database, Network, Server, Rocket, Cog, Zap } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Automated Workflows",
    description: "Streamline your processes with intelligent automation solutions.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Real-time data processing and automated decision making.",
  },
  {
    icon: Network,
    title: "Smart Integration",
    description: "Seamless connection between all your business systems.",
  },
  {
    icon: Rocket,
    title: "Accelerated Growth",
    description: "Boost productivity with AI-powered automation.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-white animate-fade-down">
          Automation Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
              <div 
                className="relative p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-[#9b87f5] transition-all duration-300 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9b87f5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <feature.icon className="w-12 h-12 text-[#9b87f5] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-white text-center">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};