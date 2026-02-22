import PageHeader from '@/components/PageHeader';
import AboutDetails from '@/components/AboutDetails';
import AccessMap from '@/components/AccessMap';

export const metadata = {
  title: '店舗情報 | GitHub Push Test',
  description: '店舗へのアクセスや営業時間、私たちのパン作りへのこだわりをご紹介します。',
};

export default function About() {
  return (
    <>
      <PageHeader title="店舗情報" subtitle="私たちのこだわりとアクセス" image="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />
      <AboutDetails />
      <AccessMap />
    </>
  );
}
