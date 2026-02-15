"use client";

import React from 'react';
import stamp from '../../public/stamp.png';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

export default function PostConfirmation({ 
  // TODO: change to use variables from supabase
    establishmentName = "name of establishment",
    dateEarned = "02/02/2026",
    stampCount = "___",
    foodImage = jason
  }) {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center p-4">
      <div className="p-6 max-w-md w-full font-mono text-black">
        <div className="text-center mb-12">
          <h2 className="text-lg mb-2">congrats!</h2>
          <p className="text-lg">
            you earned {stampCount} stamp!
          </p>
        </div>

        <div className="relative mb-6 flex justify-center">
          {/* background */}
          <div 
            className="absolute w-[340px] h-[340px] bg-white border-2 border-gray-200"
            style={{ 
              transform: 'rotate(1deg)',
              zIndex: 0
            }}
          />
          
          {/* food */}
          <div 
            className="relative bg-white shadow-md border-2 border-gray-200 z-10" 
            style={{ 
              width: 'fit-content',
              transform: 'rotate(-2deg)'
            }}
          >
            <Image 
              src={foodImage}
              alt="Food"
              width={330}
              height={330}
              className="w-[330px] h-[330px] object-cover"
              style={{ maxWidth: '100%', height: 'auto', aspectRatio: '1/1' }}
            />
            
            <div 
              className="absolute bottom-[-15] right-2"
              style={{ transform: 'rotate(8deg)' }}
            >
              <Image 
                src={stamp}
                alt="Philippines Stamp"
                width={120}
                height={120}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-base font-medium mb-1">{establishmentName}</p>
          <p className="text-sm">date earned: {dateEarned}</p>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={() => router.push('/feed')}
            className="flex-1 py-3 px-4 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            feed
          </button>
          <button 
            onClick={() => router.push('/passport')}
            className="flex-1 py-3 px-4 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-800 transition-colors"
          >
            passport
          </button>
        </div>
      </div>
    </div>
  );
}