import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export default function StarRating({ rating, maxRating = 5, size = 16 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-[#C9A84C] text-[#C9A84C]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}
