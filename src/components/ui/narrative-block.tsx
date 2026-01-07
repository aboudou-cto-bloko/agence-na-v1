import { cn } from "@/lib/utils";

interface NarrativeBlockProps {
  content: string[];
  className?: string;
}

export function NarrativeBlock({ content, className }: NarrativeBlockProps) {
  return (
    <div className={cn("max-w-3xl space-y-component-sm", className)}>
      {content.map((paragraph, index) => (
        <p
          key={index}
          className="text-body-lg text-muted-foreground leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
