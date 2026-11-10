/**
 * AuraDental Clinic Business Configuration
 * Centralized business data for contact numbers, WhatsApp enquiry URLs, clinic locations, and operational hours.
 */

export const CLINIC_CONFIG = {
  name: "AuraDental Clinic & Implant Centre",
  shortName: "AuraDental",
  phoneDisplay: "+91 9625540447",
  phoneTel: "tel:+919625540447",
  whatsAppNumber: "919625540447",
  email: "care@auradental.in",
  emergencyDeskPhone: "+91 9625540447",

  // Operating Hours
  hours: {
    weekdays: "Mon – Sat: 9:00 AM – 8:30 PM",
    sunday: "Sunday: 10:00 AM – 2:00 PM (Prior confirmation)",
    emergency: "24/7 Dental Trauma SOS Desk",
  },

  // Clinic Physical Centres
  branches: [
    {
      id: "blr-ind",
      name: "Bengaluru Flagship",
      address: "AuraDental House, 742/1, 100 Feet Road, Near Domlur Flyover, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
      landmark: "Opposite Metro Pillar 128",
      valet: "Free Valet Parking",
      googleMapsUrl: "https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru",
    },
    {
      id: "mum-ban",
      name: "Mumbai Centre",
      address: "Suite 204, Landmark Platina, Turner Road, Off Linking Road, Bandra West, Mumbai, Maharashtra 400050",
      landmark: "Near Perry Cross Road",
      valet: "Valet Parking Available",
      googleMapsUrl: "https://maps.google.com/?q=Turner+Road+Bandra+West+Mumbai",
    },
  ],

  // Compliance & Regulatory Notice (Preserved from reference documents)
  regulatory: {
    nabh: "NABH Accredited Center for Painless Implantology",
    iso: "ISO 9001:2015 Certified",
    dci: "DCI Reg. #14288/KA",
    act: "Registered under Karnataka & Maharashtra Private Medical Establishments Act. Compliant with Dental Council of India (DCI) Code of Ethics.",
  },
};

/**
 * Generates a direct WhatsApp link with a formatted appointment enquiry message.
 */
export function getWhatsAppAppointmentUrl(details: {
  patientName: string;
  phone: string;
  treatment: string;
  branch: string;
  date: string;
  timeSlot: string;
}): string {
  const text = [
    `*Appointment Enquiry – ${CLINIC_CONFIG.shortName}*`,
    ``,
    `👤 *Patient Name:* ${details.patientName}`,
    `📞 *Mobile:* ${details.phone}`,
    `🦷 *Treatment:* ${details.treatment}`,
    `🏥 *Clinic Branch:* ${details.branch}`,
    `📅 *Preferred Date:* ${details.date}`,
    `⏰ *Preferred Time:* ${details.timeSlot}`,
    ``,
    `_Please let me know the doctor's availability for this slot. Thank you!_`,
  ].join('\n');

  return `https://wa.me/${CLINIC_CONFIG.whatsAppNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a direct WhatsApp link for general consultation.
 */
export function getWhatsAppGeneralUrl(customMessage?: string): string {
  const text = customMessage || `Hello ${CLINIC_CONFIG.shortName} Team, I would like to consult a doctor regarding dental treatment.`;
  return `https://wa.me/${CLINIC_CONFIG.whatsAppNumber}?text=${encodeURIComponent(text)}`;
}

