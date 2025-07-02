"use client";

import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

function Band() {
  const features = [
    "100% Natural",
    "No Cholesterol",
    "No Added Sugar",
    "No Artificial Flavors",
  ];

  return (
    <div className="band-section py-4 border-t-[3px] border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:flex justify-between items-center gap-y-4 text-sm sm:text-base font-medium text-gray-900">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2"
            >
              <BsPatchCheckFill className="text-black band-icon inline-block" />
              <span className="band-text inline-block">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Band;
