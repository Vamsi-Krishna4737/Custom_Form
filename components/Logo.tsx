import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer ml-2"
      >
        Forms
      </Link>
    </div>
  );
}

export default Logo;
