"use client"
import { useState, useEffect } from 'react';
import BlueScreen from "@/components/BlueScreen";
import RebootSequence from "@/components/RebootSequence";

export default function FatalCrashPage() {
  const [phase, setPhase] = useState<'bsod' | 'reboot'>('bsod');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('reboot');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden text-[#cccccc] font-mono select-none">
      {phase === 'bsod' ? <BlueScreen /> : <RebootSequence />}
    </main>
  );
}
