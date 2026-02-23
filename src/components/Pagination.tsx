import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2">
      <button className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-colors" disabled>
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button className="w-10 h-10 rounded-lg bg-[#1D4ED8] text-[#FFFFFF] font-bold shadow-md">
        1
      </button>
      <button className="w-10 h-10 rounded-lg border border-gray-200 text-[#1F2937] hover:border-[#1D4ED8] hover:text-[#1D4ED8] font-bold transition-colors">
        2
      </button>
      <button className="w-10 h-10 rounded-lg border border-gray-200 text-[#1F2937] hover:border-[#1D4ED8] hover:text-[#1D4ED8] font-bold transition-colors">
        3
      </button>
      <button className="p-2 rounded-lg border border-gray-200 text-[#1F2937] hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-colors">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
