import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { HeroLightWrapper } from "@/components/effects/hero-light-wrapper";
import { Features } from "@/components/sections/features";
import { Packages } from "@/components/sections/packages";
import { SitePerformance } from "@/components/sections/live-perfomance";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <HeroLightWrapper videoSrc="/videos/light-rays.mp4">
          <Hero
            headline="Your Competitors Are Winning Online"
            subheadline="Fix That This Week."
            bodyText="Fast, conversion-focused websites for Scottish businesses."
            primaryCTA={{
              text: "Book Strategy Call",
              href: "/contact",
            }}
            secondaryCTA={{
              text: "View Pricing",
              href: "#packages",
            }}
          />
        </HeroLightWrapper>

        <Features />
        <SitePerformance />
        <Packages
          headline="Two Paths. One Outcome: More Clients."
          packages={[
            {
              variant: "basic",
              title: "Small Business Launch",
              price: "£550–£650",
              features: [
                "5-page professional website",
                "Technical SEO foundation",
                "Contact form + booking",
                "7-day turnaround",
              ],
              cta: {
                text: "Start This Week →",
                href: "/contact",
              },
            },
            {
              variant: "premium",
              badge: "Most Popular",
              title: "Growth Accelerator",
              price: "£1,200–£1,600",
              features: [
                "Custom conversion-focused website",
                "Advanced SEO strategy",
                "Automated booking system",
                "Business tool integrations",
              ],
              maintenanceNote: "Includes £150–200/month maintenance & support",
              cta: {
                text: "Book Strategy Call →",
                href: "/contact",
              },
            },
          ]}
        />
      </main>
    </>
  );
}
