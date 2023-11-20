import { Icons } from "@/components/icons";
import React from "react";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto h-screen grid place-items-center">
      {/* all icons */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {Object.entries(Icons).map(([name, Icon]) => (
          <div key={name} className="flex flex-col items-center border p-4">
            <Icon className="w-16 h-16" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
