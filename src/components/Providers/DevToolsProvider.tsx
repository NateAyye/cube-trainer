import Link from "next/link";
import React from "react";

type DevToolsProviderProps = {
  children: React.ReactNode;
};

const DevToolsProvider: React.FC<DevToolsProviderProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <Link
        className="absolute bottom-5 right-5 z-[1000] rounded-lg bg-background px-4 py-2 font-degular font-semibold shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6),4px_2px_8px_rgba(0,0,0,0.6)] "
        href="/test"
      >
        Test Page
      </Link>
    </div>
  );
};

export default DevToolsProvider;
