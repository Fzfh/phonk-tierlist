import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TierCard({ song, isActive, onToggle }) {
  const audioRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isActive) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isActive]);

  // ukuran grid
  const sizeClass =
    song.tier === 1
      ? "md:col-span-2 md:row-span-2"
      : song.tier === 2
      ? "md:row-span-2"
      : "md:row-span-1";

  // animasi scale & shadow
  const targetScale = isActive || hovered ? 1.03 : 1;
    let targetBoxShadow;
  if (song.tier === 1) {
    targetBoxShadow = isActive
      ? "0 0 50px rgba(255,223,0,0.9), 0 0 100px rgba(255,215,0,0.6)" // emas terang banget
      : "0 0 25px rgba(255,215,0,0.5)";
  } else if (song.tier === 2) {
    targetBoxShadow = isActive
      ? "0 0 35px rgba(255,215,0,0.7)" // emas tapi lebih soft
      : "0 0 15px rgba(255,215,0,0.4)";
  } else {
    targetBoxShadow = isActive
  ? "0 0 15px rgba(168,85,247,0.8), 0 0 30px rgba(168,85,247,0.6), 0 0 45px rgba(168,85,247,0.4)"
  : "0 0 8px rgba(168,85,247,0.5), 0 0 15px rgba(168,85,247,0.3)";

  }


  // style judul + logo
  const titleClass =
    song.tier === 1
      ? "text-4xl md:text-5xl font-extrabold"
      : song.tier === 2
      ? "text-3xl md:text-4xl font-bold"
      : "text-2xl font-bold";

  const logoSize =
    song.tier === 1 ? "w-24 h-24" : song.tier === 2 ? "w-20 h-20" : "w-14 h-14";

  return (
    <motion.div
      onClick={() => onToggle(song.id)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: targetScale, boxShadow: targetBoxShadow }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`relative overflow-hidden p-5 rounded-2xl cursor-pointer flex flex-col justify-between ${sizeClass}`}
      style={{ transformOrigin: "center center" }}
    >
      {/* 🎖 background khusus Top 1 & 2 */}
      {song.tier === 1 && (
        <>
          {/* gradient emas menyala */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-800 animate-pulse opacity-80 pointer-events-none" />
          {/* sparkle effect */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-200 rounded-full blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: Math.random() * 300 - 150,
                y: Math.random() * 200 - 100,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{ top: "50%", left: "50%" }}
            />
          ))}
        </>
      )}
      {song.tier === 2 && (
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/60 via-yellow-600/40 to-yellow-800/30 animate-pulse opacity-70 pointer-events-none" />
      )}

      {/* konten */}
      <div className="flex items-start gap-3 md:gap-4 relative z-10">
        <img
          src={song.logo}
          alt="logo lagu"
          className={`rounded-lg object-cover 
            ${song.tier === 1 
              ? "w-20 h-20 sm:w-24 sm:h-24" 
              : song.tier === 2 
              ? "w-16 h-16 sm:w-20 sm:h-20" 
              : "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"}`}
        />

        <div className="flex-1 min-w-0">
          <h2
            className={`glow-text text-purple-300 leading-tight break-words
            ${song.tier === 1 
              ? "text-xl sm:text-2xl md:text-4xl font-extrabold" 
              : song.tier === 2 
              ? "text-lg sm:text-xl md:text-3xl font-bold" 
              : "text-base sm:text-lg md:text-2xl font-bold"}`}
          >
            {song.title}
          </h2>

          <p className="text-[0.7rem] sm:text-sm md:text-base text-purple-200/80 truncate">
            {song.artist}
          </p>

          <p className="mt-1 text-[0.65rem] sm:text-xs md:text-sm text-purple-100/70 line-clamp-2 sm:line-clamp-3">
            {song.desc}
          </p>
        </div>

        <div className="text-[0.6rem] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-purple-800/60 border border-purple-600/40 shrink-0">
          Top {song.tier}
        </div>
      </div>

      {/* indikator status */}
      <div className="mt-3 text-xs flex items-center gap-2 opacity-90 relative z-10">
        {isActive ? (
          <>
            <span className="text-green-400 font-semibold"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg> Memutar...</span>
            <div className="flex gap-[2px] items-end h-3">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="w-[3px] bg-purple-400 rounded"
                  animate={{ height: ["20%", "100%", "40%"] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <span className="opacity-70"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/></svg> Klik untuk putar</span>
        )}
      </div>

      {/* equalizer gede untuk top 1 & 2 */}
      {(song.tier === 1 || song.tier === 2) && isActive && (
        <div className="absolute inset-0 flex justify-center items-center opacity-20">
          <div className="flex gap-2 h-24">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 bg-yellow-400 rounded"
                animate={{ height: ["20%", "100%", "40%"] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      )}

      <audio ref={audioRef} src={song.file} />
    </motion.div>
  );
}
