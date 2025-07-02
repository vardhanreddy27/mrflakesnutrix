"use client";

import Image from "next/image";

export default function CertifiedMarquee() {
  const certs = [
    "https://qltysys.com/wp-content/uploads/2021/01/22000-2018-1.png",
    "haccp.png",
    "https://www.certification-india.com/wp-content/uploads/food-safety-and-standards-authority-of-india-logo.png",
    "/gmp.png",
    "https://www.prepol.com/wp-content/uploads/2024/04/FDA-1.png",
    "/halal.png",
  ];

  return (
    <section className="py-10 ">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold 	">We Are Certified</h2>
        <p className="text-lg text-gray-600 mt-2">
          Globally recognized certifications ensuring quality, safety, and compliance.
        </p>
      </div>

      <div className="mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 items-center">
          {[...certs, ...certs].map((src, index) => (
            <div key={index} className="relative h-24 w-40 flex-shrink-0">
              <Image
                src={src}
                alt={`cert-${index}`}
                fill
                className="object-contain mix-blend-multiply pointer-events-none select-none"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
