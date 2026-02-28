export default function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="pt-32 pb-16 bg-white border-b border-slate-100 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black text-[#334155] mb-4">{title}</h1>
        <div className="h-1 w-20 bg-[#D97706] mx-auto mb-6"></div>
        <p className="text-slate-500 tracking-widest uppercase text-sm">{subtitle}</p>
      </div>
    </div>
  );
}