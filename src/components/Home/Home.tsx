"use client";

import React from "react";
import { DisplayProduct } from "@/types/product";
import LeadingSupplier from "./LeadingSupplier";
import Footer from "./Footer";
import ShopByCategory from "./ShopByCategory";
import ReviewSection from "./Review/ReviewSection";
import { Review } from "@/types/review";
import reviewData from "@/components/mock/review.json";

type HomeProps = {
  categoryMap: Map<string, DisplayProduct>;
};

const Home: React.FC<HomeProps> = ({ categoryMap }) => {
  const categoryEntries = [...categoryMap.entries()];
  const reviews: Review[] = reviewData;

  return (
    <>
      <LeadingSupplier />
      <ShopByCategory categoryEntries={categoryEntries} />
      <ReviewSection reviews={reviews} />
      <Footer />
    </>
  );
};

export default Home;
