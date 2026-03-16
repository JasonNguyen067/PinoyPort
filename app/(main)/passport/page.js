"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowBackIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

//TODO: replace mock data with supabase data
const MOCK_STAMPS = Array.from({ length: 12 }).map((_, index) => ({
  id: index + 1,
  imageUrl: `/stamp.png`, 
  name: "stamp name",
}))

const ITEMS_PER_PAGE = 8;

export default function Passport() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(MOCK_STAMPS.length / ITEMS_PER_PAGE) || 1
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentStamps = MOCK_STAMPS.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }

  const getRotation = (id) => {
    const pseudoRandom = (id * 137) % 51; 
    return pseudoRandom - 25; 
  };

  return (
    <div className="flex flex-col h-screen w-full font-mono">
      <div className="flex items-center px-6 py-8 max-h-0.5">
        <Link href="/community" className="absolute left-[23px]">
          <ArrowBackIcon w={6} h={6} />
        </Link>
        <div className="w-full text-center text-xl font-bold">
          Passport
        </div>
      </div>
      <div
        className="h-full max-h-[697px] w-full max-w-[341px] rounded-r-[40px] overflow-hidden bg-gray-300 p-[17px] pl-0 shadow-[2px_4px_4px_4px_rgba(0,0,0,0.25)]"
        style={{
          backgroundImage: 'url("/leather.png")',
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="relative flex h-full w-full flex-col rounded-r-[28px] bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.28)]">
          <div className="flex-1 px-8 pt-3">
            <div className="grid grid-cols-2 gap-x-[19px] gap-y-[9px]">
              {currentStamps.map((stamp) => {
                const rotationAngle = getRotation(stamp.id || index);
                return (
                  <div key={stamp.id} className="flex flex-col items-center gap-3">
                    <div className="relative flex h-[12vh] w-[12vh] items-center justify-center rounded-full bg-gray-100 p-2 mix-blend-multiply"
                    style={{ transform: `rotate(${rotationAngle}deg)` }}>
                      <Image
                        src={stamp.imageUrl}
                        alt={stamp.name}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw, 112px"
                      />
                    </div>
                    <p className="text-center text-sm font-bold leading-tight text-gray-800">
                      {stamp.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-between px-12 py-8 text-lg font-bold">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`transition-opacity ${
                currentPage === 1 ? "cursor-not-allowed opacity-30" : "opacity-100 hover:opacity-70"
              }`}
            >
              <ChevronLeftIcon w={8} h={8} />
            </button>

            <span>
              {currentPage}/{totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`transition-opacity ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-30"
                  : "opacity-100 hover:opacity-70"
              }`}
            >
              <ChevronRightIcon w={8} h={8} />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}