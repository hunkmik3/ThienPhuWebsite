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
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10 z-10"></div>
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover transition-transform duration-1000 scale-110"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-black/60 to-secondary-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`container mx-auto px-4 text-center text-white transition-all duration-700 ${
              index === currentSlide 
                ? "animate-fade-in-up opacity-100" 
                : "opacity-0"
            }`}>
              <div className="mb-6 inline-block animate-fade-in-up">
                <span className="inline-block px-6 py-3 glass-card rounded-full text-sm md:text-base font-semibold text-white shadow-xl border border-white/30">
                  <span className="inline-flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Giải pháp kính hàng đầu
                  </span>
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up [animation-delay:0.1s]">
                <span className="drop-shadow-2xl bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                  {slide.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto leading-relaxed font-light text-white/95 animate-fade-in-up [animation-delay:0.2s] drop-shadow-lg">
                {slide.subtitle}
              </p>
              <div className="animate-fade-in-up [animation-delay:0.3s] flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button href={slide.ctaLink} variant="primary" className="hover-glow px-8 py-4 text-lg shadow-2xl">
                  {slide.cta}
                </Button>
                <Button href="/contact" variant="outline" className="px-8 py-4 text-lg border-white/50 text-white hover:bg-white/10 backdrop-blur-sm">
                  Liên hệ ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide 
                ? "bg-white w-10 h-3 shadow-lg shadow-white/50" 
                : "bg-white/50 w-3 h-3 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

