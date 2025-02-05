import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  feedback: string;
  image: string;
  name: string;
  occupation: string;
  green?: boolean;
  purple?: boolean;
  blue?: boolean;
};

export const TestimonialCard = ({
  feedback,
  image,
  name,
  occupation,
  green,
  purple,
  blue,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-6 p-8 pb-6 rounded-2xl w-1/4",
        green && "bg-lime-200",
        purple && "bg-violet-300",
        blue && "bg-sky-200"
      )}
    >
      <p>{feedback}</p>
      <div className="flex gap-x-2 items-center">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-7 h-7 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="font-semibold text-sm">{occupation}</span>
        </div>
      </div>
    </div>
  );
};
