import { Star } from 'lucide-react';

export function StarRating({ rating, className = '' }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-current text-gold-400' : 'text-gray-400'}`}
        />
      ))}
    </div>
  );
}
