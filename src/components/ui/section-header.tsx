import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  headline,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <div
      className={cn("space-y-component-sm", alignmentClasses[align], className)}
    >
      {label && <p className="text-label text-accent-primary">{label}</p>}

      <h2 className="text-h2 text-foreground">{headline}</h2>

      {description && (
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
