"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const galleryImages = [
  { src: "/images/hotel-room-1.jpg", alt: "Deluxe Room", category: "Rooms" },
  { src: "/images/hotel-room-2.jpg", alt: "Executive Suite", category: "Rooms" },
  { src: "/images/hotel-room-3.jpg", alt: "Deluxe Room", category: "Rooms" },
  { src: "/images/restaurant-1.jpg", alt: "Restaurant Dining Area", category: "Restaurant" },
  { src: "/images/restaurant-2.jpg", alt: "Restaurant Interior", category: "Restaurant" },
  { src: "/images/food-platter.jpg", alt: "Signature Dish", category: "Restaurant" },
  { src: "/images/event-hall.jpg", alt: "Event Hall", category: "Meeting Hall" },
  { src: "/images/meeting-hall.jpg", alt: "Meeting Hall", category: "Meeting Hall" },
  { src: "/images/meeting-hall-2.jpg", alt: "Meeting Hall", category: "Meeting Hall" },
  { src: "/images/hotel-exterior-3.jpg", alt: "Hotel Exterior", category: "Outdoor" },
  { src: "/images/hotel-exterior-4.jpg", alt: "Hotel Exterior", category: "Outdoor" },
  { src: "/images/hotel-exterior-5.jpg", alt: "Hotel Front View", category: "Outdoor" },
];

const categories = ["Rooms", "Restaurant", "Meeting Hall", "Outdoor"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Rooms");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hotel-room-1.jpg"
            alt="Hotel Gallery Background"
            fill
            className="object-cover scale-110 brightness-75 animate-zoomSlow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white animate-fade-in">
            B Capital Hotel Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
            Experience luxury through our curated collection of rooms, dining areas, and facilities.
          </p>
        </div>
      </section>

      {/* Category Buttons */}
      <section className="py-10 px-4 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-xl ring-2 ring-blue-400 scale-110"
                  : "bg-card text-muted-foreground hover:bg-blue-600 hover:text-white hover:scale-105 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-4xl font-bold text-foreground mb-2 drop-shadow-md">{activeCategory}</h2>
            <p className="text-muted-foreground text-lg">
              {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"} in this category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl border border-gray-200 cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
                whileHover={{ scale: 1.08, rotate: 1 }}
                onClick={() => setLightboxImage(img.src)}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white text-xl font-bold drop-shadow-md">{img.alt}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              src={lightboxImage}
              alt="Enlarged"
              className="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      {/* Tailwind-style animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
