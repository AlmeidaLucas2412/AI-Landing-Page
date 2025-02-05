import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-custom-gradient h-[calc(100vh-400px)] p-4 rounded-xl items-center text-background flex justify-center md:justify-between relative overflow-hidden">
      <div className="z-50 flex flex-col w-full md:ml-8 md:w-1/3 gap-y-6">
        <p className="text-xl font-semibold md:text-4xl">
          Unleash the full potential of AI
        </p>
        <span className="text-xs md:text-sm">
          BRAIN AI is a versatile assistant that utilizes the power of AI to
          help you achieve your goals. Using a combination of natural language
          processing and machine learning, BRAIN AI can understand and respond
          to a wide range of queries and requests.
        </span>
        <div className="flex flex-col gap-x-2 md:flex-row">
          <Button variant="success" className="text-foreground">
            <span>Get the App</span>
            <ArrowRight />
          </Button>
          <Button variant="ghost">
            <span>Learn more</span>
          </Button>
        </div>
        <div className="flex self-center gap-x-4 md:self-start">
          <div className="flex flex-col">
            <p className="text-2xl font-bold">4.8</p>
            <span className="text-sm">Rating on AppStore</span>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">700K+</p>
            <span className="text-sm">Active Users</span>
          </div>
        </div>
      </div>
      <Image
        src="/robot.png"
        width={400}
        height={400}
        alt="Robot"
        className="absolute bottom-0 right-0 opacity-15 md:opacity-100"
      />
    </section>
  );
};
