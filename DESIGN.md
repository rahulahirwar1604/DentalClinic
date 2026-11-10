---
name: Clinical Clarity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an atmosphere of pristine hygiene, advanced clinical precision, and warm patient reassurance designed specifically for contemporary Indian dental practices. Indian healthcare consumers frequently encounter dental anxiety, price opacity, and cluttered clinic portals; this system counters those friction points with absolute clarity, luminous calm, and uncompromising legibility.

The aesthetic philosophy fuses **High-Trust Clinical Minimalism** with **Subtle Warmth**:
- **Pristine Hygiene:** Light, breathable surfaces dominated by clean clinical whites eliminate visual noise and signal sterilized excellence.
- **Approachable Expertise:** Warm, inviting micro-accents balance medical sterility, making advanced procedures (orthodontics, implantology, pediatric care) feel human, safe, and transparent.
- **Restraint & Dignity:** Avoid decorative gimmicks, heavy skeuomorphism, or aggressive retail banners. High-contrast typography paired with generous architectural whitespace commands medical authority.

## Colors

The palette leverages clinical teals grounded in deep slate neutrals, avoiding harsh hospital blues in favor of rejuvenating, restorative tones.

- **Primary Teal (`#0d9488`):** The clinical anchor. Conveys medical precision, hygiene, and calm expertise. Used for primary booking triggers, verified practitioner badges, and critical clinical indicators.
- **Secondary Teal (`#14b8a6`):** An uplifting, bright aquatic tone used for active states, interactive highlights, and soft tint fills (`#ccfbf1`) behind key metrics.
- **Tertiary Warm Amber (`#f59e0b`):** A measured, hospitable accent used sparingly for patient advisory tags, priority appointment slots, and care reminders. It prevents the experience from feeling cold or intimidating.
- **Neutral & Surface Slates:**
  - `#ffffff`: Master canvas and clinical surface card color.
  - `#f8fafc`: Soft foundational background providing soft separation from pristine white cards.
  - `#0f172a`: Deep midnight slate for high-legibility clinical headlines.
  - `#334155`: Muted slate for secondary body copy, treatment steps, and clinic details.
  - `#e2e8f0`: Ultra-subtle boundary border token for structural cards.

## Typography

The typographic hierarchy combines **Plus Jakarta Sans** for structural headlines and titles with **Inter** for clinical data, prescription details, and body narrative.

- **Plus Jakarta Sans (Headlines):** Friendly geometric curves that soften clinical terminology. Precise kerning and generous counters ensure clear reading across doctor specializations, clinic names, and treatment pathways.
- **Inter (Body & Labels):** Provides neutral, utilitarian fidelity. Crucial for dosage charts, treatment cost breakdowns (INR ₹ formatting), and doctor credentials, eliminating ambiguity or misinterpretation.
- **High Legibility Rules:**
  - Body copy never drops below 13px (`body-sm`) to support patients of all age groups and lighting situations.
  - Numbers, dental charting keys, and clinic timings use tabular figures (`font-variant-numeric: tabular-nums`).

## Layout & Spacing

This design system uses a responsive 12-column fluid grid system paired with an 8pt modular spacing scale to maintain airy, organized layouts:

- **Desktop (1024px+):** 12 columns with a maximum container boundary of 1280px. Gutters set at `gutter` (`1.5rem`), outer boundaries set at `margin` (`3rem`). Section blocks leverage `space-xl` (`2.5rem`) or double-scale (`5rem`) vertical padding to ensure no visual overcrowding.
- **Tablet (768px - 1023px):** 8 columns, `1.25rem` gutters, and `2rem` margins. Multicolumn dental treatment summaries compress from 4 columns to 2.
- **Mobile (< 768px):** 4 columns with `gutter-mobile` (`1rem`) and `margin-mobile` (`1.25rem`). Doctor rosters and appointment slot strips switch from desktop grid layouts to single-axis swipeable cards or vertical stacks.
- **Rhythm & Density:** Medical inputs and slot pickers maintain generous touch targets (minimum 48px height) with internal padding utilizing `space-md` (`1rem`).

## Elevation & Depth

Visual hierarchy relies on **crisp low-contrast outlines** and **subtle ambient shadows**, avoiding heavy drops or dark gradients to preserve the clinical, immaculate environment:

- **Surface Base:** Ground background sits on `#f8fafc`. Interactive panels, slot sheets, and patient summary cards sit on pure `#ffffff`.
- **Ghost Boundary Layer:** Cards and containers use a crisp `1px` border of `#e2e8f0` instead of high-contrast dividers. This imparts clinical structure without cognitive weight.
- **Level 1 (Static Cards):** `0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)` inside an explicit `#e2e8f0` border.
- **Level 2 (Hover & Active States):** `0 10px 25px -5px rgba(13, 148, 136, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.02)`. Tinting the shadow slightly with the primary medical teal signals patient focus and gentle physical response.
- **Level 3 (Modals & Floating Slot Booking Drawers):** `0 20px 30px -10px rgba(15, 23, 42, 0.12), 0 8px 10px -4px rgba(15, 23, 42, 0.04)`.

## Shapes

The design system embraces a **Rounded (Level 2)** shape vocabulary, blending organic softness (symbolic of gentle dental care and comfort) with geometric discipline:

- **Base Elements (Buttons, Inputs, Badges):** `0.5rem` (8px). Delivers a modern, approachable feel without looking childish or overly informal.
- **Cards & Consultation Modules:** `rounded-lg` (`1rem` / 16px). Creates soft, contained treatment summaries and physician bios.
- **Floating Panels, Dialogs & Bottom Booking Sheets:** `rounded-xl` (`1.5rem` / 24px) for top-edge sheets on mobile and full modals on desktop.
- **Pills (`9999px`):** Reserved exclusively for status indicators (e.g., "Available Today", "BDS, MDS Certified", "Painless Tech").

## Components

### Buttons
- **Primary:** Filled `#0d9488` with `#ffffff` text, 48px height, `0.5rem` radius, font weight 600. Focus ring uses `#14b8a6` with 2px offset. Hover moves to `#0f766e` with subtle Level 2 shadow.
- **Secondary:** Surface `#ffffff`, border 1px `#0d9488`, text `#0d9488`. Hover transitions background to `#ccfbf1` at 50% opacity.
- **Tertiary / Ghost:** Text `#334155`, transparent background. Hover adds `#f1f5f9` fill.

### Cards
- Pure `#ffffff` surface, 16px radius (`rounded-lg`), 1px solid border in `#e2e8f0`.
- Padding uses `space-lg` (`1.5rem`).
- Header holds procedure name, clinic branch, and estimated duration with distinct typographic weights.

### Chips & Badges
- **Status Badges:** Pill shape (`9999px`), 24px height, padding `0.25rem 0.75rem`. Background `#ccfbf1`, text `#0f766e`, `label-sm` font.
- **Selectable Time-Slot Chips:** Surface `#ffffff`, border 1px `#cbd5e1`, 38px height. Selected state triggers `#0d9488` background, `#ffffff` text, and zero border.

### Input Fields
- Height 48px, radius `0.5rem`, border 1px `#cbd5e1`, background `#ffffff`, text `#0f172a`.
- Focus state: border 1.5px `#0d9488`, outline: 3px solid rgba(13, 148, 136, 0.15).
- Floating labels or persistent top labels using `label-md` in `#334155`. Error state uses `#ef4444` with explanatory helper text.

### Checkboxes & Radio Buttons
- 20px x 20px, 4px corner radius for checkboxes, full circle for radios. Unchecked: 1.5px border `#94a3b8`. Checked: solid `#0d9488` fill with pure white icon.

### Domain-Specific Components
- **Doctor Credential Tile:** Incorporates avatar thumbnail, registration badge (e.g., "KDC / DCI Verified"), specializations, and years of clinical practice in a clean grid.
- **Treatment Cost & EMI Breakdown:** Clear card displaying estimated procedure cost in ₹ (INR), insurance applicability, and 0% interest EMI options with no hidden terms.
- **Teeth Selector / Dental Chart:** Interactive stylized vector arch using soft neutral outlines (`#cbd5e1`), highlights treated teeth in soft teal (`#14b8a6`) and areas of concern in warm amber (`#f59e0b`).







---
name: Clinical Clarity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an atmosphere of pristine hygiene, advanced clinical precision, and warm patient reassurance designed specifically for contemporary Indian dental practices. Indian healthcare consumers frequently encounter dental anxiety, price opacity, and cluttered clinic portals; this system counters those friction points with absolute clarity, luminous calm, and uncompromising legibility.

The aesthetic philosophy fuses **High-Trust Clinical Minimalism** with **Subtle Warmth**:
- **Pristine Hygiene:** Light, breathable surfaces dominated by clean clinical whites eliminate visual noise and signal sterilized excellence.
- **Approachable Expertise:** Warm, inviting micro-accents balance medical sterility, making advanced procedures (orthodontics, implantology, pediatric care) feel human, safe, and transparent.
- **Restraint & Dignity:** Avoid decorative gimmicks, heavy skeuomorphism, or aggressive retail banners. High-contrast typography paired with generous architectural whitespace commands medical authority.

## Colors

The palette leverages clinical teals grounded in deep slate neutrals, avoiding harsh hospital blues in favor of rejuvenating, restorative tones.

- **Primary Teal (`#0d9488`):** The clinical anchor. Conveys medical precision, hygiene, and calm expertise. Used for primary booking triggers, verified practitioner badges, and critical clinical indicators.
- **Secondary Teal (`#14b8a6`):** An uplifting, bright aquatic tone used for active states, interactive highlights, and soft tint fills (`#ccfbf1`) behind key metrics.
- **Tertiary Warm Amber (`#f59e0b`):** A measured, hospitable accent used sparingly for patient advisory tags, priority appointment slots, and care reminders. It prevents the experience from feeling cold or intimidating.
- **Neutral & Surface Slates:**
  - `#ffffff`: Master canvas and clinical surface card color.
  - `#f8fafc`: Soft foundational background providing soft separation from pristine white cards.
  - `#0f172a`: Deep midnight slate for high-legibility clinical headlines.
  - `#334155`: Muted slate for secondary body copy, treatment steps, and clinic details.
  - `#e2e8f0`: Ultra-subtle boundary border token for structural cards.

## Typography

The typographic hierarchy combines **Plus Jakarta Sans** for structural headlines and titles with **Inter** for clinical data, prescription details, and body narrative.

- **Plus Jakarta Sans (Headlines):** Friendly geometric curves that soften clinical terminology. Precise kerning and generous counters ensure clear reading across doctor specializations, clinic names, and treatment pathways.
- **Inter (Body & Labels):** Provides neutral, utilitarian fidelity. Crucial for dosage charts, treatment cost breakdowns (INR ₹ formatting), and doctor credentials, eliminating ambiguity or misinterpretation.
- **High Legibility Rules:**
  - Body copy never drops below 13px (`body-sm`) to support patients of all age groups and lighting situations.
  - Numbers, dental charting keys, and clinic timings use tabular figures (`font-variant-numeric: tabular-nums`).

## Layout & Spacing

This design system uses a responsive 12-column fluid grid system paired with an 8pt modular spacing scale to maintain airy, organized layouts:

- **Desktop (1024px+):** 12 columns with a maximum container boundary of 1280px. Gutters set at `gutter` (`1.5rem`), outer boundaries set at `margin` (`3rem`). Section blocks leverage `space-xl` (`2.5rem`) or double-scale (`5rem`) vertical padding to ensure no visual overcrowding.
- **Tablet (768px - 1023px):** 8 columns, `1.25rem` gutters, and `2rem` margins. Multicolumn dental treatment summaries compress from 4 columns to 2.
- **Mobile (< 768px):** 4 columns with `gutter-mobile` (`1rem`) and `margin-mobile` (`1.25rem`). Doctor rosters and appointment slot strips switch from desktop grid layouts to single-axis swipeable cards or vertical stacks.
- **Rhythm & Density:** Medical inputs and slot pickers maintain generous touch targets (minimum 48px height) with internal padding utilizing `space-md` (`1rem`).

## Elevation & Depth

Visual hierarchy relies on **crisp low-contrast outlines** and **subtle ambient shadows**, avoiding heavy drops or dark gradients to preserve the clinical, immaculate environment:

- **Surface Base:** Ground background sits on `#f8fafc`. Interactive panels, slot sheets, and patient summary cards sit on pure `#ffffff`.
- **Ghost Boundary Layer:** Cards and containers use a crisp `1px` border of `#e2e8f0` instead of high-contrast dividers. This imparts clinical structure without cognitive weight.
- **Level 1 (Static Cards):** `0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)` inside an explicit `#e2e8f0` border.
- **Level 2 (Hover & Active States):** `0 10px 25px -5px rgba(13, 148, 136, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.02)`. Tinting the shadow slightly with the primary medical teal signals patient focus and gentle physical response.
- **Level 3 (Modals & Floating Slot Booking Drawers):** `0 20px 30px -10px rgba(15, 23, 42, 0.12), 0 8px 10px -4px rgba(15, 23, 42, 0.04)`.

## Shapes

The design system embraces a **Rounded (Level 2)** shape vocabulary, blending organic softness (symbolic of gentle dental care and comfort) with geometric discipline:

- **Base Elements (Buttons, Inputs, Badges):** `0.5rem` (8px). Delivers a modern, approachable feel without looking childish or overly informal.
- **Cards & Consultation Modules:** `rounded-lg` (`1rem` / 16px). Creates soft, contained treatment summaries and physician bios.
- **Floating Panels, Dialogs & Bottom Booking Sheets:** `rounded-xl` (`1.5rem` / 24px) for top-edge sheets on mobile and full modals on desktop.
- **Pills (`9999px`):** Reserved exclusively for status indicators (e.g., "Available Today", "BDS, MDS Certified", "Painless Tech").

## Components

### Buttons
- **Primary:** Filled `#0d9488` with `#ffffff` text, 48px height, `0.5rem` radius, font weight 600. Focus ring uses `#14b8a6` with 2px offset. Hover moves to `#0f766e` with subtle Level 2 shadow.
- **Secondary:** Surface `#ffffff`, border 1px `#0d9488`, text `#0d9488`. Hover transitions background to `#ccfbf1` at 50% opacity.
- **Tertiary / Ghost:** Text `#334155`, transparent background. Hover adds `#f1f5f9` fill.

### Cards
- Pure `#ffffff` surface, 16px radius (`rounded-lg`), 1px solid border in `#e2e8f0`.
- Padding uses `space-lg` (`1.5rem`).
- Header holds procedure name, clinic branch, and estimated duration with distinct typographic weights.

### Chips & Badges
- **Status Badges:** Pill shape (`9999px`), 24px height, padding `0.25rem 0.75rem`. Background `#ccfbf1`, text `#0f766e`, `label-sm` font.
- **Selectable Time-Slot Chips:** Surface `#ffffff`, border 1px `#cbd5e1`, 38px height. Selected state triggers `#0d9488` background, `#ffffff` text, and zero border.

### Input Fields
- Height 48px, radius `0.5rem`, border 1px `#cbd5e1`, background `#ffffff`, text `#0f172a`.
- Focus state: border 1.5px `#0d9488`, outline: 3px solid rgba(13, 148, 136, 0.15).
- Floating labels or persistent top labels using `label-md` in `#334155`. Error state uses `#ef4444` with explanatory helper text.

### Checkboxes & Radio Buttons
- 20px x 20px, 4px corner radius for checkboxes, full circle for radios. Unchecked: 1.5px border `#94a3b8`. Checked: solid `#0d9488` fill with pure white icon.

### Domain-Specific Components
- **Doctor Credential Tile:** Incorporates avatar thumbnail, registration badge (e.g., "KDC / DCI Verified"), specializations, and years of clinical practice in a clean grid.
- **Treatment Cost & EMI Breakdown:** Clear card displaying estimated procedure cost in ₹ (INR), insurance applicability, and 0% interest EMI options with no hidden terms.
- **Teeth Selector / Dental Chart:** Interactive stylized vector arch using soft neutral outlines (`#cbd5e1`), highlights treated teeth in soft teal (`#14b8a6`) and areas of concern in warm amber (`#f59e0b`).