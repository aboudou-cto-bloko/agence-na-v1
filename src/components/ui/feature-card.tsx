import { cn } from "@/lib/utils";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  number,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group",
        "bg-card border border-border p-8 rounded-card",
        "space-y-component-sm",
        "transition-all duration-300 ease-in-out",
        "hover:border-accent-primary hover:-translate-y-1",
        className,
      )}
    >
      {/* Number Indicator */}
      <div className="flex items-center justify-between">
        <span className="text-h4 font-bold text-accent-primary">{number}</span>

        {/* Optional: Arrow icon for visual interest */}
        <svg
          className="w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-h3 text-foreground">{title}</h3>

      {/* Description */}
      <p className="text-body text-muted-foreground">{description}</p>
    </article>
  );
}
