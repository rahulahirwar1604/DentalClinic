import React from 'react';
import { Icon } from '../ui/Icon';
import { Badge } from '../ui/Badge';
import { DoctorHeroCard } from '../hero/DoctorHeroCard';
import { OperatoryPhotoCard } from '../hero/OperatoryPhotoCard';
import { DoctorMiniCard } from '../hero/DoctorMiniCard';
import { getWhatsAppGeneralUrl, CLINIC_CONFIG } from '../../config/clinic';

export const HeroSection: React.FC = () => {
  const whatsappUrl = getWhatsAppGeneralUrl("Hello AuraDental Team, I would like to consult a doctor regarding dental treatment.");
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-6 lg:pt-16 pb-12 lg:pb-24">
      
      {/* Subtle Ambient Backdrop Highlights */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-6">
            
            {/* Accreditation Pill */}
            <div className="self-start">
              <Badge variant="secondary" icon={<span className="w-2 h-2 rounded-full bg-secondary"></span>}>
                <span className="hidden sm:inline">NABH ACCREDITED &amp; ISO CERTIFIED • BENGALURU &amp; MUMBAI</span>
                <span className="sm:hidden">NABH ACCREDITED • ISO 9001:2015</span>
              </Badge>
            </div>

            {/* Headline H1 */}
            <h1 className="font-headline-xl text-[28px] sm:text-[36px] lg:text-headline-xl font-bold text-on-surface tracking-tight leading-[1.2] lg:leading-[1.18]">
              Gentle, World-Class Dentistry{' '}
              <span className="hidden sm:inline">Designed for Your Peace of Mind.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-[14px] sm:text-[16px] lg:text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
              <span className="hidden sm:inline">
                Advanced painless treatments, transparent Indian pricing, and AI-assisted diagnostics led by gold-medalist specialists across Karnataka and Maharashtra.
              </span>
              <span className="sm:hidden">
                Painless dental care &amp; transparent pricing across Bengaluru &amp; Mumbai.
              </span>
            </p>

            {/* Mobile-Only Operatory Photo Card */}
            <div className="block lg:hidden my-1">
              <OperatoryPhotoCard />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 lg:pt-2">
              <a
                href="#quick-booking"
                className="h-12 px-6 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold shadow-md transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <Icon name="calendar_month" className="text-[18px]" />
                <span>Book Consult &amp; 3D Scan</span>
                <Icon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-lg bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-semibold transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Icon name="chat" className="text-[18px] text-secondary" />
                <span>WhatsApp Quick Consult</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="grid grid-cols-3 sm:flex sm:items-center gap-2 sm:gap-6 pt-3 border-t border-surface-container text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5">
                <div className="flex items-center text-tertiary">
                  <Icon name="star" className="text-sm" fill={true} />
                  <span className="font-label-sm text-xs font-bold text-on-surface ml-0.5">4.9/5</span>
                </div>
                <span className="font-label-sm text-[10px] sm:text-xs text-on-surface-variant">Google Reviews</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 sm:border-l sm:border-surface-container sm:pl-6">
                <span className="font-label-sm text-xs font-bold text-on-surface">4,200+</span>
                <span className="font-label-sm text-[10px] sm:text-xs text-on-surface-variant">Smiles Restored</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 sm:border-l sm:border-surface-container sm:pl-6">
                <span className="font-label-sm text-xs font-bold text-on-surface">0 Min</span>
                <span className="font-label-sm text-[10px] sm:text-xs text-on-surface-variant">Waiting Guarantee</span>
              </div>
            </div>

            {/* Mobile-Only Compact Doctor Profile Card */}
            <div className="block lg:hidden mt-2">
              <DoctorMiniCard />
            </div>

          </div>

          {/* Desktop Right Column: Doctor Showcase Card */}
          <div className="hidden lg:block lg:col-span-5">
            <DoctorHeroCard />
          </div>

        </div>
      </div>

    </section>
  );
};

