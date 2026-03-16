"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/passport") {
    return null;
  }

  return (
    <nav>
      Navbar
    </nav>
  );
}