import React from 'react';
import { Treatment } from '../../types';
import { Icon } from '../ui/Icon';

interface TreatmentCardProps {
  treatment: Treatment;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  return (
    <>
      {/* Mobile Compact Card (< md) */}
      <a
        href="#quick-booking"
        className="md:hidden p-3 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col justify-between gap-3 group hover:border-primary/40 transition-colors"
      >
        <div className="flex items-start justify-between gap-1.5">
          <div className="w-9 h-9 rounded-lg bg-secondary-container/30 text-primary flex items-center justify-center shrink-0">
            <Icon name={treatment.mobileIcon} className="text-[20px]" />
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-fixed shrink-0">
            {treatment.mobileBadge}
          </span>
        </div>

        <div className="flex flex-col">
          <h3 className="font-headline-sm text-[13px] font-bold text-on-surface leading-snug line-clamp-2">
            {treatment.mobileTitle}
          </h3>
          <div className="flex items-center justify-between pt-2 mt-1 border-t border-surface-container">
            <span className="font-label-sm text-[12px] font-bold text-primary">
              {treatment.price === 'Custom Plan' ? 'Custom Plan' : `From ${treatment.price}`}
            </span>
            <Icon name="arrow_forward" className="text-[16px] text-secondary group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </a>

      {/* Desktop / Tablet Expanded Card (>= md) */}
      <div className="hidden md:flex bg-surface-container-lowest p-7 rounded-xl shadow-sm hover:shadow-md transition-all flex-col justify-between border border-surface-container/60">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-label-sm text-label-sm font-semibold text-primary bg-secondary-container/40 px-3 py-1 rounded-full">
              {treatment.category}
            </span>
            <Icon name={treatment.icon} className="text-on-surface-variant text-xl" />
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
            {treatment.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
            {treatment.description}
          </p>
        </div>

        <div className="pt-4 bg-surface-container-low rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block">
              {treatment.price === 'Custom Plan' ? 'Plan' : 'Starts from'}
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {treatment.price === 'Custom Plan' ? 'Custom Digital' : treatment.price}
            </span>
          </div>
          <a
            className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container inline-flex items-center gap-1 group"
            href="#quick-booking"
          >
            <span>Book Consult</span>
            <Icon name="arrow_forward" className="text-sm group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </>
  );
};

