import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "お問い合わせ | アイビス不動産",
  description: "物件に関するお問い合わせやご相談、来店予約はこちらから承ります。",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pb-24">
      <PageTitle 
        title="お問い合わせ" 
        description="物件に関するお問い合わせやご相談、来店予約はこちらから承ります。" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <ContactForm />
      </div>
    </div>
  );
}
