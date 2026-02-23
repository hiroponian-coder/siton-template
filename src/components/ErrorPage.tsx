import { XOctagon, FileWarning } from 'lucide-react';

export default function ErrorPage() {
  const injectedCode = `import React from 'react';
import { NonExistentComponent } from 'this-package-does-not-exist-12345';

export default function ErrorPage() {
  return (
    <main>
      <NonExistentComponent />
    </main>
  );
}`;

  return (
    <div className="p-8 flex flex-col gap-6 max-w-4xl mx-auto w-full mt-10 border-2 border-[#E50914] bg-[#000000] relative shadow-[0_0_20px_rgba(229,9,20,0.5)]">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#E50914] animate-pulse" />
      
      <div className="flex items-center gap-4 border-b border-[#E50914]/50 pb-4">
        <XOctagon size={40} className="text-[#E50914]" />
        <div>
          <h2 className="text-2xl font-bold text-[#E50914] uppercase">Module Not Found</h2>
          <p className="text-[#FFFF00] text-sm">Failed to resolve dependencies in /src/components/ErrorPage.tsx</p>
        </div>
      </div>

      <div className="bg-[#111111] p-4 rounded border border-[#33FF00]/20 font-mono text-sm overflow-x-auto relative">
        <div className="absolute right-2 top-2 text-[#E50914]/50 flex items-center gap-1">
          <FileWarning size={16} />
          <span className="text-xs">Injected Source Simulation</span>
        </div>
        <pre className="text-[#33FF00] mt-4">
          <code>{injectedCode}</code>
        </pre>
      </div>

      <div className="bg-[#E50914]/10 p-4 border-l-4 border-[#E50914]">
        <p className="text-[#E50914] font-bold mb-2">Build Error Mitigated</p>
        <p className="text-sm opacity-80 text-[#33FF00]">
          The requested package <span className="bg-[#E50914] text-[#FFFF00] px-1">this-package-does-not-exist-12345</span> could not be found. 
          To prevent actual build failures and ensure a deployable state according to constraints, this error has been safely caught and rendered as a mock UI.
        </p>
      </div>
    </div>
  );
}