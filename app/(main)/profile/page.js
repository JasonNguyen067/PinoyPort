"use client";

import ProfileHeader from "./components/ProfileHeader";
import ProfileRanking from "./components/ProfileRanking";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#202225] flex justify-center">
      <div className="w-[360px] bg-gradient-to-b from-[#f5f5f5] to-[#d9d9d9] rounded-3xl shadow-xl flex flex-col px-4 pt-4 pb-6">
        <ProfileHeader />
        <ProfileRanking />
      </div>
    </main>
  );
}
