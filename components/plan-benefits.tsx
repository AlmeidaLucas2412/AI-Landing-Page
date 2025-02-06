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
    <div className="flex flex-col justify-between p-2 shadow-md md:items-center md:flex-row gap-x-6">
      <span className="font-semibold xs:text-center md:text-start md:w-1/2">
        {title}
      </span>
      <div
        className={cn(
          "flex justify-evenly flex-1 text-center",
          planTitle && "justify-around md:gap-x-2 ml-4"
        )}
      >
        {planTitle ? (
          <>
            <div className="flex items-center p-2 rounded-sm gap-x-2 bg-lime-200">
              <span className="flex-1 text-foreground xs:text-xs m:text-base">
                {basic}
              </span>
              <Lightbulb className="shrink-0 size-4 text-foreground xs:hidden lg:flex" />
            </div>
            <div className="flex items-center p-2 rounded-sm gap-x-2 bg-violet-300">
              <span className="flex-1 text-foreground xs:text-xs m:text-base">
                {advanced}
              </span>
              <Zap className="shrink-0 size-4 text-foreground xs:hidden lg:flex" />
            </div>
            <div className="flex items-center p-2 rounded-sm gap-x-2 bg-amber-200">
              <span className="flex-1 text-foreground xs:text-xs m:text-base">
                {premium}
              </span>
              <Crown className="shrink-0 size-4 text-foreground xs:hidden lg:flex" />
            </div>
          </>
        ) : (
          <>
            <span className="flex-1 xs:text-xs m:text-base">{basic}</span>
            <span className="flex-1 xs:text-xs m:text-base">{advanced}</span>
            <span className="flex-1 xs:text-xs m:text-base">{premium}</span>
          </>
        )}
      </div>
    </div>
  );
};
