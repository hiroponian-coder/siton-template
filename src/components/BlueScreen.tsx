export default function BlueScreen() {
  return (
    <div className="h-full w-full bg-[#0000aa] text-white p-8 md:p-16 flex flex-col font-mono cursor-none">
      <div className="bg-white text-[#0000aa] px-2 py-1 inline-block self-start font-bold mb-8">
        ERROR_TEST
      </div>
      <p className="mb-6">
        A fatal exception 0E has occurred at 0028:C0011E36 in VXD VMM(01) + 00010E36. <br/>
        The current application will be terminated.
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-2">
        <li>Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</li>
        <li>Do not attempt to salvage data. The core is compromised.</li>
      </ul>
      <p className="mt-8 text-center animate-pulse">
        Press any key to continue _
      </p>
      <div className="mt-auto text-xs opacity-50">
        STOP: 0x00000000 (0x00000000, 0x00000000, 0x00000000, 0x00000000)
      </div>
    </div>
  );
}
