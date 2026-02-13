import React from "react";
import logo from "../public/logo.png";
import loadingbar from "../public/loadingbar.png";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex bg-white flex-col items-center justify-center overflow-hidden">
      {/* responsive size, priority so it loads first */}
      <Image
        src={logo}
        alt="Loading Logo"
        priority
        sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 320px"
        className="h-auto w-[45vw] max-w-[180px] object-contain sm:w-[40vw] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[320px]"
      />
      {/* TODO: make loading bar dynamic */}
      <Image
        src={loadingbar}
        alt="Loading Bar"
        className="absolute bottom-0 left-0 h-8 w-full object-cover object-left sm:h-9 md:h-10 lg:h-12"
      />
    </div>
  );
}
