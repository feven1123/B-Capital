"use client";

import Image from "next/image";

const features = [
  {
    image: "/images/modern-hotel-wifi-lounge-area-with-people-using-la.jpg",
    title: "Free Wi-Fi",
    description: "High-speed internet access throughout the hotel for all guests.",
  },
  {
    image: "/images/prying room.jpg",
    title: "Muslim Prayer Room",
    description: "Quiet and dedicated Islamic prayer space available for travelers.",
  },
  {
    image: "/images/elegant-room-service-tray-with-gourmet-food-and-co.jpg",
    title: "24/7 Room Service",
    description: "Round-the-clock service to ensure your stay is comfortable.",
  },
  {
    image: "/images/gym.jpg",
    title: "Modern Fitness Center",
    description: "State-of-the-art gym facilities to keep you fit during your stay.",
  },
  {
    image: "/images/airport-shuttle.png",
    title: "Complimentary Airport Shuttle",
    description: "Free transportation to and from the airport for your convenience.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block mb-6">
          Why Choose B-Capital Hotel?
          <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-32 h-1 bg-blue-600 rounded-full animate-pulse"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-20 text-lg md:text-xl">
          Discover what makes B-Capital Hotel the perfect choice — comfort, convenience, and exceptional service.
        </p>

        {/* Fancy single-row flex */}
        <div className="flex flex-wrap justify-between gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-1 min-w-[180px] max-w-[calc(20%-12px)] p-6 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-transparent hover:border-blue-300 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 group flex flex-col justify-center items-center text-center"
            >
              <div className="mb-4 w-full h-40 relative overflow-hidden rounded-2xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional overlay for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
