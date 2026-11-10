import React from 'react';
import Image from 'next/image';
import { Icon } from '../ui/Icon';

export const DoctorHeroCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden border border-surface-container-high">
      
      {/* Floating Top Pill */}
      <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm border border-outline-variant/30 text-xs font-semibold text-primary">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        Director of Clinical Care
      </div>

      {/* Doctor Image Container */}
      <div className="relative w-full h-[380px] bg-surface-container">
        <Image
          src="/images/doctor-portrait.jpg"
          alt="Dr. Rajesh Kumar, Senior Implantologist at AuraDental Clinic"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 420px"
        />
      </div>

      {/* Doctor Information Card Base */}
      <div className="p-5 flex flex-col gap-3 bg-surface-container-lowest">
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-sm text-lg font-bold text-on-surface">
              Dr. Rajesh Kumar
            </h2>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Senior Implantologist • MDS (Prosthodontics &amp; Implantology)
            </p>
          </div>
          <span className="px-2 py-0.5 rounded bg-surface-container text-primary text-[11px] font-bold">
            AIIMS New Delhi
          </span>
        </div>

        {/* Floating Micro Stat Row */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-surface-container">
          <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
            <span className="font-headline-sm text-sm font-bold text-on-surface">18+ Years</span>
            <span className="font-label-sm text-[10px] text-on-surface-variant">Years of Clinical Mastery</span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
            <span className="font-headline-sm text-sm font-bold text-on-surface">15,000+</span>
            <span className="font-label-sm text-[10px] text-on-surface-variant">Happy Smiles Restored</span>
          </div>
        </div>

      </div>

    </div>
  );
};

