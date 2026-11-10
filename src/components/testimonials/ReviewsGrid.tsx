import React from 'react';
import { Review } from '../../types';
import { ReviewCard } from './ReviewCard';

interface ReviewsGridProps {
  reviews: Review[];
}

export const ReviewsGrid: React.FC<ReviewsGridProps> = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

