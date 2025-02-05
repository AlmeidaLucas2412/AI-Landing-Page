import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: string | LucideIcon;
  title: string;
  description?: string;
  mainFeature?: boolean;
};

export const Feature = ({
  icon: Icon,
  title,
  description,
  mainFeature,
}: Props) => {
  return (
    <div
      className={cn(
        "border-b border-gray-500 lg:rounded-full flex flex-col p-8",
        mainFeature && "bg-foreground text-background border-0"
      )}
    >
      <div className="flex items-center sm:justify-center gap-x-2">
        <Icon className="shrink-0 size-4" />
        <span className="font-semibold">{title}</span>
      </div>
      {description && <p className="text-sm sm:text-center">{description}</p>}
    </div>
  );
};
