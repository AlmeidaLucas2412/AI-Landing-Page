import Image from "next/image";
import { DestinationSection } from "./destination-section";
import { Hero } from "./hero";
import {
  CalendarDays,
  HouseWifi,
  Rocket,
  Search,
  TvMinimalPlay,
} from "lucide-react";
import { Feature } from "@/components/feature";
import { TestimonialSection } from "./testimonial-section";
import { BenefitsSection } from "./benefits-section";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationSection />
      <section className="flex flex-col justify-center p-8 md:flex-row md:gap-x-6">
        <Image src="/robot-head.png" alt="" width={400} height={400} />

        <div className="flex flex-col gap-y-4" id="features">
          <Feature icon={Search} title="Finding information" />
          <Feature
            icon={Rocket}
            title="Help for designers"
            description="AI-powered applications can analyze vast ammounts of visual data and provide designers with inspiration for their creative projects."
            mainFeature
          />
          <Feature icon={HouseWifi} title="Home automation" />
          <Feature icon={TvMinimalPlay} title="Entertainment" />
          <Feature icon={CalendarDays} title="Planning assistance" />
        </div>
      </section>
      <TestimonialSection />
      <BenefitsSection />
    </>
  );
}
