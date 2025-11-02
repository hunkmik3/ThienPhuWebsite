import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden";
  
  const variantClasses = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 border border-gray-900",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

