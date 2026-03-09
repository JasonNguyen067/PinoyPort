"use client";

import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from "@mui/icons-material/Add";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function ProfileHeader() {
  const headerFont = { fontFamily: '"Azeret Mono", monospace' };
  const bodyFont = { fontFamily: '"Commissioner", system-ui, sans-serif' };

  return (
    <div style={bodyFont}>
      <header className="flex items-center justify-between text-[#333] ml-3">
        <button className="flex items-center">
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </button>
        <div className="flex items-center gap-4">
          <AddIcon sx={{ fontSize: 20 }} />
          <SettingsOutlinedIcon sx={{ fontSize: 20 }} />
        </div>
      </header>

      {/* spacer */}
      <div className="mt-[120px]" />

      {/* avatar + name + chips */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className="
            w-16 h-16 rounded-full
            bg-[url('/background_placeholder.jpg')]
            bg-cover bg-center
            flex items-center justify-center
            text-white text-3xl font-semibold overflow-hidden
          "
        >
          <span className="-mt-[2px]">P</span>
        </div>

        <div className="flex-1">
          <h1
            style={headerFont}
            className="text-[20px] font-bold tracking-tight text-[#222]"
          >
            Pinoyport
          </h1>

          <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-black font-semibold">
            <span className="rounded-full bg-[#c4c4c4] flex items-center justify-center" style={{ width: '67px', height: '27px' }}>
              OC &amp; LA
            </span>
            <span className="rounded-full bg-[#c4c4c4] flex items-center justify-center" style={{ width: '67px', height: '27px' }}>
              nut-free
            </span>
            <span className="rounded-full bg-[#c4c4c4] flex items-center justify-center" style={{ width: '67px', height: '27px' }}>
              gym rat
            </span>
          </div>
        </div>
      </div>

      {/* crown + achievement */}
      <div className="flex items-center gap-2 mt-2 ml-1 mb-3">
        <img src="AiFillCrown.png" alt="crown" className="w-4 h-4" />
        <span
          style={headerFont}
          className="text-[11px] tracking-[0.02em] text-[#222]"
        >
          posted 5+ reviews in the past week!
        </span>
      </div>

      {/* Bio */}
      <section className="mb-3">
        <h2
          style={headerFont}
          className="text-[20px] ml-1 font-normal mb-1 tracking-tight text-[#222]"
        >
          Bio
        </h2>
        <div className="bg-[#c4c4c4] rounded-2xl px-3 py-2">
          <p className="text-[11px] leading-snug text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ullamcorper lacus eget nisl ullamcorper, vitae fermentum nibh
            vestibulum.
          </p>
        </div>
      </section>
    </div>
  );
}
