import { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { FOOD_DATA } from '@/constants/foodData';
import { styles } from '@/constants/kantinStyles';

export default function MenuDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string | string[] }>();
  const menuId = Array.isArray(id) ? id[0] : id;
  const food = FOOD_DATA.find((item) => item.id === menuId);

  useEffect(() => {
    if (!food) {
      Alert.alert('Menu tidak ditemukan', 'Menu yang dipilih tidak tersedia.');
      router.replace('/');
    }
  }, [food, router]);

  const handleOrder = () => {
    if (!food) return;

    Alert.alert(
      'Konfirmasi Pesanan',
      `Pesan ${food.name} seharga Rp ${food.price.toLocaleString('id-ID')}?`,
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Pesan Sekarang',
          onPress: () => {
            Alert.alert('Sukses', `${food.name} berhasil ditambahkan ke pesanan.`, [
              {
                text: 'OK',
                onPress: () => {
                  if (router.canGoBack()) {
                    router.back();
                  } else {
                    router.replace('/');
                  }
                },
              },
            ]);
          },
        },
      ]
    );
  };

  if (!food) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>Menu tidak ditemukan</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.replace('/');
            }
          }}
          accessibilityRole="button"
          accessibilityLabel="Kembali ke daftar menu">
          <Text style={styles.backButtonText}>‹ Kembali</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Detail Menu</Text>
        <Text style={styles.headerSubtitle}>Informasi lengkap menu kantin</Text>
      </View>

      {food.imageUrl ? (
        <Image source={{ uri: food.imageUrl }} style={styles.detailImage} />
      ) : (
        <View style={[styles.detailImage, styles.placeholderImage]}>
          <Text style={styles.placeholderImageText}>🍽️</Text>
        </View>
      )}

      <View style={styles.detailInfo}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.detailTitle}>{food.name}</Text>
          {food.isPromo && <Text style={styles.promoBagde}>PROMO</Text>}
        </View>
        <Text style={styles.canteenName}>{food.canteen}</Text>
        <Text style={styles.detailRating}>★ {food.rating} / 5.0</Text>
        <Text style={styles.detailDescription}>
          Nikmati {food.name} yang tersedia di {food.canteen}. Pesan sekarang dan ambil pesananmu
          tanpa antre!
        </Text>
        <View style={styles.detailFooter}>
          <Text style={styles.priceText}>Rp {food.price.toLocaleString('id-ID')}</Text>
          <Pressable style={styles.orderButton} onPress={handleOrder}>
            <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
