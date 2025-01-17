import { space } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "h-screen w-full grid place-items-center text-9xl uppercase tracking-tighter font-bold",
        space.className,
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
