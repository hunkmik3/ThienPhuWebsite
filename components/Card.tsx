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
      className={`glass-card rounded-2xl overflow-hidden hover-lift group relative ${className}`}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
        <div className="absolute inset-0 shimmer"></div>
      </div>
      
      {image && (
        <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 via-primary-600/0 to-secondary-600/0 group-hover:from-primary-600/20 group-hover:via-primary-600/10 group-hover:to-secondary-600/20 transition-all duration-500"></div>
        </div>
      )}
      <div className="p-8 relative z-10">
        {title && (
          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 mb-4 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        )}
        {children}
      </div>
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-clip-border" style={{
          maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor'
        }}></div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}

