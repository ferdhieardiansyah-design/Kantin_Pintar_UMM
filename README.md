# Kantin Pintar UMM

Aplikasi demo untuk menjelajahi menu kantin, mencari makanan, melihat promo, dan mendapatkan
inspirasi resep dari API eksternal. Rekomendasi resep bukan menu yang dapat dipesan; daftar menu
dan harganya tetap berasal dari data kantin aplikasi.

## Menjalankan aplikasi

1. Pasang dependensi:

   ```bash
   npm ci
   ```

2. Jalankan server Expo:

   ```bash
   npx expo start
   ```

   Tekan `w` untuk membuka versi web, atau pindai kode QR dengan Expo Go.

## Struktur utama

- `src/app/(tabs)/index.tsx` — daftar menu, pencarian, filter promo, dan rekomendasi resep.
- `src/app/(tabs)/explore.tsx` — panduan pemesanan dan informasi rekomendasi.
- `src/app/menu/[id].tsx` — detail menu dan konfirmasi pesanan.
- `src/constants/foodData.ts` — data menu kantin.
- `src/services/foodRecommendations.ts` — pengambilan dan validasi data resep dari API eksternal.

## Pemeriksaan

```bash
npm run lint
npx tsc --noEmit
npx expo-doctor
```
