import React from 'react'
import logo from "../public/logo.png"
import loadingbar from "../public/loadingbar.png"
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex bg-white w-screen h-screen justify-center">
      <Image 
        src={logo}
        className='relative top-[33vw] w-[34vw] h-[50vw]'
        alt="Loading Logo"
      />
      {/* TODO: make loading bar dynamic */}
      <Image 
        src={loadingbar}
        className='absolute bottom-0 left-0 h-[36px]'
        alt='Loading Bar'
      />
    </div>
  );
}
