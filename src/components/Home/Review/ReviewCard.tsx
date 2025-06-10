import { Review } from "@/types/review";
import React from "react";
import StarRating from "./StarRating";

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 text-center"
      aria-label={`Review by ${review.name}`}
    >
      <h3 className="text-lg font-semibold">{review.name}</h3>
      <StarRating rating={review.rating} className="justify-center" />
      <p className="text-gray-700 text-sm">{review.review}</p>
      {review.date && <span className="text-xs text-gray-400">{review.date}</span>}
    </div>
  );
};

export default ReviewCard;
