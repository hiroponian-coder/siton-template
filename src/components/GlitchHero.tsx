import { Cpu } from 'lucide-react';

export default function GlitchHero() {
  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center text-center overflow-hidden border-b border-[#33FF00]/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.1)_0,transparent_100%)] pointer-events-none" />
      <Cpu size={64} className="text-[#E50914] mb-8 animate-[spin_3s_linear_infinite]" />
      <h1 
        className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter glitch text-[#E50914]" 
        data-text="Critical_Error"
      >
        Critical_Error
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-[#FFFF00] border-l-4 border-[#E50914] pl-4 text-left font-mono">
        &gt; Welcome to the Buggy IT Test environment.
        <br />
        &gt; Analyzing system integrity...
        <br />
        <span className="text-[#E50914] animate-pulse">&gt; WARNING: System failure is imminent.</span>
      </p>
    </section>
  );
}