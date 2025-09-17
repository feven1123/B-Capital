"use client";

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const menuSections = [
  {
    title: "Appetizers",
    items: [
      { name: "Grilled Prawns", description: "Fresh prawns grilled to perfection with herbs and spices", price: "$18", featured: true },
      { name: "Chicken Wings", description: "Crispy wings served with our signature sauce", price: "$14" },
      { name: "Vegetable Spring Rolls", description: "Fresh vegetables wrapped in crispy pastry", price: "$12" },
    ],
  },
  {
    title: "Main Courses",
    items: [
      { name: "Signature Chicken Platter", description: "Our famous chicken dish served with rice and vegetables", price: "$28", featured: true },
      { name: "Grilled Salmon", description: "Fresh Atlantic salmon with seasonal vegetables", price: "$32" },
      { name: "Beef Tenderloin", description: "Premium cut beef cooked to your preference", price: "$38" },
      { name: "Vegetarian Pasta", description: "Fresh pasta with seasonal vegetables and herbs", price: "$22" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: "$12" },
      { name: "Fresh Fruit Tart", description: "Seasonal fruits on vanilla custard base", price: "$10" },
      { name: "Ice Cream Selection", description: "Choice of vanilla, chocolate, or strawberry", price: "$8" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Fresh Juices", description: "Orange, apple, or mixed fruit juice", price: "$6" },
      { name: "Coffee & Tea", description: "Premium coffee or selection of teas", price: "$4" },
      { name: "Soft Drinks", description: "Coca-Cola, Sprite, or local beverages", price: "$3" },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/food-platter.jpg" alt="Signature Dish" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 opacity-0 animate-fadeInSlide">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl text-white leading-relaxed opacity-0 animate-fadeInSlide delay-200">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Introduction */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Culinary Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our menu features a delightful blend of local and international cuisine, prepared by our experienced chefs
            using only the freshest ingredients. Each dish is crafted with care to provide you with an unforgettable
            dining experience.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {menuSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground text-center">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                          {item.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                        </div>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">Special Dietary Requirements</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We are happy to accommodate special dietary requirements including vegetarian, vegan, gluten-free, and other
            dietary restrictions. Please inform our staff when making your reservation or placing your order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-foreground">Vegetarian Options</h3>
              <p className="text-sm text-muted-foreground">Fresh and flavorful plant-based dishes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="font-semibold text-foreground">Gluten-Free</h3>
              <p className="text-sm text-muted-foreground">Carefully prepared gluten-free alternatives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="font-semibold text-foreground">Healthy Choices</h3>
              <p className="text-sm text-muted-foreground">Nutritious options for health-conscious diners</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes fadeInSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInSlide {
          animation: fadeInSlide 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  )
}
