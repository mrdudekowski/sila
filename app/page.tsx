import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { IdentityStatement } from "@/components/sections/IdentityStatement";
import { Principles } from "@/components/sections/Principles";
import { Process } from "@/components/sections/Process";
import { LeadSection } from "@/components/sections/LeadSection";
import { TextLoop } from "@/components/ui/TextLoop";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TextLoop text="DIGITAL ARCHITECTURE — IDENTITY — INTERFACES — DEVELOPMENT —" />
      <Intro />
      <Services />
      <Method />
      <SelectedWorks />
      <IdentityStatement />
      <Principles />
      <Process />
      <LeadSection />
    </>
  );
}
