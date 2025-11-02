"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop",
    title: "Giải pháp kính cao cấp",
    subtitle: "Kính cường lực, kính hộp và các sản phẩm kính chất lượng cao",
    cta: "Xem sản phẩm",
    ctaLink: "/products",
  },
  {
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&h=1080&fit=crop",
    title: "Công nghệ tiên tiến",
    subtitle: "Nhà máy hiện đại với thiết bị công nghệ cao",
    cta: "Tìm hiểu thêm",
    ctaLink: "/capabilities",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
    title: "Dự án tiêu biểu",
    subtitle: "Hàng trăm dự án lớn đã được hoàn thành thành công",
    cta: "Xem dự án",
    ctaLink: "/projects",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className={`max-w-7xl mx-auto px-6 lg:px-8 w-full transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed">
                  {slide.subtitle}
                </p>
                <Button href={slide.ctaLink} variant="primary" className="px-8 py-3 text-base">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-12" 
                : "bg-white/40 w-8 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

