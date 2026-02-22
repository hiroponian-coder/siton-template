import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';

export const metadata = {
  title: 'メニュー | GitHub Push Test',
  description: '当店自慢のパンのメニュー一覧です。',
};

export default function Products() {
  return (
    <>
      <PageHeader title="メニュー" subtitle="当店自慢の焼き立てパン" image="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />
      <ProductGrid />
    </>
  );
}
