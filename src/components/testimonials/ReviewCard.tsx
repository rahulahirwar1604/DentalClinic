import React from 'react';
import { Review } from '../../types';
import { Icon } from '../ui/Icon';

interface ReviewCardProps {
  review: Review;
  isSlide?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, isSlide = false }) => {
  return (
    <div
      className={`w-full bg-surface-container-lowest rounded-xl border border-surface-container shadow-sm flex flex-col justify-between ${
        isSlide ? 'p-3.5 gap-2.5 min-h-[170px]' : 'p-7 lg:p-8 gap-4'
      }`}
    >
      <div>
        {/* Rating Stars & Location / Tag */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-0.5 text-tertiary">
            {[...Array(review.rating)].map((_, i) => (
              <Icon
                key={i}
                name="star"
                fill={true}
                className={isSlide ? 'text-[15px]' : 'text-lg'}
              />
            ))}
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
            {review.location.split(',')[0]}
          </span>
        </div>

        {/* Quote text - Fully readable without awkward word truncation */}
        <p
          className={`font-body-sm text-on-surface italic ${
            isSlide ? 'text-[12px] leading-snug' : 'text-body-sm leading-relaxed mb-4'
          }`}
        >
          “{review.quote}”
        </p>
      </div>

      {/* Patient Footer Row */}
      <div className="flex items-center justify-between pt-2 border-t border-surface-container mt-auto">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-secondary-container/40 flex items-center justify-center font-bold text-secondary text-[10px] sm:text-[11px] shrink-0">
            {review.initials}
          </div>
          <div className="flex flex-col min-w-0 leading-tight">
            <span className="text-[11px] sm:text-[12px] font-bold text-on-surface truncate">
              {review.patientName}
            </span>
            <span className="text-[9px] sm:text-[10px] text-on-surface-variant truncate">
              {review.treatmentTag}
            </span>
          </div>
        </div>

        {review.verified && (
          <span className="text-[9px] sm:text-[10px] text-secondary font-semibold flex items-center gap-0.5 shrink-0">
            <Icon name="check_circle" fill={true} className="text-[12px] sm:text-[13px]" />
            <span>Verified</span>
          </span>
        )}
      </div>
    </div>
  );
};
