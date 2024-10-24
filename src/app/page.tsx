import { HeroParallaxDemo } from "@/components/Hero-scroll";
import Navbar from "@/components/Navbar";
import { SpotlightPreview } from "@/components/spot-ligh-componentt";
import Image from "next/image";

export default function Home() {
  return (
    <main  >
      <Navbar />

        <SpotlightPreview/>
        <HeroParallaxDemo/>
      
      
    </main>
  );
}
