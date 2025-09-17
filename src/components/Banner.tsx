"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/hotel-room-2.jpg",
  "/images/event-hall.jpg",
  "/images/meeting-hall.jpg",
  "/images/hotel-room-3.jpg",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Slides */}
      <div className="w-full h-full relative">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Overlay + Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl animate-fadeInDown">
                Welcome to B-Capital Hotel
              </h1>
              <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl animate-fadeInUp">
                Where luxury meets comfort. Experience unparalleled hospitality
                in the heart of the city.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-fadeInUp">
                <Link
                  href="/Book"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition-transform transition-colors duration-300"
                >
                  Book Your Stay
                </Link>
                <Link
                  href="/Rooms"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform transition-colors duration-300"
                >
                  Explore Rooms
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            } transition-colors`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
