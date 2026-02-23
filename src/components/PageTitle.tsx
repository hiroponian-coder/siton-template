export default function PageTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#F9FAFB] py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
