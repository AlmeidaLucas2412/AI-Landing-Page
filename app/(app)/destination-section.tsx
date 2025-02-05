import { DestinationCard } from "@/components/destination-card";
import { Button } from "@/components/ui/button";

export const DestinationSection = () => {
  return (
    <section className="flex flex-col p-8 md:p-12 gap-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Different destinations</h2>
        <p>
          We explore the diverse ways in which this technology can revolunize
          work across variou industries and fields.
        </p>
      </div>
      <div className="flex flex-col justify-around gap-x-2 gap-y-6 md:flex-row md:gap-y-0">
        <DestinationCard
          title="Students"
          description="BRAIN AI can assist in research, provide learning materials, and answer questions"
          image="/student.jpg"
        />
        <DestinationCard
          title="Professionals"
          description="BRAIN AI can provide quick access to relevant information and offer data analysis insights"
          image="/professional.jpg"
        />
        <DestinationCard
          title="Writers"
          description="BRAIN AI can help writers by generating ideas, suggestin improvements in writing style"
          image="/writer.jpg"
        />
      </div>
      <Button variant="success" className="self-center p-6 w-fit">
        <span className="font-semibold">And more 50 other destinations</span>
      </Button>
    </section>
  );
};
