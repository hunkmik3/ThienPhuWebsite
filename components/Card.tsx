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
      className={`bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group ${className}`}
    >
      {image && (
        <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-8">
        {title && (
          <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            {description}
          </p>
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

