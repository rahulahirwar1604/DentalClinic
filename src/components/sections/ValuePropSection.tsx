import React from 'react';
import { VALUE_PROPS } from '../../data/differentiators';
import { Icon } from '../ui/Icon';

export const ValuePropSection: React.FC = () => {
  return (
    <section id="why-aura" className="w-full bg-surface-container-low py-12 lg:py-20 border-y border-surface-container-high/50">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        
        {/* Section Header */}
        <div className="flex flex-col items-start lg:items-center text-left lg:text-center max-w-2xl mx-auto mb-8 lg:mb-14">
          <span className="font-label-sm text-[11px] lg:text-label-sm text-primary tracking-widest uppercase font-semibold mb-1.5 lg:mb-2 block">
            Pillars of Clinical Integrity
          </span>
          <h2 className="font-headline-lg text-[20px] sm:text-[24px] lg:text-headline-lg font-bold text-on-surface tracking-tight leading-snug">
            Why Families Across India Trust AuraDental
          </h2>
          <p className="font-body-md text-[13px] sm:text-[14px] lg:text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
            Engineered for zero-fear dentistry through German precision instruments, radical pricing clarity, and hospital-grade sterility.
          </p>
        </div>

        {/* 4 Cards: Mobile Horizontal Stack vs Desktop 4-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-6">
          {VALUE_PROPS.map((item) => (
            <div
              key={item.id}
              className="p-3 lg:p-7 rounded-xl bg-surface-container-lowest border border-surface-container lg:border-none shadow-sm hover:shadow-md transition-all flex flex-row lg:flex-col items-start gap-3.5 lg:gap-4"
            >
              {/* Icon Container */}
              <div
                className={`w-9 h-9 lg:w-12 lg:h-12 rounded-lg ${item.bgLightClass} ${item.iconColorClass} flex items-center justify-center shrink-0 shadow-sm`}
              >
                <Icon name={item.mobileIcon} className="text-[20px] lg:text-[24px]" />
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0 flex-1">
                <h3 className="font-headline-sm text-[14px] lg:text-headline-sm font-semibold text-on-surface leading-tight mb-0.5 lg:mb-2">
                  {item.title}
                </h3>
                
                {/* Responsive copy */}
                <p className="font-body-sm text-[12px] lg:text-body-sm text-on-surface-variant leading-relaxed">
                  <span className="hidden lg:inline">{item.description}</span>
                  <span className="lg:hidden">{item.mobileDescription}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

