import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-custom-gradient p-12 rounded-xl items-center text-background flex justify-between">
      <div className="ml-8 flex flex-col gap-y-6">
        <p className="font-semibold text-4xl">
          Unleash the full potential of AI
        </p>
        <span>
          BRAIN AI is a versatile assistant that utilizes the power of AI to
          help you achieve your goals.
        </span>
        <div className="flex gap-x-2">
          <Button variant="success" className="text-foreground">
            <span>Get the App</span>
            <ArrowRight />
          </Button>
          <Button variant="ghost">
            <span>Learn more</span>
          </Button>
        </div>
        <div className="flex gap-x-4">
          <div className="flex flex-col">
            <p className="font-bold text-2xl">4.8</p>
            <span className="text-sm">Rating on AppStore</span>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-2xl">700K+</p>
            <span className="text-sm">Active Users</span>
          </div>
        </div>
      </div>
      <div>
        <Image src="/robot.png" width={500} height={500} alt="Robot" />
      </div>
    </section>
  );
};
