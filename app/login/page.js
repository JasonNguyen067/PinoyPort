import React from 'react'
import login_bubble from "../../public/login_bubble.png"
import sign_up_options from "../../public/sign_up_options.png"
import welcome_back from "../../public/welcome_back.png"
import Image from "next/image";

export default function LoginPage() {
  {/* TODO: make elements dynamic */}
  return (
    <div className="flex bg-white w-screen h-screen justify-center">
      <Image
        src={login_bubble}
        className="relative top-[203px] w-[335px] h-[353px]"
        alt="Login Bubble"
      />
      <Image
        src={sign_up_options}
        className="absolute top-[578px] w-[335px] h-[83px]"
        alt="Sign Up Options"
      />
      <Image
        src={welcome_back}
        className="absolute top-[138px] w-[158px] h-[17px]"
        alt="Welcome Back"
      />
    </div>
  );
}