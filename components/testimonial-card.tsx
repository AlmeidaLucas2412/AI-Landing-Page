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
        "flex m:flex-col xs:flex-col-reverse gap-y-6 xs:p-6 m:p-8 lg:py-6 lg:px-8 pb-6 rounded-2xl lg:w-1/4",
        green && "bg-lime-200",
        purple && "bg-violet-300",
        blue && "bg-sky-200"
      )}
    >
      <p className="xs:text-sm m:text-base">{feedback}</p>
      <div className="flex items-center gap-x-2">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover rounded-full w-7 h-7"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm font-semibold">{occupation}</span>
        </div>
      </div>
    </div>
  );
};
