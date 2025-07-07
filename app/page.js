import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Board } from "@/components/Board";

export default function Home() {
  return (
<div className="min-h-screen bg-gradient-to-tr from-[#000000] to-white/5 relative overflow-hidden">     <svg
     className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-20"
     xmlns="http://www.w3.org/2000/svg"
     preserveAspectRatio="none"
   >
     <filter id="grain">
       <feTurbulence type="turbulence" baseFrequency="1" numOctaves="0.9" stitchTiles="stitch" />
       <feColorMatrix type="saturate" values="0" />
     </filter>
     <rect width="100%" height="100%" filter="url(#grain)" />
   </svg>
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Card />
        <Board />
        <Footer />
      </div>
    </div>
  );
}
