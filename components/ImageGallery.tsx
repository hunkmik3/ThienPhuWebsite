"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      )}
      <div className="mb-4">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
          <Image
            src={images[selectedImage]}
            alt={`Image ${selectedImage + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                index === selectedImage
                  ? "ring-4 ring-primary-500 scale-105"
                  : "hover:opacity-75"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

