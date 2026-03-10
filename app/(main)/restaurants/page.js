"use client";

import Link from "next/link";
import { useState, useRef, useCallback } from "react";

const MOCK_TAGS = ["Tag 1", "Tag 2", "Tag 3"];
const MOCK_ESTABLISHMENTS = [
  {
    id: "1",
    name: "name of establishment",
    tags: ["tag here", "tag here", "tag here"],
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Second establishment",
    tags: ["Filipino", "Street food", "Quick bite"],
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "Third spot",
    tags: ["Dessert", "Coffee", "Cozy"],
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
];

function EstablishmentCard({ establishment }) {
  return (
    <Link
      href={`/establishments/${establishment.id}`}
      className="block rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200 mb-4 active:opacity-90"
    >
      <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={establishment.imageUrl}
          alt={establishment.name}
          className="w-full h-full object-cover grayscale"
        />
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-white drop-shadow-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-base">{establishment.name}</h3>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {establishment.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-gray-200 text-gray-700 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

const SHEET_MIN = 28;
const SHEET_MAX = 88;

export default function RestaurantFeedPage() {
  const [sheetPercent, setSheetPercent] = useState(40);
  const contentRef = useRef(null);
  const dragRef = useRef({ startY: 0, startPercent: 0 });

  const handleMove = useCallback(
    (clientY) => {
      const el = contentRef.current;
      if (!el) return;
      const { startY, startPercent } = dragRef.current;
      const contentHeight = el.getBoundingClientRect().height;
      const deltaY = startY - clientY; // drag up = positive delta
      const deltaPercent = (deltaY / contentHeight) * 100;
      const next = Math.max(SHEET_MIN, Math.min(SHEET_MAX, startPercent + deltaPercent));
      setSheetPercent(next);
    },
    []
  );

  const startDrag = useCallback(
    (clientY) => {
      dragRef.current = { startY: clientY, startPercent: sheetPercent };
      const onMove = (e) => handleMove(e.touches ? e.touches[0].clientY : e.clientY);
      const onEnd = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onEnd);
        document.removeEventListener("touchmove", onMove, { passive: true });
        document.removeEventListener("touchend", onEnd);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onEnd);
      document.addEventListener("touchmove", onMove, { passive: true });
      document.addEventListener("touchend", onEnd);
    },
    [sheetPercent, handleMove]
  );

  return (
    <div className="h-screen bg-gray-100 flex flex-col max-w-lg mx-auto overflow-hidden">
      {/* Map + draggable sheet container */}
      <div ref={contentRef} className="flex-1 min-h-0 flex flex-col">
        {/* Map area */}
        <div
          className="relative bg-gray-300 overflow-hidden shrink-0"
          style={{ height: `${100 - sheetPercent}%` }}
        >
          <div
            className="absolute inset-0 bg-gray-400 opacity-60"
            style={{
              backgroundImage: `linear-gradient(90deg, #9ca3af 1px, transparent 1px),
              linear-gradient(#9ca3af 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          {/* Header over map */}
          <div className="absolute top-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-center bg-transparent">
            <Link
              href="/"
              className="p-2 -ml-2 rounded-full text-gray-700 hover:bg-gray-100 absolute left-4"
              aria-label="Back"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="font-[var(--font-azeret-mono)] text-xl font-medium text-gray-900">
              PinoyPort
            </h1>
            <button
              type="button"
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 absolute right-4"
              aria-label="Saved"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
          {/* Search + filters overlayed on map */}
          <div className="absolute top-16 left-4 right-4 z-10">
            <div className="rounded-2xl bg-transparent px-3 py-3">
              <div className="flex gap-3 items-start justify-center">
                <div className="flex flex-col">
                  <div
                    className="flex items-center gap-2 rounded-full bg-white px-4 h-10 w-[291px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    style={{ opacity: 1 }}
                  >
                    <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="search"
                      placeholder="Search"
                      className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 outline-none text-sm"
                    />
                  </div>
                  <div className="flex flex-wrap gap-[6px] mt-3">
                    {MOCK_TAGS.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="inline-flex items-center justify-center gap-[6px] h-5 px-2 rounded-[6px] border border-[#718096] bg-transparent text-[11px] leading-none text-gray-700"
                      >
                        {tag}
                        <span className="text-gray-500 text-[10px]" aria-hidden>
                          ×
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="p-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
                  aria-label="Filter"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-[15%] left-[20%] w-6 h-8 drop-shadow-md" aria-hidden>
            <svg viewBox="0 0 24 32" fill="#374151" className="w-full h-full">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20C24 5.37 18.63 0 12 0zm0 17a5 5 0 110-10 5 5 0 010 10z" />
            </svg>
          </div>
          <div className="absolute top-[25%] right-[25%] w-6 h-8 drop-shadow-md" aria-hidden>
            <svg viewBox="0 0 24 32" fill="#374151" className="w-full h-full">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20C24 5.37 18.63 0 12 0zm0 17a5 5 0 110-10 5 5 0 010 10z" />
            </svg>
          </div>
          <div className="absolute bottom-[35%] left-[35%] w-6 h-8 drop-shadow-md" aria-hidden>
            <svg viewBox="0 0 24 32" fill="#374151" className="w-full h-full">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20C24 5.37 18.63 0 12 0zm0 17a5 5 0 110-10 5 5 0 010 10z" />
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-48 rounded-full bg-white/30 border-2 border-gray-400 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-500" />
            </div>
          </div>
        </div>

        {/* Draggable cards strip */}
        <div
          className="bg-gray-200 rounded-t-2xl flex flex-col shrink-0 overflow-hidden"
          style={{ height: `${sheetPercent}%` }}
        >
          <div
            role="button"
            tabIndex={0}
            className="flex justify-center pt-2 pb-3 cursor-grab active:cursor-grabbing touch-none select-none"
            aria-label="Drag to expand or collapse restaurant list"
            onMouseDown={(e) => startDrag(e.clientY)}
            onTouchStart={(e) => startDrag(e.touches[0].clientY)}
          >
            <div className="w-10 h-1 rounded-full bg-gray-400" aria-hidden />
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 pb-4">
            {MOCK_ESTABLISHMENTS.map((establishment) => (
              <EstablishmentCard key={establishment.id} establishment={establishment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
