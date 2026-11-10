# AuraDental – Standard Business Website

A fast, responsive, and production-ready standard business website for **AuraDental Clinic & Implant Centre**, built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

---

## 🌟 Overview & Philosophy

This project implements a **standard business website** designed for real-world dental clinic operations in India. It intentionally eliminates backend complexity, databases, patient portals, and automated booking tokens in favor of direct patient communication:
- **Direct WhatsApp Enquiries:** Pre-fills patient details, treatment choice, clinic branch, date, and preferred time slot directly into WhatsApp.
- **Click-to-Call Phone Access:** Instant calling links for immediate front-desk queries and 24/7 dental trauma SOS triage.
- **Google Maps Integration:** Direct landmark and driving directions to physical clinics in Bengaluru and Mumbai.
- **Material 3 Clinical Clarity:** Professional healthcare color system using `#00685f` (Teal Primary), `#2b645f` (Secondary), and high-contrast accessible typography.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15.1 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript 5.7
- **Styling:** Tailwind CSS 3.4
- **Icons & Typography:** Google Material Symbols Outlined, Inter, and Plus Jakarta Sans
- **Build Mode:** Static Export (`output: 'export'`) ready for any CDN or web server

---

## 📁 Project Structure

```text
├── out/                        # Production static export (HTML, CSS, JS, assets)
├── public/
│   └── images/                 # Clinic photography, doctor portraits, SVG logo
├── references/                 # Design references & specifications
│   ├── DESIGN.md
│   ├── code.html
│   ├── code1.html
│   ├── screen.png
│   └── screen1.png
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind directives & CSS design tokens
│   │   ├── layout.tsx          # Root layout with fonts & responsive viewport
│   │   └── page.tsx            # Main single-page business website
│   ├── components/
│   │   ├── hero/               # Doctor & operatory hero cards
│   │   ├── layout/             # Header, Footer, MobileBottomBar
│   │   ├── scheduler/          # Desktop & Mobile WhatsApp enquiry forms
│   │   ├── sections/           # Hero, ValueProp, Treatments, Testimonials, Locations
│   │   ├── testimonials/       # Reviews carousel & desktop grid
│   │   ├── treatments/         # Treatment cards with transparent pricing
│   │   └── ui/                 # Icon, Badge, atomic UI components
│   ├── config/
│   │   └── clinic.ts           # Centralized business configuration & WhatsApp helpers
│   ├── data/                   # Treatments, reviews, differentiators, and clinic data
│   └── types/                  # TypeScript interface definitions
├── next.config.mjs             # Next.js build configuration (Static export, dev indicators disabled)
├── tailwind.config.ts          # Material 3 color palette & typography tokens
└── package.json
```

---

## ⚙️ Business Configuration

All clinic contact details, WhatsApp routing, and branch addresses are configured in one central file:

👉 [`src/config/clinic.ts`](src/config/clinic.ts)

```typescript
export const CLINIC_CONFIG = {
  name: "AuraDental Clinic & Implant Centre",
  shortName: "AuraDental",
  phoneDisplay: "+91 98201 44520",
  phoneTel: "tel:+919820144520",
  whatsAppNumber: "919820144520",
  email: "care@auradental.in",
  emergencyDeskPhone: "+91 98201 44520",

  hours: {
    weekdays: "Mon – Sat: 9:00 AM – 8:30 PM",
    sunday: "Sunday: 10:00 AM – 2:00 PM (Prior confirmation)",
    emergency: "24/7 Dental Trauma SOS Desk",
  },

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
};
```

---

## 🚀 Getting Started

### 1. Installation

Ensure Node.js (v18+) is installed:

```bash
npm install
```

### 2. Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

To create an optimized, static production build:

```bash
npm run build
```

This compiles all HTML, CSS, JavaScript, and images into the `out/` directory.

### 4. Local Production Preview

To test the exported static site locally using a lightweight HTTP server:

```bash
npx serve out
```

---

## 📱 Responsive Testing

The website has been verified across all target viewports:

- **Mobile Small (375px & 390px):** Form fields avoid overflow via `min-w-0`, 2-column footer directory, touch-friendly 44px targets.
- **Mobile Large (430px):** Comfortable reading widths and touch-swipeable review carousel.
- **Tablet (768px):** 2-column treatment cards, responsive navigation.
- **Desktop (1024px & 1440px):** Full desktop navigation, 3-column treatment grid, 4-column physical centre cards, hero doctor portrait.

---

## 🔒 Scope & Architectural Exclusions

Per standard business website requirements:
- **No Database:** Eliminates maintenance, schema migrations, and hosting costs.
- **No Auth / Accounts:** Patients do not need to create logins or remember passwords.
- **No Fake Confirmations:** Avoids misleading patients with fake booking IDs (`AD-XXXXXX`). Receptionists coordinate real-time chair availability directly on WhatsApp.
- **No SMS / Payment Gateways:** Zero recurring third-party API subscription costs.

---

## 📄 License & Attribution

Designed and built for AuraDental Clinic & Implant Centre. Compliant with the Karnataka & Maharashtra Private Medical Establishments Act and Dental Council of India (DCI) Code of Ethics.

