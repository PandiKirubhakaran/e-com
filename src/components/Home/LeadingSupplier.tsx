"use client";
import React from "react";
import Image from "next/image";
import featuresData from "@/components/mock/leadingSupplier.json";
import { MessageLabels } from "@/constants/enums";

type SupplierFeature = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const LeadingSupplier: React.FC = () => {
  return (
    <section
      aria-labelledby="leading-supplier-title"
      className="py-12 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="leading-supplier-title"
          className="text-2xl font-bold text-center text-gray-900 mb-10"
        >
          {MessageLabels.WHY_US}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuresData.map((feature, index) => (
            <div key={index} className="text-center">
              <Image
                src={feature.image}
                alt={feature.alt}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadingSupplier;
