import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string; 
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className = "" }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div
      className={`flex gap-1 ${className}`}
      aria-label={`Rating: ${rating} out of 5`}
    >
      {stars.map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            rating >= star ? "text-yellow-400" : "text-gray-300"
          }`}
          fill={rating >= star ? "#facc15" : "none"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default StarRating;
