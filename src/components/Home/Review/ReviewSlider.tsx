"use client";

import React, { useState } from "react";
import { Review } from "@/types/review";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper/types";

const ReviewSlider: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperInit = (swiper: SwiperType) => {
    setSwiperInstance(swiper);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        aria-label="Customer reviews slider"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`custom-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 text-2xl flex items-center justify-center rounded-full transition ${
          isBeginning
            ? "text-gray-300 cursor-not-allowed"
            : "text-[#555] hover:bg-gray-200"
        }`}
        aria-label="Previous slide"
        disabled={isBeginning}
      >
        ‹
      </button>

      <button
        className={`custom-swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 text-2xl flex items-center justify-center rounded-full transition ${
          isEnd
            ? "text-gray-300 cursor-not-allowed"
            : "text-[#555] hover:bg-gray-200"
        }`}
        aria-label="Next slide"
        disabled={isEnd}
      >
        ›
      </button>
    </div>
  );
};

export default ReviewSlider;
