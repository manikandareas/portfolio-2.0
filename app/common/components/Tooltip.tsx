import {
  Tooltip as TooltipShadcn,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type TooltipProps = {
  icon: JSX.Element;
  title: string;
};

export function Tooltip({ icon, title }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipShadcn>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </TooltipShadcn>
    </TooltipProvider>
  );
}
