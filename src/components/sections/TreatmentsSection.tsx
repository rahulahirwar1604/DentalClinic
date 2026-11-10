import React from 'react';
import { TREATMENTS } from '../../data/treatments';
import { TreatmentCard } from '../treatments/TreatmentCard';

export const TreatmentsSection: React.FC = () => {
  return (
    <section id="treatments" className="w-full bg-surface py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4">
          <div>
            <span className="font-label-sm text-[11px] lg:text-label-sm text-primary tracking-widest uppercase font-semibold mb-1.5 lg:mb-2 block">
              Comprehensive Oral Medicine
            </span>
            <h2 className="font-headline-lg text-[22px] sm:text-[28px] lg:text-headline-lg font-bold text-on-surface tracking-tight leading-tight">
              Specialized Clinical Treatments
            </h2>
          </div>
          <p className="font-body-sm text-[13px] sm:text-body-sm text-on-surface-variant max-w-md leading-relaxed">
            Every procedure utilizes 3D CBCT digital imaging for sub-millimeter surgical accuracy and optimal aesthetic contours.
          </p>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 2 columns on tablet, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-6">
          {TREATMENTS.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

      </div>
    </section>
  );
};

