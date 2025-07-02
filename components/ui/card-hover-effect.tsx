import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-white border-2 border-gray-200 group-hover:border-purple-400 relative z-20 shadow group-hover:shadow-xl transition-all duration-300 min-h-[300px] dark:bg-gray-800 dark:border-gray-700 dark:group-hover:border-purple-600",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-gray-900 dark:text-white font-bold tracking-wide text-xl mb-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed text-base",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}; 