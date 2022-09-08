import dynamic from "next/dynamic";
import React from "react";


const navigation = [
  { name: "Recap the #EarlyDogArt Contest", href: "earlydogart" },
];

export default function Nav() {
  return (
    <div className="bg-[#120704]">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 my-1"
        aria-label="Global"
      >

        <div className="flex items-left flex-1">
          <div className="space-x-8 flex ml-10">
            <img 
            height={45}
            width={45}
            src="/assets/renarticon.png"></img>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-4">
          </div>
        </div>
      </nav>
    </div>
  );
}
