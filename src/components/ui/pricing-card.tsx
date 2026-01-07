import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  variant?: "basic" | "premium";
  badge?: string;
  title: string;
  price: string;
  features: string[];
  maintenanceNote?: string; // Une seule ligne, subtile
  cta: {
    text: string;
    href: string;
  };
  className?: string;
}

export function PricingCard({
  variant = "basic",
  badge,
  title,
  price,
  features,
  maintenanceNote,
  cta,
  className,
}: PricingCardProps) {
  const isPremium = variant === "premium";

  return (
    <article
      className={cn(
        "relative bg-card rounded-card p-10",
        "flex flex-col",
        "transition-all duration-300 ease-in-out",
        isPremium ? "border-2 border-accent-primary" : "border border-border",
        "hover:-translate-y-1",
        className,
      )}
    >
      {/* Badge */}
      {badge && isPremium && (
        <div className="absolute -top-3 left-8">
          <span className="inline-flex px-3 py-1 rounded-full text-label bg-accent-primary text-accent-primary-foreground font-medium">
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-h3 text-foreground mb-component-sm">{title}</h3>

      {/* Price */}
      <div className="mb-component-lg">
        <span className="text-h1 text-foreground font-bold">{price}</span>
      </div>

      {/* Features */}
      <ul className="space-y-element mb-component-lg flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-body text-muted-foreground"
          >
            <svg
              className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Maintenance Note (subtle) */}
      {maintenanceNote && (
        <p className="text-body-sm text-muted-foreground mb-component-sm border-t border-border pt-component-sm">
          {maintenanceNote}
        </p>
      )}

      {/* CTA */}
      <Button
        variant={isPremium ? "primary" : "outline"}
        size="lg"
        className="w-full"
        asChild
      >
        <Link href={cta.href}>{cta.text}</Link>
      </Button>
    </article>
  );
}
