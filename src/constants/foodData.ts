export interface FoodItem {
  id: string;
  name: string;
  canteen: string;
  price: number;
  rating: number;
  imageUrl: string;
  isPromo?: boolean;
}

export const FOOD_DATA: FoodItem[] = [
  {
    id: '1',
    name: 'Ayam Geprek Sambal Korek',
    canteen: 'Kantin 1 UMM - Stan Mbok Judes',
    price: 15000,
    rating: 4.8,
    imageUrl: 'https://www.dapurkobe.co.id/wp-content/uploads/ayam-geprek-sambal-korek.jpg',
    isPromo: true,
  },
  {
    id: '2',
    name: 'Nasi Goreng Spesial Telur',
    canteen: 'Kantin Central - Kedai Barokah',
    price: 13000,
    rating: 4.6,
    imageUrl: 'https://www.dapurkobe.co.id/wp-content/uploads/nasi-goreng-spesial-telur.jpg',
    isPromo: false,
  },
  {
    id: '3',
    name: 'Mie Ayam Bakso Solo',
    canteen: 'Kantin 2 UMM - Mie Bangka',
    price: 12000,
    rating: 4.7,
    imageUrl: 'https://www.dapurkobe.co.id/wp-content/uploads/mie-ayam-bakso-solo.jpg',
    isPromo: true,
  },
  {
    id: '4',
    name: 'Es Teh Manis Jumbo',
    canteen: 'Kantin Central - Kedai Minuman',
    price: 4000,
    rating: 4.9,
    imageUrl: 'https://www.dapurkobe.co.id/wp-content/uploads/es-teh-manis-jumbo.jpg',
    isPromo: false,
  },
  {
    id: '5',
    name: 'Burger Keju',
    canteen: 'Kantin 1 UMM - Stan Mbok Judes',
    price: 20000,
    rating: 4.5,
    imageUrl: '',
    isPromo: true,
  },
  {
    id: '6',
    name: 'Nasi Padang',
    canteen: 'Kantin Central - Kedai Barokah',
    price: 15000,
    rating: 4.7,
    imageUrl: '',
    isPromo: false,
  },
];
