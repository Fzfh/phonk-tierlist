<<<<<<< HEAD
# Aura — Phonk & Funk Tier List (React + Vite + Tailwind)

Project siap jalan. Sudah ada:
- Landing page tema ungu-hitam neon dengan logo dan backsound.
- Tombol **Lanjut** ke halaman utama.
- Grid tier list: Top 1 paling besar di atas, Top 2 & 3 di bawah (ukuran berbeda).
- Klik kartu = play/pause lagu (hanya satu lagu aktif pada satu waktu).
- File audio contoh berupa **1 detik WAV silence** supaya app jalan out-of-the-box. Ganti dengan MP3/WAV-mu sendiri di `public/music`.

## Cara jalanin (shell)

```bash
# 1) Masuk folder project
cd phonk-tierlist

# 2) Install dependencies
npm install

# 3) Jalankan development server
npm run dev

# 4) Buka URL yang muncul (biasanya http://localhost:5173)
```

## Ganti konten
- Ganti **logo** di `public/logo.svg` (atau pakai PNG dan ubah path).
- Taruh file musik (mp3/wav) di `public/music/` lalu set field `file` pada tiap item lagu di `src/components/TierList.jsx`.
- Ubah daftar lagu di konstanta `songsData` (title, artist, desc, logo, file, tier).

## Build production
```bash
npm run build
npm run preview    # test hasil build secara lokal
```

## Catatan Autoplay
Browser modern sering memblokir autoplay. Aku sudah trigger play saat tombol **Lanjut** diklik, jadi backsound dan/atau lagu akan mulai setelah interaksi pertama.
=======
# phonk-tierlist
>>>>>>> 1bc086bf1cb4f059774224c2c87e70a558ee20f9
