export default function GlitchHero() {
  return (
    <div className="relative group cursor-default text-center">
      <h1 className="text-6xl md:text-8xl font-black text-[#cccccc] tracking-tighter uppercase relative z-10">
        System <span className="text-[#ff0033]">Failure</span>
      </h1>
      <h1 className="text-6xl md:text-8xl font-black text-[#00ff66] tracking-tighter uppercase absolute top-0 left-[2px] -z-10 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-75">
        System Failure
      </h1>
      <h1 className="text-6xl md:text-8xl font-black text-[#ff0033] tracking-tighter uppercase absolute top-0 -left-[2px] -z-10 opacity-70 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-75">
        System Failure
      </h1>
      <p className="mt-6 text-lg md:text-xl text-[#cccccc]/80 max-w-2xl mx-auto font-mono">
        Welcome to the Error Test environment. Prepare to trigger system bugs.
      </p>
    </div>
  );
}
