"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">B Capital Hotel</h2>
          <p className="text-sm leading-relaxed text-gray-100">
            Experience luxury, comfort, and world-class hospitality in the heart of Addis Ababa. 
            Book your stay, dine in style, and enjoy our premium facilities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-300 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-blue-300 transition-colors duration-300">About Us</Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-blue-300 transition-colors duration-300">Contact</Link>
            </li>
            <li>
              <Link href="/Events" className="hover:text-blue-300 transition-colors duration-300">News & Events</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/Rooms" className="hover:text-blue-300 transition-colors duration-300">Room Booking</Link>
            </li>
            <li>
              <Link href="/Restaurant" className="hover:text-blue-300 transition-colors duration-300">Table Booking</Link>
            </li>
            <li>
              <Link href="/booking/gym" className="hover:text-blue-300 transition-colors duration-300">Gym Booking</Link>
            </li>
            <li>
              <Link href="/spa" className="hover:text-blue-300 transition-colors duration-300">Spa & Wellness</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2 text-gray-100">
            <li>Email: <a href="mailto:reservations@bcapitalhotel.com" className="hover:text-blue-300 transition-colors duration-300">reservations@bcapitalhotel.com</a></li>
            <li>Phone: <a href="tel:+251900000000" className="hover:text-blue-300 transition-colors duration-300">+251-900-000-000</a></li>
            <li>Dire Dawa, Ethiopia</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 border-t border-blue-400 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} B Capital Hotel. All rights reserved.
      </div>
    </footer>
  );
}
