import { cn } from "@/lib/utils";
import { Crown, Lightbulb, Zap } from "lucide-react";

type Props = {
  title: string;
  basic: string;
  advanced: string;
  premium: string;
  planTitle?: boolean;
};

export const PlanBenefits = ({
  title,
  basic,
  advanced,
  premium,
  planTitle,
}: Props) => {
  return (
    <div className="flex items-center justify-between p-2 shadow-md gap-x-6">
      <span className="w-1/2 font-semibold">{title}</span>
      <div
        className={cn(
          "flex justify-evenly flex-1 text-center",
          planTitle && "justify-around ml-3"
        )}
      >
        {planTitle ? (
          <>
            <div className="flex items-center p-2 rounded-sm gap-x-2 bg-lime-200">
              <span className="flex-1 text-foreground">{basic}</span>
              <Lightbulb className="shrink-0 size-4 text-foreground" />
            </div>
            <div className="flex items-center p-2 rounded-sm gap-x-2 bg-violet-300">
              <span className="flex-1 text-foreground">{advanced}</span>
              <Zap className="shrink-0 size-4 text-foreground" />
            </div>
            <div className="flex items-center p-2 rounded-sm gap-x-2 bg-amber-200">
              <span className="flex-1 text-foreground">{premium}</span>
              <Crown className="shrink-0 size-4 text-foreground" />
            </div>
          </>
        ) : (
          <>
            <span className="flex-1">{basic}</span>
            <span className="flex-1">{advanced}</span>
            <span className="flex-1">{premium}</span>
          </>
        )}
      </div>
    </div>
  );
};
