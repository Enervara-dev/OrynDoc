import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BackedBy } from "@/components/sections/BackedBy";
import { Problem } from "@/components/sections/Problem";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { PracticeTransformation } from "@/components/sections/PracticeTransformation";
import { ForWhom } from "@/components/sections/ForWhom";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <BackedBy />
        <Problem />
        <Ecosystem />
        <PatientJourney />
        <PracticeTransformation />
        <ForWhom />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
