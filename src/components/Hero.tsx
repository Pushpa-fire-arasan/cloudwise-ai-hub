import { Brain, Cloud, Cog, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="relative">
              <Cog className="w-12 h-12 text-[#9b87f5] animate-spin-slow absolute" />
              <Brain className="w-12 h-12 text-[#8B5CF6] animate-float" />
            </div>
            <Sparkles className="w-10 h-10 text-[#F97316] animate-pulse" />
            <Cloud className="w-12 h-12 text-[#0EA5E9] animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fade-down">
            Automate & Transform
            <span className="bg-gradient-to-r from-[#9b87f5] via-[#F97316] to-[#0EA5E9] text-transparent bg-clip-text">
              {" "}Your Business
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.3s" }}>
            Harness the power of automation with our cutting-edge AI and cloud solutions.
            Transform your workflows and accelerate growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button 
              className="bg-[#8B5CF6] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button 
              variant="link" 
              className="text-white group transition-all duration-300"
            >
              Learn More{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[#0F172A] opacity-50 animate-pulse" style={{ animationDuration: "4s" }} />
    </div>
  );
};