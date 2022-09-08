import React from "react";
import { FaDiscord, FaMedium, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-[#120704] py-8 flex items-center justify-center gap-8 transition-opacity text-white">
      <a
        href="https://twitter.com/RenArt_Labs"
        className="opacity-50 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size="32" />
      </a>
    </footer>
  );
}
