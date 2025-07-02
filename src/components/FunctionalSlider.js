'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';

const slides = [
  {
    title: 'WHOLENESS IN EVERY BITE',
    description:
      'Explore our wholesome breakfast cereals — crafted from quinoa, millet, berries, chocolate, nuts & more. Your perfect morning fuel.',
    img: '/breakfast.png',
  },
  {
    title: 'IMMUNITY BOOSTERS',
    description:
      'Fuel your immunity with mango, turmeric and ancient grain blends crafted to support your everyday wellness.',
    img: '/breakfast.png',
  },
  {
    title: 'PLANT-BASED ENERGY',
    description:
      'Power through the day with plant-based bites rich in protein, vitamins, and fiber. No added sugar.',
    img: '/breakfast.png',
  },
];

export default function FunctionalSlider() {
  return (
    <section className="w-full min-h-screen bg-[#c7feff85] flex items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 8000 }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 items-center gap-8">
              {/* Text Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h2 className="text-4xl font-extrabold text-black">
                  {slide.title}
                </h2>
                <p className="text-gray-700 text-lg">{slide.description}</p>
                <button className="mt-4 px-6 py-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded hover:opacity-90 transition">
                  SHOP NOW
                </button>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="flex justify-center"
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
