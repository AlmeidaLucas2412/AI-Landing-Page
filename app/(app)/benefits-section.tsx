import { PlanBenefits } from "@/components/plan-benefits";
import Image from "next/image";

export const BenefitsSection = () => {
  return (
    <section
      className="flex flex-col px-8 py-20 md:px-12 bg-custom-gradient rounded-xl text-background gap-y-2"
      id="pricing"
    >
      <h2 className="pb-8 text-3xl font-semibold text-center">
        Choose your favorite plan
      </h2>
      <PlanBenefits
        title="Subscription Level"
        basic="Basic"
        advanced="Advanced"
        premium="Premium"
        planTitle
      />
      <PlanBenefits
        title="Numbers of Users"
        basic="1"
        advanced="Up to 5"
        premium="Unlimited"
      />
      <PlanBenefits
        title="Customer Support"
        basic="Online"
        advanced="Priority"
        premium="Premium"
      />
      <PlanBenefits
        title="Monthly Requests"
        basic="1000"
        advanced="5000"
        premium="Unlimited"
      />
      <PlanBenefits
        title="Data Packages"
        basic="1 GB"
        advanced="5 GB"
        premium="10 GB"
      />
      <PlanBenefits
        title="Flexible Cancellation"
        basic="Available"
        advanced="Available"
        premium="Available"
      />
      <PlanBenefits
        title="Monthly Cost"
        basic="$9.99"
        advanced="$19.99"
        premium="$39.99"
      />
      <div className="flex flex-col-reverse items-center self-center px-4 py-6 mt-4 md:px-8 lg:flex-row">
        <div className="flex flex-col items-center text-center lg:w-1/2 gap-y-2">
          <span className="text-3xl font-semibold">Try it right now</span>
          <span className="lg:w-1/2 xs:text-sm m:text-base">
            Download the Brain AI on the AppStore and Google Play and discover
            the world of artifical intelligence! Enjoy innovative AI
            technologies directly on yout device
          </span>
          <Image
            src="/stores.png"
            alt="stores"
            width={200}
            height={200}
            className="xs:w-1/2 md:size-1/3 lg:size-1/2 xl:size-1/3"
          />
        </div>
        <Image
          src="/phone.png"
          alt="iPhone"
          width={600}
          height={600}
          className="lg:ml-2 md:size-1/2 xl:size-1/3"
        />
      </div>
    </section>
  );
};
