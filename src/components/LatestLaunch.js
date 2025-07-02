"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { X } from "lucide-react";
import SplitType from "split-type";
import { gsap } from "gsap";

// Utility to wrap motion value
const wrap = (min, max, v) =>
  ((((v - min) % (max - min)) + (max - min)) % (max - min)) + min;

// Scroll column of parallax cards
function ParallaxCardColumn({ items, baseVelocity = 8, onCardClick }) {
  const baseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && itemRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const itemHeight = itemRef.current.offsetHeight;
        setRepetitions(Math.ceil(containerHeight / itemHeight) + 2);
      }
    };
    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [items]);

  const y = useTransform(baseY, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    if (isHovered.current) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    directionFactor.current = velocityFactor.get() < 0 ? -1 : 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseY.set(baseY.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[60vh] sm:h-[75vh] w-full sm:w-[280px] overflow-hidden"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div className="absolute flex flex-col gap-4" style={{ y }}>
        {Array.from({ length: repetitions }).flatMap((_, i) =>
          items.map((item, index) => (
            <div
              key={`${i}-${index}`}
              ref={i === 0 && index === 0 ? itemRef : null}
              onClick={() => onCardClick(item)}
              className="cursor-pointer relative h-[160px] w-[90vw] max-w-[260px] rounded-2xl shadow-md bg-cover bg-center flex items-end overflow-hidden mx-auto"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="w-full p-3" />
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}

function VelocityScrollColumn({ defaultVelocity = 0.5, numColumns = 2, items, onCardClick }) {
  return (
    <div className="flex flex-row justify-center gap-2 w-full">
      {Array.from({ length: numColumns }).map((_, i) => (
        <ParallaxCardColumn
          key={i}
          items={items}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default function LatestLaunch() {
  const [selectedItem, setSelectedItem] = useState(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const split = new SplitType("#launch-heading", { types: "words" });
    gsap.set("#launch-heading", { opacity: 1 });
    gsap.set(".word", { y: 100, opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(".word", {
            y: 0,
            opacity: 1,
            stagger: 0,
            duration: 0.6,
            ease: "power2.out",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
  }, []);

  const cards = [
    { image: "/farmik.webp", title: "Berry Blast", tagline: "Berrylicious!", benefits: "Antioxidants, Immunity" },
    { image: "/banner4.jpg", title: "Kids’ Milk Mix", tagline: "Fun and tasty!", benefits: "Growth, Focus" },
    { image: "/farmik.webp", title: "Berry Energy Mix", tagline: "Vitality Every Day", benefits: "Stamina, Refresh" },
    { image: "/berryblastwithbg.webp", title: "Morning Berry Boost", tagline: "Start Strong", benefits: "Mood, Bones" },
    { image: "/banner4.jpg", title: "Antioxidant Fuel", tagline: "Recharge Naturally", benefits: "Recovery, Flavor" },
    { image: "/makana.webp", title: "Makana Energy Bites", tagline: "Live Better", benefits: "Low-Cal, Clean Energy" },
  ];

  return (
    <section className="w-full px-4  bg-white">
       <div className="text-center px-4 p-8">
        <h2 className="text-3xl md:text-4xl font-bold ">
         Latest Launch
        </h2>
        <p className="text-gray-500 mt-1 pb-8 text-sm">
          Our top-performing, customer-loved product.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pl-3">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            id="launch-heading"
            ref={headingRef}
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 overflow-hidden opacity-0"
          >
           New Arrival from  <br />
            <span className="text-[rgb(157,37,45)]">Mr. Flakes Nutrix </span> Where Rich Taste Meets Pure Nutrition.
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
           Healthy Eating, Now Deliciously Simple. 
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
            <Link href="/Contact">
              <button className="bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
                Shop Now
              </button>
            </Link>
            <Link href="/WholesaleBulk">
              <button className="border border-[rgb(157,37,45)] text-[rgb(157,37,45)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(157,37,45)] hover:text-white transition">
                See Full Range
              </button>
            </Link>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            100% Natural · Backed by R&D · Loved by Families
          </div>
        </div>

        {/* Scrolling Card Section */}
        <div className="flex-1 w-full relative h-[65vh] sm:h-[75vh]">
          <VelocityScrollColumn items={cards} onCardClick={setSelectedItem} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative overflow-y-auto max-h-[90vh]"
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedItem(null)}
              >
                <X size={20} />
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full mt-4 h-60 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {selectedItem.title}
              </h2>
              <p className="text-sm italic text-[rgb(157,37,45)] mb-2">
                {selectedItem.tagline}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Benefits:</strong> {selectedItem.benefits}
              </p>
              <button
                className="bg-[rgb(157,37,45)] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition w-full"
                onClick={() => (window.location.href = "/WholesaleBulk")}
              >
                Shop Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
