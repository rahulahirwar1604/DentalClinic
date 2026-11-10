'use client';

import React, { useState, useRef } from 'react';
import { Review } from '../../types';
import { ReviewCard } from './ReviewCard';
import { Icon } from '../ui/Icon';

interface ReviewsCarouselProps {
  reviews: Review[];
}

export const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => Math.min(reviews.length - 1, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 35) {
      if (diff > 0 && currentIndex < reviews.length - 1) {
        next();
      } else if (diff < 0 && currentIndex > 0) {
        prev();
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      
      {/* Slider Viewport with Side Arrows */}
      <div className="flex items-center gap-1.5 w-full">
        {/* Prev Arrow */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          aria-label="Previous review"
          className={`w-8 h-8 rounded-full bg-surface-container-lowest border border-surface-container shadow-sm text-primary flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 z-10 ${
            currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}
        >
          <Icon name="chevron_left" className="text-[18px]" />
        </button>

        {/* Carousel Viewport */}
        <div
          className="flex-1 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full shrink-0 px-0.5">
                <ReviewCard review={review} isSlide={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          disabled={currentIndex === reviews.length - 1}
          aria-label="Next review"
          className={`w-8 h-8 rounded-full bg-surface-container-lowest border border-surface-container shadow-sm text-primary flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 z-10 ${
            currentIndex === reviews.length - 1
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100 pointer-events-auto'
          }`}
        >
          <Icon name="chevron_right" className="text-[18px]" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 pt-0.5">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-primary w-5' : 'bg-surface-variant w-1.5'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

