import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-xs pt-10 pb-6 text-white/70 md:text-sm">
      <div className="container flex items-center justify-center gap-2">
        <p>Built by </p>
        <Link
          href={"https://zelfroster.co"}
          className="gradient-text flex gap-[2px] items-center"
        >
          <p className="text-[14px] md:text-[20px] -mb-[2px]">&copy;</p>
          <p className="gradient-text ">Zelfroster </p>
        </Link>
        <p>{Date().split(" ").at(3)}</p>
      </div>
    </footer>
  );
}
