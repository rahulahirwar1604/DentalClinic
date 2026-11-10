'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '../ui/Icon';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-container-high lg:border-none shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-14 lg:h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-sm lg:gap-space-md">

        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shadow-sm shrink-0">
            <Icon name="dentistry" className="text-[20px]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-[17px] lg:text-[20px] text-primary font-bold tracking-tight leading-tight">
                AuraDental
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
            </div>
            <span className="font-label-sm text-[9px] lg:text-[10px] text-on-surface-variant font-medium tracking-wider uppercase leading-none">
              Clinic &amp; Implant Centre
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          <a href="#treatments" className="font-label-md text-label-md font-medium text-on-surface-variant hover:text-primary transition-colors">
            Treatments
          </a>
          <a href="#why-aura" className="font-label-md text-label-md font-medium text-on-surface-variant hover:text-primary transition-colors">
            Why Aura
          </a>
          <a href="#stories" className="font-label-md text-label-md font-medium text-on-surface-variant hover:text-primary transition-colors">
            Patient Stories
          </a>
          <a href="#quick-booking" className="font-label-md text-label-md font-medium text-on-surface-variant hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#locations" className="font-label-md text-label-md font-medium text-on-surface-variant hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Phone Link */}
          <a
            href="tel:+919625540447"
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-primary hover:bg-surface-container-low transition-colors font-label-md text-label-md font-semibold"
            aria-label="Call Helpline"
          >
            <Icon name="call" className="text-[18px] lg:text-[16px]" />
            <span className="hidden sm:inline">+91 96255 40447</span>
          </a>

          {/* Book Appointment CTA */}
          <a
            href="#quick-booking"
            className="h-9 lg:h-11 px-3.5 lg:px-5 flex items-center gap-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all active:scale-[0.98]"
          >
            <Icon name="calendar_month" className="text-[16px] lg:text-[18px]" />
            <span>Book<span className="hidden sm:inline"> Appointment</span></span>
          </a>
        </div>

      </div>
    </header>
  );
};

