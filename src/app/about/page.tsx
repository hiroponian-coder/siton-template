import PageTitle from "@/components/PageTitle";
import CompanyDetails from "@/components/CompanyDetails";
import AccessMap from "@/components/AccessMap";

export const metadata = {
  title: "会社概要 | アイビス不動産",
  description: "アイビス不動産の企業理念、会社情報、アクセスについてご紹介します。",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pb-24">
      <PageTitle 
        title="会社概要" 
        description="アイビス不動産の企業理念、会社情報、アクセスについてご紹介します。" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <CompanyDetails />
        <AccessMap />
      </div>
    </div>
  );
}
