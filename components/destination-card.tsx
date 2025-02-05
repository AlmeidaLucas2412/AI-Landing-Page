import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

export const DestinationCard = ({ image, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center text-center gap-y-2">
      <div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover rounded-2xl w-72 h-72"
        />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="w-full text-sm md:w-1/2">{description}</p>
    </div>
  );
};
