import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FOOD_DATA } from '@/constants/foodData';
import { styles } from '@/constants/kantinStyles';

export default function KantinPintarApp() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredFoods, setFilteredFoods] = useState(FOOD_DATA);

  const formatRupiah = (amount: number): string => {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  };

  const handleOrder = (foodName: string, price: number) => {
    Alert.alert(
      'Konfirmasi Pesanan',
      `Apakah Anda yakin ingin memesan "${foodName}" seharga ${formatRupiah(price)}?`,
      [
        { text: 'Batal', style: 'cancel' },
        { text: 'Pesan Sekarang', onPress: () => Alert.alert('Sukses', 'Pesanan berhasil dibuat!') },
      ]
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const normalizedQuery = searchQuery.trim().toLowerCase();
      setFilteredFoods(
        FOOD_DATA.filter((item) => {
          const matchesCategory = selectedCategory === 'Promo' ? item.isPromo : true;
          const matchesSearch =
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.canteen.toLowerCase().includes(normalizedQuery);

          return matchesCategory && matchesSearch;
        })
      );
    }, 150);

    return () => clearTimeout(timeout);
  }, [searchQuery, selectedCategory]);

  const categories = ['Semua', 'Promo'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>🍔 Kantin Pintar UMM</Text>
        <Text style={styles.headerSubtitle}>Pesan Makanan Kampus Tanpa Antre!</Text>
      </View>

      <View style={{ paddingHorizontal: 16, marginTop: 14 }}>
        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E5E7EB',
            fontSize: 14,
            color: '#1F2937',
          }}
          placeholder="🔍 Cari makanan"
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={{ flexDirection: 'row', paddingHorizontal: 16, marginTop: 12 }}>
        {categories.map((category) => (
          <Pressable
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              marginRight: 8,
              backgroundColor: selectedCategory === category ? '#00B14F' : '#E5E7EB',
            }}>
            <Text
              style={{
                color: selectedCategory === category ? '#FFFFFF' : '#374151',
                fontWeight: '600',
                fontSize: 13,
              }}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Rekomendasi Menu</Text>

      <FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#6B7280', marginTop: 24 }}>
            Menu tidak ditemukan.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
            ) : (
              <View style={[styles.foodImage, styles.placeholderImage]}>
                <Text style={styles.placeholderImageText}>🍽️</Text>
              </View>
            )}

            <View style={styles.cardContent}>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.foodName}>{item.name}</Text>
                  {item.isPromo && (
                    <Text
                      style={{
                        fontSize: 10,
                        backgroundColor: '#FEE2E2',
                        color: '#EF4444',
                        paddingHorizontal: 6,
                        paddingVertical: 2,
                        borderRadius: 4,
                        fontWeight: 'bold',
                      }}>
                      PROMO
                    </Text>
                  )}
                </View>
                <Text style={styles.canteenName}>{item.canteen}</Text>
                <Text style={{ fontSize: 12, color: '#F59E0B', marginTop: 2 }}>
                  ★ {item.rating}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Text style={styles.priceText}>{formatRupiah(item.price)}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Pressable
                    style={styles.detailButton}
                    onPress={() =>
                      router.push({ pathname: '/menu/[id]', params: { id: item.id } })
                    }
                    accessibilityRole="button"
                    accessibilityLabel={`Lihat detail ${item.name}`}>
                    <Text style={styles.detailButtonText}>Detail</Text>
                  </Pressable>
                  <Pressable
                    style={styles.orderButton}
                    onPress={() => handleOrder(item.name, item.price)}>
                    <Text style={styles.orderButtonText}>Tambah</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={{ fontSize: 12, color: '#9CA3AF' }}>
          Menampilkan {filteredFoods.length} menu pilihan
        </Text>
      </View>
    </SafeAreaView>
  );
}
