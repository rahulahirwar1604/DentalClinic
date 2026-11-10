import { Clinic } from '../types';

export const CLINICS: Clinic[] = [
  {
    id: 'bengaluru-indiranagar',
    name: 'Bengaluru Flagship',
    city: 'Bengaluru',
    badge: 'HAL Stage 2',
    address: 'AuraDental House, 742/1, 100 Feet Road, Near Domlur Flyover, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    landmark: 'Opposite Metro Pillar 128',
    hours: 'Mon - Sat: 9:00 AM – 8:30 PM',
    sundayHours: 'Sunday: 10:00 AM – 2:00 PM (Prior confirmation)',
    valetInfo: 'Free Valet Parking',
    googleMapsUrl: 'https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru',
    isFlagship: true,
  },
  {
    id: 'mumbai-bandra',
    name: 'Mumbai Centre',
    city: 'Mumbai',
    badge: 'Bandra West',
    address: 'Suite 204, Landmark Platina, Turner Road, Off Linking Road, Near Perry Cross Road, Bandra West, Mumbai, Maharashtra 400050',
    landmark: 'Near Perry Cross Road',
    hours: 'Mon - Sat: 9:00 AM – 8:30 PM',
    sundayHours: 'Sunday: 10:00 AM – 2:00 PM (Prior confirmation)',
    valetInfo: 'Valet Parking Available',
    googleMapsUrl: 'https://maps.google.com/?q=Turner+Road+Bandra+West+Mumbai',
    isFlagship: false,
  },
];

