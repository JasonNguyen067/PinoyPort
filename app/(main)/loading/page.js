import React from 'react'
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex bg-white w-screen h-screen justify-center">
      <Image
        src="/logo.png"
        width={500}
        height={500}
        className='relative top-[33vw] w-[34vw] h-[50vw]'
        alt="Loading Logo"
      />
      {/* TODO: make loading bar dynamic */}
      <Image
        src="/loadingbar.png"
        width={1920}
        height={36}
        className='absolute bottom-0 left-0 h-[36px]'
        alt='Loading Bar'
      />
    </div>
  );
}
