import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full", className)}
      {...props}
    />
  );
}