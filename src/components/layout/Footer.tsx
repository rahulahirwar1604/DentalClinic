import React from 'react';
import Link from 'next/link';
import { Icon } from '../ui/Icon';
import { Badge } from '../ui/Badge';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl border-t border-surface-container-high pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-8 lg:pt-16 pb-8">

        {/* MOBILE FOOTER (block lg:hidden) - Exact 1:1 match to code1.html */}
        <div className="flex lg:hidden flex-col gap-space-md">
          {/* Brand Info */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                <Icon name="dentistry" className="text-[18px]" />
              </div>
              <span className="font-headline-sm text-[18px] text-primary font-bold tracking-tight leading-tight">
                AuraDental
              </span>
            </div>
            <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
              Registered under Karnataka &amp; Maharashtra Private Medical Establishments Act. Compliant with Dental Council of India (DCI) Code of Ethics.
            </p>
          </div>

          {/* Two-Column Link Directory */}
          <div className="grid grid-cols-2 gap-4 py-2.5 border-y border-surface-container">
            {/* Column 1: Treatments */}
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-primary">
                Treatments
              </span>
              <div className="flex flex-col gap-1.5">
                <a className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors py-0.5" href="#quick-booking">
                  Clear Aligners
                </a>
                <a className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors py-0.5" href="#quick-booking">
                  Microscopic RCT
                </a>
                <a className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors py-0.5" href="#quick-booking">
                  Titanium Implants
                </a>
                <a className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors py-0.5" href="#quick-booking">
                  Zoom Teeth Whitening
                </a>
              </div>
            </div>

            {/* Column 2: Clinics & Care */}
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-primary">
                Clinics &amp; Care
              </span>
              <div className="flex flex-col gap-1.5">
                <a className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors py-0.5" href="#quick-booking">
                  Indiranagar, Bengaluru
                </a>
                <a className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors py-0.5" href="#quick-booking">
                  Bandra West, Mumbai
                </a>
                <a className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors py-0.5" href="tel:+919820144520">
                  24/7 Dental Emergency
                </a>
                <a className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors py-0.5" href="#quick-booking">
                  0% EMI Plans
                </a>
              </div>
            </div>
          </div>

          {/* Regulatory Badges */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-medium tracking-wide border border-outline-variant/30">
              DCI Reg. #14288/KA
            </span>
            <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-medium tracking-wide border border-outline-variant/30">
              ISO 9001:2015
            </span>
            <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-medium tracking-wide border border-outline-variant/30">
              NABH Certified
            </span>
          </div>

          {/* Legal & Policy Links */}
          <div className="flex items-center gap-2.5 text-on-surface-variant font-label-sm text-[11px] flex-wrap">
            <span className="hover:text-primary cursor-pointer transition-colors">Patient Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Sterilization Protocols</span>
            <span>•</span>
            <span className="hover:text-primary cursor-pointer transition-colors">EMI Terms</span>
          </div>

          {/* Mobile Copyright */}
          <div className="text-on-surface-variant font-label-sm text-[11px] leading-relaxed">
            © 2025 AuraDental Healthcare Pvt. Ltd. Bengaluru • Mumbai. All clinical procedures strictly supervised by certified MDS Prosthodontists and Endodontists.
          </div>
        </div>

        {/* DESKTOP FOOTER (hidden lg:block) - Preserved completely */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-12 mb-12">

            {/* Brand & Accreditations (Spans 2 columns on desktop) */}
            <div className="col-span-2 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                  <Icon name="dentistry" className="text-[18px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-xl text-primary leading-tight font-bold tracking-tight">
                    AuraDental
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant font-medium tracking-wider uppercase">
                    Clinic &amp; Implant Centre
                  </span>
                </div>
              </div>

              <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant max-w-sm">
                NABH Accredited Center for Painless Implantology, Laser Dentistry &amp; Advanced Orthodontics in India. Upholding international hospital-grade clinical sterilization protocols.
              </p>

              {/* Certifications row */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="pill" icon={<Icon name="verified" className="text-sm" />}>
                  NABH Certified
                </Badge>
                <Badge variant="pill" icon={<Icon name="check_circle" className="text-sm" />}>
                  ISO 9001:2015
                </Badge>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant text-xs font-medium border border-outline-variant/30">
                  DCI Reg #14288/KA
                </span>
              </div>

              <p className="text-[11px] text-outline leading-relaxed max-w-sm">
                Registered under Karnataka &amp; Maharashtra Private Medical Establishments Act, strictly compliant with Dental Council of India (DCI) Code of Ethics.
              </p>
            </div>

            {/* Treatments Column */}
            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
                Treatments
              </span>
              <div className="flex flex-col gap-2">
                <a href="#quick-booking" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Clear Aligners &amp; Braces
                </a>
                <a href="#quick-booking" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Single-Sitting RCT
                </a>
                <a href="#quick-booking" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Swiss Dental Implants
                </a>
                <a href="#quick-booking" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Laser Teeth Whitening
                </a>
                <a href="#quick-booking" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Pediatric Gentle Care
                </a>
                <a href="#quick-booking" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Full Mouth Rehabilitation
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
                Quick Links
              </span>
              <div className="flex flex-col gap-2">
                <a href="#why-aura" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  About Dr. Rajesh Kumar
                </a>
                <a href="#why-aura" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Clinical Safety &amp; Sterilization
                </a>
                <a href="#quick-booking" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Transparent Price List
                </a>
                <a href="#why-aura" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  0% Interest EMI Options
                </a>
                <a href="#stories" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Patient Video Testimonials
                </a>
                <a href="#locations" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Emergency Dental Desk
                </a>
              </div>
            </div>

            {/* Clinic Locations Column */}
            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
                Clinic Locations
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface">Bengaluru Flagship</span>
                  <span className="text-xs text-on-surface-variant">100 Ft Rd, Indiranagar</span>
                </div>
                <div className="flex flex-col mt-1">
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface">Mumbai Centre</span>
                  <span className="text-xs text-on-surface-variant">Turner Rd, Bandra West</span>
                </div>
                <div className="flex flex-col mt-2 pt-2 border-t border-surface-container">
                  <span className="text-xs text-on-surface-variant">Emergency Dental Desk</span>
                  <a href="tel:+919625540447" className="font-body-sm text-body-sm font-bold text-primary hover:underline">
                    +91 9625540447
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Desktop Bottom Legal & Copyright Bar */}
          <div className="pt-8 border-t border-surface-container flex items-center justify-between gap-4 text-xs text-on-surface-variant">
            <p>© {new Date().getFullYear()} AuraDental Healthcare Pvt. Ltd. Bengaluru &amp; Mumbai. All clinical procedures strictly supervised by certified MDS Prosthodontists and Endodontists.</p>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="hover:text-primary cursor-pointer transition-colors">Patient Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Terms of Treatment</span>
              <span>•</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Sterilization Protocols</span>
              <span>•</span>
              <span className="hover:text-primary cursor-pointer transition-colors">EMI Terms</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
