import { useState, useMemo } from "react";
import TierCard from "./TierCard.jsx";

const songsData = [
  {
    id: 1,
    title: "AURA",
    artist: "Ogryzek",
    desc: "Phonk gelap bercampur sentuhan funk Brasil, bikin vibe misterius tapi enerjik.",
    logo: "/phonk-tierlist/aura.jpeg",
    file: "/phonk-tierlist/music/intro.mp3",
    tier: 1,
  },
  {
    id: 2,
    title: "X-PRIME",
    artist: "Dj samir",
    desc: "Termasuk dalam genre phonk, dengan tekstur gelap, atmosferik, dan ritme minimalis.",
    logo: "/phonk-tierlist/prime.jpg",
    file: "/phonk-tierlist/music/X-PRIME.mp3",
    tier: 2,
  },
  {
    id: 3,
    title: "Sleepwalker (slowed)",
    artist: "akiaura",
    desc: "Tenang, Gelap, Dengan suasana yang epic.",
    logo: "/phonk-tierlist/ki.jpg",
    file: "/phonk-tierlist/music/Sleepwalker.mp3",
    tier: 3,
  },
  {
    id: 4,
    title: "SLAY!",
    artist: "Eternxlkz",
    desc: "Tenang tapi gelap, cocok didengarkan ketika menyendiri, berkendara malam, atau berkhayal.",
    logo: "/phonk-tierlist/slay.jpeg",
    file: "/phonk-tierlist/music/slay.mp3",
    tier: 4,
  },
  {
    id: 5,
    title: "EEYUH! x Fluxxwave",
    artist: "Clovis Reyes",
    desc: "Lagu-lagu di EP ini menghadirkan nuansa futuristik, melankolis, dan memikat.",
    logo: "https://i.ytimg.com/vi/GMh-mTTOnkg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAmBvE4xHJoXxolukWx7HsWdW2ocg",
    file: "/phonk-tierlist/music/EEYUH.mp3",
    tier: 5,
  },
  {
    id: 6,
    title: "SLAVA FUNK! x VILLAGE FUNK!",
    artist: "MVSTERIOUS HXMR",
    desc: "Lagu ini menyajikan atmosfer energetik, penuh semangat.",
    logo: "https://i.ytimg.com/vi/lOepGTHklqw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBiSEI5WImBKpRvD76m6u3gfpfVdQ",
    file: "/phonk-tierlist/music/slava.mp3",
    tier: 6,
  },
  {
    id: 7,
    title: "2 Phut Hon Funk",
    artist: "mgd",
    desc: " Gaya musiknya ceria, upbeat, dan penuh karakter.",
    logo: "https://i.ytimg.com/vi/FVAS9ETK1BM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCR0d2NWG47Gr8ZX-f2Mo24eWaHJQ",
    file: "/phonk-tierlist/music/phut.mp3",
    tier: 7,
  },
  {
    id: 8,
    title: "fragment",
    artist: "slxughter",
    desc: "elemen funk Brasil dan elemen elektronik eksperimental. Versi slowed menambah karakter sedih, introspektif, dan atmosferik.",
    logo: "https://i.ytimg.com/vi/rngLO3tF2mA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDJXl8xD8QDltM2DRW4JtGvjmXWQg",
    file: "/phonk-tierlist/music/fragment.mp3",
    tier: 8,
  },
  {
    id: 9,
    title: "Avangard",
    artist: "slxughter",
    desc: "Atmosfer terasa gelap, intens, dan ritmis.",
    logo: "https://i.ytimg.com/vi/qwzZ5ViZans/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGDcgUyh_MA8=&rs=AOn4CLBtLmCRl8m-rH08qIWx_BgwKvzVMA",
    file: "/phonk-tierlist/music/avangard.mp3",
    tier: 9,
  },
  {
    id: 10,
    title: "Manasha",
    artist: "Ashreveal",
    desc: "Memancarkan vibe gelap, intens, dan penuh energi bawah tanah.",
    logo: "https://i.ytimg.com/vi/G58pphuWFwo/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGB8gWih_MA8=&rs=AOn4CLCdBjtp1_PcsXmaUn4IcVEgyYfOvw",
    file: "/phonk-tierlist/music/Manasha.mp3",
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