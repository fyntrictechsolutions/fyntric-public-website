import { Hero } from "@/components/sections/home/Hero";
import { Industries } from "@/components/sections/home/Industries";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { ServicesExplorer } from "@/components/sections/home/ServicesExplorer";
import { SolutionsGrid } from "@/components/sections/home/SolutionsGrid";
import { Statement } from "@/components/sections/home/Statement";
import { TechStack } from "@/components/sections/home/TechStack";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { finalCta, homeFaqs, homeSeo } from "@/content/home";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ ...homeSeo, path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <ServicesExplorer />
      <SolutionsGrid />
      <WhyChooseUs />
      <ProcessSection />
      <TechStack />
      <Industries />
      <FaqSection faqs={homeFaqs} />
      <CtaBanner heading={finalCta.heading} text={finalCta.text} buttonLabel={finalCta.button} />
    </>
  );
}
