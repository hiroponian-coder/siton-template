import Header from '../components/Header';
import GlitchHero from '../components/GlitchHero';
import WarningBanner from '../components/WarningBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col max-w-5xl mx-auto w-full">
        <GlitchHero />
        <WarningBanner />
      </main>
      <Footer />
    </>
  );
}