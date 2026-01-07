import { ScrambleText } from "@/components/ui/scramble-text";

interface AboutHeroProps {
  title: string;
  className?: string;
}

export function AboutHero({ title, className }: AboutHeroProps) {
  return (
    <section className="container-max pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="content-max">
        <ScrambleText
          text={title}
          as="h1"
          className="text-hero text-foreground text-center"
          triggerOnView={false}
          speed={25}
          scrambleSpeed={2}
        />
      </div>
    </section>
  );
}
