interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-[#4A3A31]/70 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 text-center px-4 mt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#FAF6F0] mb-4 drop-shadow-md tracking-tight">
          {title}
        </h1>
        <p className="text-[#E8D5B5] text-lg md:text-xl max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
        <div className="w-16 h-1 bg-[#D35400] mx-auto rounded-full mt-6"></div>
      </div>
    </section>
  );
}
