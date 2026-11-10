export interface Treatment {
  id: string;
  category: string;
  mobileBadge: string;
  title: string;
  mobileTitle: string;
  description: string;
  price: string;
  priceNum: number;
  icon: string;
  mobileIcon: string;
}

export interface Review {
  id: string;
  patientName: string;
  initials: string;
  rating: number;
  treatmentTag: string;
  location: string;
  quote: string;
  verified: boolean;
}

export interface Clinic {
  id: string;
  name: string;
  city: string;
  badge: string;
  address: string;
  landmark: string;
  hours: string;
  sundayHours?: string;
  valetInfo: string;
  googleMapsUrl: string;
  isFlagship?: boolean;
}

export interface ValueProp {
  id: string;
  title: string;
  mobileTitle?: string;
  description: string;
  mobileDescription: string;
  icon: string;
  mobileIcon: string;
  bgLightClass: string;
  iconColorClass: string;
}

export interface AppointmentEnquiry {
  patientName: string;
  phone: string;
  treatment: string;
  branch: string;
  date: string;
  timeSlot: string;
}
