'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-8 pb-4 px-4 md:pt-12 md:pb-6 md:px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-y-0 md:gap-10 text-center md:text-left">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Link href="/">
            <Image
              src="/nutrix.png"
              alt="Mr Flakes Nutrix Logo"
              width={120}
              height={40}
              className="mb-2 md:mb-4"
              priority
            />
          </Link>
          <p className="text-sm leading-snug max-w-xs">
            There is no risk-free trading, but with Mr. Flakes Nutrix, you move smarter.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-md font-semibold">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">About Us</Link></li>
            <li><Link href="/" className="hover:underline">Products</Link></li>
            <li><Link href="/" className="hover:underline">Contact</Link></li>
            <li><Link href="/" className="hover:underline">Shop</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <h4 className="text-md font-semibold">Contact</h4>
          <p className="text-sm">📧 support@mrflakesnutrix.com</p>
          <p className="text-sm">📞 +91 98765 43210</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="text-md font-semibold">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-gray-600 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-blue-700" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-6 pt-4 text-center text-xs text-gray-500">
        © 2025 Mr Flakes Nutrix Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
