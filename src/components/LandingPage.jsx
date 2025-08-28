import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function LandingPage({ onEnter }) {
  const bgAudioRef = useRef(null);

  useEffect(() => {
    const resume = () => {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      document.removeEventListener("click", resume);
      document.removeEventListener("keydown", resume);
    };
    document.addEventListener("click", resume);
    document.addEventListener("keydown", resume);
    return () => {
      document.removeEventListener("click", resume);
      document.removeEventListener("keydown", resume);
    };
  }, []);

  const handleEnter = () => {
    if (bgAudioRef.current) {
      bgAudioRef.current.play().catch(() => {});
    }
    onEnter();
  };

  // Variants buat animasi huruf
  const letterVariant = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, type: "spring", stiffness: 150 },
    }),
  };

  const text = "Selamat Datang, Terimakasih Telah Datang!";

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative overflow-hidden">
      {/* Background bergerak */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(124,58,237,0.35), transparent 50%), radial-gradient(circle at bottom right, rgba(168,85,247,0.25), transparent 50%), linear-gradient(135deg, #0f0618, #1a0f2a, #0a0510)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Foto logo */}
      <motion.img
        src="/phonk-tierlist/gw.png"
        alt="Aura Logo"
        className="w-28 h-28 md:w-40 md:h-40 mb-6 rounded-full relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, duration: 1 }}
        style={{ filter: "drop-shadow(0 0 25px rgba(168,85,247,0.7))" }}
      />

      {/* Judul huruf per huruf */}
      <h1 className="flex flex-wrap justify-center text-3xl md:text-5xl font-extrabold text-purple-300 glow-text relative max-w-3xl">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariant}
            initial="hidden"
            animate="visible"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      {/* Deskripsi */}
      <motion.p
        className="mt-4 text-base md:text-lg text-purple-200/80 max-w-xl relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Website pribadi berisi{" "}
        <span className="font-semibold text-purple-300">tier list</span> lagu
        <span className="font-semibold"> Phonk & Funk</span> favorit.
      </motion.p>

      {/* Tombol */}
      <motion.button
        onClick={handleEnter}
        className="mt-8 px-10 py-3 rounded-2xl text-xl font-bold bg-purple-700 hover:bg-purple-600 transition-all neon-card relative"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Lanjut
      </motion.button>

      <audio ref={bgAudioRef} src="/music/intro.mp3" autoPlay loop />
    </div>
  );
}
