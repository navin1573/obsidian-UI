import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Board } from "@/components/Board";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 to-gray-950 relative overflow-hidden">

      <div className="grain-bg" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Card />
       <Board></Board>
        <Footer />
      </div>
    </div>
  );
}
