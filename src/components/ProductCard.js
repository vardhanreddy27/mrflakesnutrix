'use client';

import Image from 'next/image';
import React from 'react';
import { FaLeaf, FaSeedling, FaUtensils, FaFireAlt } from 'react-icons/fa';

export default function ProductCard() {
  const features = [
    {
      title: '30% Millet',
      desc: 'Wholesome grains for sustained energy.',
      icon: <FaSeedling className="text-green-600 text-2xl" />,
    },
    {
      title: 'Dark Chocolate',
      desc: 'Belgian dark chocolate for rich flavor.',
      icon: <FaFireAlt className="text-yellow-600 text-2xl" />,
    },
    {
      title: 'Jumbo Oats',
      desc: 'High fiber and slow-digesting carbs.',
      icon: <FaUtensils className="text-orange-500 text-2xl" />,
    },
    {
      title: 'Clean Label',
      desc: 'Low fat, no preservatives, gluten-free.',
      icon: <FaLeaf className="text-lime-600 text-2xl" />,
    },
  ];

  return (
    <section className="bg-[#FFFDF7] py-10">
      {/* Centered Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Best Seller</h2>
        <p className="text-gray-500 mt-1 text-sm">
          Our top-performing, customer-loved product.
        </p>
      </div>

      {/* Main Card Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center px-4">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src="/darkchoclatemuesli.png"
            alt="Mr. Flakes Dark Chocolate Millet Muesli"
            width={320}
            height={400}
            className="object-contain drop-shadow-xl rounded-2xl"
            priority
          />
        </div>

        {/* Product Info – All Corners Rounded */}
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mt-6 md:mt-0 md:ml-6">
          <p className="text-sm text-gray-500 mb-1">Wholesome. Functional. Delicious.</p>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Dark Chocolate Millet Muesli</h1>
          <p className="text-gray-600 mb-4 text-sm">
            Made with Belgian dark chocolate, 30% millets, crunchy almonds, black raisins & jumbo oats — a guilt-free treat that fuels your day.
          </p>

          {/* Nutrition Highlights */}
          <div className="flex gap-4 mb-6">
            <div className="bg-[#fef2f2] text-[#b91c1c] px-3 py-1 rounded-full text-sm font-semibold">
              Fiber: 9.4g
            </div>
            <div className="bg-[#f0fdf4] text-[#15803d] px-3 py-1 rounded-full text-sm font-semibold">
              Protein: 10.7g
            </div>
          </div>

          {/* Buy Now CTA */}
          <button
            className="w-full bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            onClick={() => {
              window.location.href = '/WholesaleBulk';
            }}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-700 px-4">
        {features.map(({ title, desc, icon }) => (
          <div key={title} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow">
              {icon}
            </div>
            <p className="font-semibold">{title}</p>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
