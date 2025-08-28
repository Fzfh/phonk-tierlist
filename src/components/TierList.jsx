import { useState, useMemo } from "react";
import TierCard from "./TierCard.jsx";

const songsData = [
  {
    id: 1,
    title: "AURA",
    artist: "Ogryzek",
    desc: "Gelap, bass berat, cocok buat cruising malam.",
    logo: "/aura.jpeg",
    file: "/music/intro.mp3",
    tier: 1,
  },
  {
    id: 2,
    title: "X-PRIME",
    artist: "Dj samir",
    desc: "+1000000 AURA.",
    logo: "/prime.jpg",
    file: "/music/X-PRIME.mp3",
    tier: 2,
  },
  {
    id: 3,
    title: "Sleepwalker (slowed)",
    artist: "akiaura",
    desc: "Vibes neon menyala, ambience jalanan kota.",
    logo: "/ki.jpg",
    file: "/music/Sleepwalker.mp3",
    tier: 3,
  },
  {
    id: 4,
    title: "SLAY!",
    artist: "Eternxlkz",
    desc: "Vibes neon menyala, ambience jalanan kota.",
    logo: "/slay.jpeg",
    file: "/music/slay.mp3",
    tier: 4,
  },
  {
    id: 5,
    title: "EEYUH! x Fluxxwave",
    artist: "Clovis Reyes",
    desc: "Vibes neon menyala, ambience jalanan kota.",
    logo: "https://i.ytimg.com/vi/GMh-mTTOnkg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAmBvE4xHJoXxolukWx7HsWdW2ocg",
    file: "/music/EEYUH.mp3",
    tier: 5,
  },
  {
    id: 6,
    title: "SLAVA FUNK! x VILLAGE FUNK!",
    artist: "MVSTERIOUS HXMR",
    desc: "Vibes neon menyala, ambience jalanan kota.",
    logo: "https://i.ytimg.com/vi/lOepGTHklqw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBiSEI5WImBKpRvD76m6u3gfpfVdQ",
    file: "/music/slava.mp3",
    tier: 6,
  },
  {
    id: 7,
    title: "2 Phut Hon Funk",
    artist: "mgd",
    desc: "Vibes neon menyala, ambience jalanan kota.",
    logo: "https://i.ytimg.com/vi/FVAS9ETK1BM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCR0d2NWG47Gr8ZX-f2Mo24eWaHJQ",
    file: "/music/phut.mp3",
    tier: 7,
  },
  {
    id: 8,
    title: "fragment",
    artist: "slxughter",
    desc: "Vibes neon menyala, ambience jalanan kota.",
    logo: "https://i.ytimg.com/vi/rngLO3tF2mA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDJXl8xD8QDltM2DRW4JtGvjmXWQg",
    file: "/music/fragment.mp3",
    tier: 8,
  },
  {
    id: 9,
    title: "Avangard",
    artist: "slxughter",
    desc: "Vibes neon menyala, ambience jalanan kota.",
    logo: "https://i.ytimg.com/vi/qwzZ5ViZans/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGDcgUyh_MA8=&rs=AOn4CLBtLmCRl8m-rH08qIWx_BgwKvzVMA",
    file: "/music/avangard.mp3",
    tier: 9,
  },
  {
    id: 10,
    title: "Manasha",
    artist: "Ashreveal",
    desc: "Vibes neon menyala, ambience jalanan kota.",
    logo: "https://i.ytimg.com/vi/G58pphuWFwo/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGB8gWih_MA8=&rs=AOn4CLCdBjtp1_PcsXmaUn4IcVEgyYfOvw",
    file: "/music/Manasha.mp3",
    tier: 10,
  },
];

export default function TierList() {
  const [activeId, setActiveId] = useState(null);

  const songs = useMemo(() => {
    // sort by tier ascending (1 is top)
    return [...songsData].sort((a, b) => a.tier - b.tier);
  }, []);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen px-5 md:px-10 py-10">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-purple-300 glow-text">
        Phonk & Funk — Tier List Fav Menurut Fazri
        </h1>
        <a
          href="/music"
          className="text-sm text-purple-200/80 hover:text-purple-100 underline"
          title="Ganti file lagu di folder public/music"
        >
        </a>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 grid-flow-row-dense auto-rows-[12rem]">
        {songs.map((s) => (
          <TierCard
            key={s.id}
            song={s}
            isActive={activeId === s.id}
            onToggle={handleToggle}
          />
        ))}
      </div>

      <footer className="mt-12 text-center text-xs text-purple-200/70">
        Klik kartu untuk memulai/berhenti lagu nye wok.
      </footer>
    </div>
  );
}