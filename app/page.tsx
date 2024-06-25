import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OnlineExperience from "@/components/OnlineExperience";
import Plan from "@/components/Plan";
import Specialization from "@/components/Specialization";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Companies />
      <OnlineExperience />
      <Specialization />
      <Plan />
      <Testimonials />
      <Footer />
    </>
  );
}
