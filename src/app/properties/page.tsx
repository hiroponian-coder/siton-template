import PageTitle from "@/components/PageTitle";
import PropertyGrid from "@/components/PropertyGrid";
import Pagination from "@/components/Pagination";

export const metadata = {
  title: "最新物件情報 | アイビス不動産",
  description: "アイビス不動産が取り扱う最新の賃貸・売買物件情報の一覧ページです。",
};

export default function PropertiesPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pb-24">
      <PageTitle 
        title="最新物件情報" 
        description="アイビス不動産が取り扱う最新の賃貸・売買物件情報の一覧ページです。" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <PropertyGrid />
        <Pagination />
      </div>
    </div>
  );
}
