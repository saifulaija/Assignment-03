import React from "react";
import { Input } from "../ui/input";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="w-full bg-muted-foreground py-32 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-primary">
          How can we help you?
        </h2>
        <div className="relative mt-4">
          <Input
            type="search"
            placeholder="Search for answers..."
            className={cn(
              "w-full pl-4 pr-12 py-3 rounded-md border border-gray-300 focus:border-primary focus:outline-none shadow-sm transition duration-200"
            )}
          />
          <MoveRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary cursor-pointer transition duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
