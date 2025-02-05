import { TestimonialCard } from "@/components/testimonial-card";

export const TestimonialSection = () => {
  return (
    <section className="p-12 flex flex-col gap-y-6" id="testimonial">
      <div>
        <h2 className="font-semibold text-3xl">Testimonials</h2>
        <p>
          Don&apos;t just take or word for it - hear form our satisfied clients
          who have experienced the transformative impact of our AI.
        </p>
      </div>
      <div className="flex gap-x-6 justify-center">
        <TestimonialCard
          feedback="'The excelent voice recognition quality of BRAIN AI app makes it perfect for dictation and note taking. I have never come across such accuracy before'"
          image="/Craig.jpg"
          name="Craig Jordan"
          occupation="CEO, Aveva"
          green
        />
        <TestimonialCard
          feedback="'I love how BRAIN AI personalizes to my needs and offers recommendations and solutions based on by preferences and behaviors'"
          image="/Marilyn.jpg"
          name="Marilyn Long"
          occupation="UX Designer, Cyber Unit"
          purple
        />
        <TestimonialCard
          feedback="'With the help of BRAIN AI, my work has become much easier and efficient. It provides quick and accurate answers to any question i come across'"
          image="/David.jpg"
          name="David Smith"
          occupation="Head of HR, Instill"
          blue
        />
      </div>
    </section>
  );
};
