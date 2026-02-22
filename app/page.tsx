import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';

export const metadata = {
  title: 'ホーム | GitHub Push Test',
  description: '焼きたてのパンを提供する「GitHub Push Test」の公式ウェブサイト。',
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutSection />
    </>
  );
}
