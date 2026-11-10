import React from 'react';
import { CLINICS } from '../../data/clinics';
import { Icon } from '../ui/Icon';

export const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="w-full bg-surface-container-low py-12 lg:py-16 border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">

        {/* Section Header */}
        <div className="flex flex-col gap-1 mb-8 lg:mb-12">
          <span className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-primary">
            Physical Centres
          </span>
          <h2 className="font-headline-lg text-[22px] sm:text-[28px] lg:text-headline-lg font-bold text-on-surface tracking-tight leading-tight">
            Flagship Clinics &amp; Emergency Care
          </h2>
          <p className="font-body-sm text-[13px] sm:text-body-sm leading-relaxed text-on-surface-variant max-w-xl">
            State-of-the-art facilities equipped with dedicated dental emergency suites, Class 100 operatory sterilizers, and digital panoramic 3D imaging.
          </p>
        </div>

        {/* Desktop 4-Column Grid (>= lg) */}
        <div className="hidden lg:grid grid-cols-4 gap-6">

          {/* Clinic 1: Bengaluru */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between border border-surface-container/60">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Icon name="domain" className="text-xl" />
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Bengaluru Flagship
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                100 Ft Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka – 560038
              </p>
            </div>
            <div className="pt-3 border-t border-surface-container flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                <Icon name="directions" className="text-sm" />
                <span>Opposite Metro Pillar 128</span>
              </div>
              <a
                href="https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
              >
                <span>View on Google Maps</span>
                <Icon name="open_in_new" className="text-[12px]" />
              </a>
            </div>
          </div>

          {/* Clinic 2: Mumbai */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between border border-surface-container/60">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Icon name="domain" className="text-xl" />
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Mumbai Centre
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Turner Road, Near Perry Cross Road, Bandra West, Mumbai, Maharashtra – 400050
              </p>
            </div>
            <div className="pt-3 border-t border-surface-container flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold">
                <Icon name="directions" className="text-sm" />
                <span>Valet Parking Available</span>
              </div>
              <a
                href="https://maps.google.com/?q=Turner+Road+Bandra+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
              >
                <span>View on Google Maps</span>
                <Icon name="open_in_new" className="text-[12px]" />
              </a>
            </div>
          </div>

          {/* Clinic 3: Direct Assistance */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between border border-surface-container/60">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Icon name="support_agent" className="text-xl" />
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Direct Assistance
                </h3>
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <a href="tel:+919625540447" className="font-headline-sm text-lg font-bold text-primary hover:underline">
                  +91 96255 40447
                </a>
                <span className="font-body-sm text-xs text-on-surface-variant">Emergency WhatsApp &amp; Triage</span>
                <span className="font-body-sm text-xs text-on-surface-variant"></span>
              </div>
            </div>
            <div className="pt-3 border-t border-surface-container">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-container/40 text-primary text-xs font-semibold">
                <Icon name="schedule" className="text-sm" />
                24/7 Dental Emergency Desk
              </span>
            </div>
          </div>

          {/* Clinic 4: Operating Hours */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between border border-surface-container/60">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Icon name="schedule" className="text-xl" />
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Operating Hours
                </h3>
              </div>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-on-surface">Mon – Sat:</span>
                  <span>9:00 AM – 8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-on-surface">Sunday:</span>
                  <span>10:00 AM – 2:00 PM</span>
                </div>
                <span className="text-[11px] text-outline italic">Sunday by prior confirmation</span>
              </div>
            </div>
            <div className="pt-3 border-t border-surface-container">
              <span className="text-xs text-on-surface-variant flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Biomedical Waste Compliant • Class 100 OT
              </span>
            </div>
          </div>

        </div>

        {/* Mobile Stacked Layout (< lg) */}
        <div className="flex lg:hidden flex-col gap-3">

          {/* Clinic Cards */}
          {CLINICS.map((clinic) => (
            <div
              key={clinic.id}
              className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="location_on" className="text-primary text-[20px]" />
                  <h3 className="text-[15px] font-bold text-on-surface">
                    {clinic.name}
                  </h3>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-primary-fixed/40 text-primary font-bold">
                  {clinic.badge}
                </span>
              </div>

              <p className="text-[13px] leading-relaxed text-on-surface-variant">
                {clinic.address}
              </p>

              <div className="flex items-center gap-3 pt-1 text-on-surface-variant flex-wrap">
                <span className="text-xs flex items-center gap-1">
                  <Icon name="schedule" className="text-[14px] text-secondary" />
                  {clinic.hours}
                </span>
                <span className="text-xs flex items-center gap-1">
                  <Icon name="local_parking" className="text-[14px] text-tertiary" />
                  {clinic.valetInfo}
                </span>
              </div>

              <div className="pt-1 border-t border-surface-container">
                <a
                  href={clinic.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary"
                >
                  <span>View on Google Maps</span>
                  <Icon name="open_in_new" className="text-[14px]" />
                </a>
              </div>
            </div>
          ))}

          {/* Standalone Red Emergency SOS Card */}
          <div className="p-3.5 rounded-xl bg-error-container/40 border border-error/30 flex items-center justify-between gap-3 shadow-sm mt-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-error text-on-error flex items-center justify-center shrink-0">
                <Icon name="emergency" className="text-[20px]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[13px] font-bold text-on-surface">
                  24/7 Dental Trauma Desk
                </span>
                <span className="text-[11px] text-error font-semibold">
                  +91 96255 40447 [SOS Dispatch]
                </span>
              </div>
            </div>

            <a
              href="tel:+919625540447"
              className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest border border-error/40 text-error font-label-sm text-xs font-bold shrink-0 hover:bg-error hover:text-on-error transition-colors shadow-sm"
            >
              Call Now
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

