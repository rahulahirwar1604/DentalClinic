import { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    patientName: 'Priya Sharma',
    initials: 'PS',
    rating: 5,
    treatmentTag: 'Minimal-Prep Veneers',
    location: 'Indiranagar, Bengaluru',
    quote: 'Delayed fixing my front gap for 6 yrs fearing pain. Dr. Rajesh simulated the porcelain match digitally first—completely painless and looks completely natural. Transparent pricing without gimmicks.',
    verified: true,
  },
  {
    id: 'review-2',
    patientName: 'Vikram Malhotra',
    initials: 'VM',
    rating: 5,
    treatmentTag: 'Swiss Titanium Implants',
    location: 'Bandra West, Mumbai',
    quote: 'Got a Swiss implant done by Dr. Rajesh. Took just 20 minutes, zero swelling. The clinic feels like a 5-star lounge and 0% EMI made Swiss hardware completely budget-friendly.',
    verified: true,
  },
  {
    id: 'review-3',
    patientName: 'Ananya Venkatesh',
    initials: 'AV',
    rating: 5,
    treatmentTag: 'Microscopic RCT',
    location: 'Koramangala, Bengaluru',
    quote: 'Terrified of dental drills since childhood. Single-sitting microscopic root canal finished in 42 mins flat with computer-controlled anesthesia. Rivals top Singapore hospitals.',
    verified: true,
  },
];

