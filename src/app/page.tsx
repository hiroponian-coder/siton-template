import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlitchHero from "@/components/GlitchHero";
import StatusConsole from "@/components/StatusConsole";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 space-y-12 overflow-hidden">
        <GlitchHero />
        <StatusConsole />
      </main>
      <Footer />
    </>
  );
}
