import Companies from "@/components/Companies";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OnlineExperience from "@/components/OnlineExperience";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Companies />
      <OnlineExperience />
    </>
  );
}
