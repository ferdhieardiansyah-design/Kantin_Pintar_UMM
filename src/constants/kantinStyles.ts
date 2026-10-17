// src/constants/kantinStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  headerContainer: {
    backgroundColor: '#00B14F',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#E0F2FE',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    color: '#1F2937',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 14,
    flexDirection: 'row',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foodImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  placeholderImage: {
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderImageText: {
    fontSize: 32,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  canteenName: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  priceText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#00B14F',
  },
  orderButton: {
    backgroundColor: '#00B14F',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  orderButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  detailButton: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  detailButtonText: {
    color: '#374151',
    fontSize: 12,
    fontWeight: '600',
  },
  backButton: {
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  detailImage: {
    width: '100%',
    height: 260,
  },
  detailInfo: {
    padding: 20,
  },
  detailTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginRight: 8,
  },
  detailRating: {
    color: '#F59E0B',
    fontSize: 14,
    marginTop: 8,
  },
  detailDescription: {
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 16,
  },
  detailFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoBagde: {
    fontSize: 10,
    backgroundColor: '#00B14F',
    color: '#FFFFFF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: 'bold',
  }
});