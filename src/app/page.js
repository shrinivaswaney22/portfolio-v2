import Blogs from "@/sections/Blogs";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import FeatureCards from "@/sections/FeatureCards";
import Hero from "@/sections/Hero";
import LogoShowcase from "@/sections/LogoShowcase";
import Resume from "@/sections/Resume";
import AppShowcase from "@/sections/ShowcaseSection";
import TechStack from "@/sections/TechStack";

export default function Home() {
  return (
    <>
    <Hero />
    <AppShowcase/>
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Blogs/>
    <Resume/>
    <Contact />
    </>
  );
}
