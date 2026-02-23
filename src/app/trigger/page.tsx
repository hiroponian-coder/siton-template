"use client"
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorDashboard from "@/components/ErrorDashboard";
import TriggerButtons from "@/components/TriggerButtons";
import LiveLog from "@/components/LiveLog";

export default function TriggerPage() {
  const [logs, setLogs] = useState<{ id: number; message: string; type: 'error' | 'warning' | 'info' }[]>([]);

  const addLog = (message: string, type: 'error' | 'warning' | 'info') => {
    setLogs(prev => [...prev, { id: Date.now(), message, type }].slice(-10));
  };

  return (
    <>
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-[#ff0033] mb-2 font-mono flex items-center gap-2">
            BUG_CONTROL_CENTER
          </h1>
          <p className="text-[#cccccc]/70 font-mono text-sm">Interface to manually trigger and analyze various IT errors.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ErrorDashboard />
            <TriggerButtons onTrigger={addLog} />
          </div>
          <div className="lg:col-span-1">
            <LiveLog logs={logs} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
