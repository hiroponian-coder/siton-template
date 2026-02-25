export default function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="bg-[#4A332D] pt-24 pb-16 px-4 text-center text-[#FDFBF7]">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">{title}</h1>
      <p className="text-[#D47A55] text-lg font-medium">{subtitle}</p>
    </div>
  );
}