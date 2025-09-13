import { useState, useMemo } from "react";
import TierCard from "./TierCard.jsx";
import songsData from "../data/songsdata.json"

export default function TierList() {
  const [activeId, setActiveId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10); // nampilin 10 item dulu

  const songs = useMemo(() => {
    return [...songsData].sort((a, b) => a.tier - b.tier);
  }, []);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10); // tiap klik tambah 6
  };

  return (
    <div className="min-h-screen px-5 md:px-10 py-10">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-purple-300 glow-text">
          Phonk & Funk — Tier List Fav Menurut Fazri
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 grid-flow-row-dense auto-rows-[12rem]">
        {songs.slice(0, visibleCount).map((s) => (
          <TierCard
            key={s.id}
            song={s}
            isActive={activeId === s.id}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* tombol lihat selengkapnya */}
{visibleCount < songs.length && (
  <div className="flex justify-center mt-8">
    <button
      onClick={handleShowMore}
      className="
        relative px-8 py-3 text-lg font-bold text-purple-300 
        border-2 border-purple-500 rounded-xl
        bg-transparent
        shadow-[0_0_10px_rgba(168,85,247,0.7),0_0_20px_rgba(168,85,247,0.5)]
        hover:shadow-[0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8)]
        transition-all duration-300 ease-in-out
        hover:scale-105
      "
    >
      ✦ Lihat Selengkapnya ✦
      <span className="absolute inset-0 rounded-xl bg-purple-500 opacity-20 blur-lg animate-pulse"></span>
    </button>
  </div>
)}


      <footer className="mt-12 text-center text-xs text-purple-200/70">
        Klik kartu untuk memulai/berhenti lagu nye wok.
      </footer>
    </div>
  );
}
