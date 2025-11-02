import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  imageAlt = "",
  href,
  children,
  className = "",
}: CardProps) {
  const cardContent = (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover-lift group ${className}`}
    >
      {image && (
        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}

