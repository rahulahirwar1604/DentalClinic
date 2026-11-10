import React from 'react';
import { REVIEWS } from '../../data/reviews';
import { ReviewsGrid } from '../testimonials/ReviewsGrid';
import { ReviewsCarousel } from '../testimonials/ReviewsCarousel';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="stories" className="w-full bg-surface-container-low py-10 lg:py-20 border-y border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-6 lg:mb-14">
          <span className="font-label-sm text-[10px] lg:text-label-sm text-primary tracking-widest uppercase font-semibold mb-1 lg:mb-2 block">
            Verified Patient Outcomes
          </span>
          <h2 className="font-headline-lg text-[20px] sm:text-[24px] lg:text-headline-lg font-bold text-on-surface mb-2 lg:mb-3">
            Real Stories, Restored Confidence
          </h2>
          <p className="font-body-md text-[13px] sm:text-[14px] lg:text-body-md text-on-surface-variant leading-relaxed">
            Over 98% of our patients report zero procedural discomfort and commend our transparent, itemized consultation approach.
          </p>
        </div>

        {/* Desktop 3-Card Grid (>= md) */}
        <div className="hidden md:block">
          <ReviewsGrid reviews={REVIEWS} />
        </div>

        {/* Mobile Swipeable Carousel (< md) */}
        <div className="block md:hidden">
          <ReviewsCarousel reviews={REVIEWS} />
        </div>

      </div>
    </section>
  );
};

