'use client';
import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { BsBullseye } from 'react-icons/bs';
import { AiFillEnvironment } from 'react-icons/ai';

export default function ProfilePage() {
  const [establishments, setEstablishments] = useState([
    { id: 1, name: 'Establishment 1', city: 'City', state: 'State' },
    { id: 2, name: 'Establishment 2', city: 'City', state: 'State' },
    { id: 3, name: 'Establishment 3', city: 'City', state: 'State' },
    { id: 4, name: 'Establishment 4', city: 'City', state: 'State' },
    { id: 5, name: 'Establishment 5', city: 'City', state: 'State' },
  ]);

  return (
    <div style={styles.pageContainer}>
        <h2 style={styles.title}>Ranking</h2>
        
        <div style={styles.list}>
          {establishments.map((establishment, index) => (
            <div key={establishment.id} style={{...styles.item, top: `${432 + index * 70}px`}}>
              <div style={styles.bullseye}>
                <BsBullseye size={30} color="black" />
              </div>
              
              <div style={styles.content}>
                <div style={styles.name}>{establishment.name}</div>
                <div style={styles.location}>
                  <AiFillEnvironment size={17} style={{ marginRight: '4px' }} />
                  {establishment.city}, {establishment.state}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
"use client";

import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from "@mui/icons-material/Add";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";


export default function ProfilePage() {
  const headerFont = { fontFamily: '"Azeret Mono", monospace' };
  const bodyFont = { fontFamily: '"Commissioner", system-ui, sans-serif' };

  return (
    <main
      style={bodyFont}
      className="min-h-screen bg-[#202225] flex justify-center"
    >
      <div className="w-[360px] h-[780px] bg-gradient-to-b from-[#f5f5f5] to-[#d9d9d9] rounded-3xl shadow-xl flex flex-col px-4 pt-4 pb-6">
        {/* code is for the top portion of the profile page */}
        <header className="flex items-center justify-between text-[#333] ml-3">
          <button className="flex items-center">
            <ArrowBackIcon sx={{ fontSize: 18 }} />
          </button>
          <div className="flex items-center gap-4">
            <AddIcon sx={{ fontSize: 20 }} />
            <SettingsOutlinedIcon sx={{ fontSize: 20 }} />
          </div>
        </header>

        {/* spacer – controls how low the avatar/name starts */}
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
              <span className="px-3 py-[3px] rounded-full bg-[#c4c4c4]">
                OC &amp; LA
              </span>
              <span className="px-3 py-[3px] rounded-full bg-[#c4c4c4]">
                nut-free
              </span>
              <span className="px-3 py-[3px] rounded-full bg-[#c4c4c4]">
                gym rat
              </span>
            </div>
          </div>
        </div>

        {/* crown + text */}
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
    </main>
  );
}

const styles = {
  pageContainer: {
    padding: '20px',
    width: '360px',
    height: '800px',
    margin: '0 auto',
    background: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
  },
  rankingSection: {
    marginTop: '20px',
  },
  title: {
    width: '92px',
    height: '24px',
    top: '403px',
    left: '25px',
    position: 'absolute',
    transform: 'rotate(0deg)',
    opacity: 1,
    fontFamily: 'var(--font-azeret-mono)',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#000',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    background: '#b0b0b0',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    width: '310px',
    height: '63px',
    top: '712px',
    left: '25px',
    position: 'absolute',
    transform: 'rotate(0deg)',
    opacity: 1,
  },
  content: {
    flex: 1,
    marginLeft: '50px',
  },
  bullseye: {
    width: '30px',
    height: '30px',
    left: '16px',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#000',
    marginBottom: '4px',
    fontFamily: 'var(--font-commissioner)',
    lineHeight: '100%',
    letterSpacing: '0%',
  },
  location: {
    fontSize: '14px',
    color: '#000',
    fontFamily: 'var(--font-commissioner)',
    fontWeight: '400',
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  controls: {
    display: 'flex',
    gap: '8px',
  },
  button: {
    width: '36px',
    height: '36px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: '#666',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
};