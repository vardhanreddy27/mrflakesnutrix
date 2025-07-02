'use client';

import Image from 'next/image';

export default function NewsletterHero() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Branding Content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-600">Hey, Health Enthusiasts 👋</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Mr. Flakes Nutrix. Fresh updates, no effort.
          </h1>
          <p className="text-gray-600 text-lg">
            Join our community and be the first to know about new wholesome flavors, special discounts,
            and expert nutrition tips. Lets make healthy eating easier and tastier!
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="text"
              placeholder="Search products or topics..."
              className="border border-gray-300 px-4 py-3 rounded-full w-full sm:w-72"
            />
            <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
              Subscribe Now
            </button>
          </div>

          {/* Offer Confirmation Text */}
          <p className="text-sm text-gray-500 mt-2">
            🎁 Subscribe now to receive our latest offers, promotions, and insider news.
          </p>
        </div>

        {/* Right: Mobile UI Image */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/phone.png" // Make sure this image exists
            alt="Mr. Flakes Newsletter Preview"
            width={200}
            height={460}
          />

          {/* Top-Left Overlay (Inside Image) */}
          <div className="absolute top-4 left-4 backdrop-blur-md bg-white/30 text-black px-4 py-2 rounded-md text-sm shadow-lg border border-white/40">
            ⚠️ Fast selling! <br />
            <span className="text-xs text-gray-700">Limited stock available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
