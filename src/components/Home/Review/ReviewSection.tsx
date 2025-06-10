import React from "react";
import { Review } from "@/types/review";
import StarRating from "./StarRating";
import ReviewSlider from "./ReviewSlider";
import { UILable } from "@/constants/enums";

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-12"
      aria-labelledby="reviews-heading"
    >
      <div className="text-center mb-10">
        <h2 id="reviews-heading" className="text-3xl font-bold mb-2">
          {UILable.CUSTOMER_REVIEWS}
        </h2>
        <div className="flex justify-center">
          <StarRating rating={averageRating} />
        </div>
        <p className="text-gray-600 mt-1">
          {UILable.AVERAGE_RATING} {averageRating.toFixed(1)} / 5
        </p>
      </div>

      <ReviewSlider reviews={reviews.slice(0, 5)} />
    </section>
  );
};

export default ReviewSection;
