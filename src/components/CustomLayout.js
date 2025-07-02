'use client';

import React from 'react';
import Image from 'next/image';
import {
  Leaf,
  CheckCircle,
  Wheat,
  Droplet,
  Dumbbell,
} from 'lucide-react';

export default function CustomLayout() {
  return (
    <div className="bg-[#fff3f6] w-full px-4 py-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Left Column: Text Content */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-[#2d3f2f] leading-snug">
            Fueling Better Nutrition
          </h1>
          <p className="text-gray-700 text-base leading-relaxed">
            At Mr. Flakes Nutrix, we blend ancient super grains with modern nutrition to craft food that’s delicious, functional, and clean.
            Every product is a step toward a healthier lifestyle — made easy, one bowl at a time.
          </p>

          {/* Mission & Impact Card */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-semibold text-[#2d3f2f]">
              Naturally Nutritious. Delightfully Delicious.
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              From high-fiber cereals to plant-powered snacks, we focus on taste that fuels your day — without artificial additives or compromises.
            </p>
            <a href="#" className="text-[#cc3366] font-medium mt-2 inline-block text-sm">
              Explore Our Range
            </a>
          </div>

          {/* Why Super Grains Card */}
          <div className="bg-[#ffe9f0] rounded-2xl p-5 shadow-inner">
            <h4 className="text-lg font-bold text-[#2d3f2f] mb-2">
              Why Super Grains?
            </h4>
            <p className="text-sm text-[#4d3f4f]">
              We harness the power of quinoa, millet, jowar, and oats to fuel modern lifestyles with clean energy, enhanced digestion, and better satiety.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { icon: <Wheat className="text-[#cc3366] w-4 h-4" />, label: 'Powered by Super Grains' },
                { icon: <CheckCircle className="text-[#cc3366] w-4 h-4" />, label: '100% Clean' },
                { icon: <Droplet className="text-[#cc3366] w-4 h-4" />, label: 'Gluten-Free' },
                { icon: <Dumbbell className="text-[#cc3366] w-4 h-4" />, label: 'High in Fiber & Nutrients' },
              ].map(({ icon, label }, index) => (
                <div key={index} className="bg-white rounded-xl px-3 py-2 shadow flex items-center gap-2">
                  {icon}
                  <p className="text-sm text-[#2d3f2f] font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Product Image with Tags */}
        <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/berryblastwithbg.webp"
            alt="Mr. Flakes Nutrix Product"
            width={300}
            height={300}
            className="rounded-xl w-full h-auto object-contain"
          />

          {/* Floating Tag: Top Left */}
          <div className="absolute top-4 left-4 bg-white text-[#cc3366] px-3 py-1.5 rounded-md shadow text-xs font-semibold flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5" />
            Super Grain Innovation
          </div>

          {/* Floating Tag: Bottom Right */}
          <div className="absolute bottom-4 right-4 bg-white text-[#cc3366] px-3 py-1.5 rounded-md shadow text-xs font-semibold flex items-center gap-1.5">
            <Dumbbell className="w-3.5 h-3.5" />
            Plant-Based Wellness
          </div>
        </div>
      </div>
    </div>
  );
}
