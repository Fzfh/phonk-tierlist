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
  {
    id: 11,
    title: "METAMORPHOSIS",
    artist: "INTERWORLD",
    desc: "Tenang dengan vibes yang membuat sensasi menghayal, sering fyp dengan vt mtk.",
    logo: "https://i.ytimg.com/vi/lJvRohYSrZM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCudmsw-sxgIitKfXYgCSX4wTvyzw",
    file: "/phonk-tierlist/music/META.mp3",
    tier: 11,
  },
  {
    id: 12,
    title: "Kerosene sl&rvb",
    artist: "DARKCENT",
    desc: "Vibes kecepatan dan ketenangan, dengan vibes kesuksesan.",
    logo: "https://i.ytimg.com/vi/c84lqtARB0w/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGE4gUihlMA8=&rs=AOn4CLCMYkbttNCN4VtqF9B3C7_Gq32L5w",
    file: "/phonk-tierlist/music/kerosene.mp3",
    tier: 12,
  },
  {
    id: 13,
    title: "MENTE MÁ",
    artist: "MAFIA",
    desc: "Vibes gembira, sering digunakan untuk trend dance.",
    logo: "https://i.ytimg.com/vi/cXDOHqa_QgY/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gKihQMA8=&rs=AOn4CLCTJrgPlJ2arcU2Z3QC-JUlW8yIoA",
    file: "/phonk-tierlist/music/MENTE MÁ.mp3",
    tier: 13,
  },
  {
    id: 14,
    title: "MONTAGEM XONADA",
    artist: "MAFIA",
    desc: "Vibes gembira, sering digunakan untuk trend dance.",
    logo: "https://i.ytimg.com/vi/JjPtDl6EJ3o/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGG0gFyh_MA8=&rs=AOn4CLC1H0YLr3obsp5DGmmeTbWQ1rytqg",
    file: "/phonk-tierlist/music/MONTAGEM XONADA.mp3",
    tier: 14,
  },
  {
    id: 15,
    title: "MATUSHKA ULTRAFUNK",
    artist: "satirin",
    desc: "Memancarkan vibe gelap, intens, dan penuh energi.",
    logo: "https://i.ytimg.com/vi/Ian0Ts-HYYI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBE525Q2WewV4RCvo9gjDoutXFDxA",
    file: "/phonk-tierlist/music/MATUSHKA.mp3",
    tier: 15,
  },
];

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
