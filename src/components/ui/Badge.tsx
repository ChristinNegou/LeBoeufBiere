interface BadgeProps {
  children: React.ReactNode;
  variant?: "popular" | "new" | "vegetarian" | "glutenFree" | "default";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    popular: "bg-[#C9A84C] text-white",
    new: "bg-[#2C1810] text-white",
    vegetarian: "bg-green-600 text-white",
    glutenFree: "bg-blue-600 text-white",
    default: "bg-gray-200 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
