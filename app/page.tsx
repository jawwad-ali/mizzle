import Companies from "@/components/Companies";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OnlineExperience from "@/components/OnlineExperience";
import Plan from "@/components/Plan";
import Specialization from "@/components/Specialization";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Companies />
      <OnlineExperience />
      <Specialization />
      <Plan />
    </>
  );
}
