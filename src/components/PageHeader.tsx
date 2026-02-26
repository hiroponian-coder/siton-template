export default function PageHeader({ title, subtitle, image }: { title: string; subtitle: string; image?: string }) {
  return (
    <div
      className="relative pt-24 pb-16 px-4 text-center text-[#FDFBF7]"
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : { backgroundColor: "#4A332D" }}
    >
      {image && <div className="absolute inset-0 bg-[#4A332D]/70" />}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">{title}</h1>
        <p className="text-[#D47A55] text-lg font-medium">{subtitle}</p>
      </div>
    </div>
  );
}