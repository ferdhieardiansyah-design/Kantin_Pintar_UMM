import { Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function ExploreScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useTheme();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + Spacing.five,
  };

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">Jelajahi Kantin Pintar</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            Informasi singkat untuk membantu kamu memesan menu kantin.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>
          <Collapsible title="Cara memesan">
            <ThemedText type="small">
              Pilih menu dari halaman Home, buka detail untuk melihat informasi, lalu tekan
              Tambah atau Pesan Sekarang. Konfirmasi pesanan akan muncul sebelum pesanan dibuat.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Cari menu dan promo">
            <ThemedText type="small">
              Gunakan kolom pencarian untuk menemukan makanan atau kantin. Pilih kategori Promo
              untuk melihat menu yang sedang ditandai promo.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Inspirasi resep">
            <ThemedText type="small">
              Rekomendasi resep di halaman Home diambil dari API eksternal. Resep tersebut hanya
              inspirasi; harga dan menu yang dapat dipesan tetap berasal dari daftar kantin.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Jika rekomendasi gagal dimuat">
            <ThemedText type="small">
              Pastikan perangkat terhubung ke internet, lalu tekan Coba lagi. Daftar menu kantin
              tetap dapat digunakan meskipun layanan rekomendasi sedang tidak tersedia.
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: 'center',
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },
});
