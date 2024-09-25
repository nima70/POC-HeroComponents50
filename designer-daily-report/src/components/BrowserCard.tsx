import React from "react";

// Define the types for the props
interface BrowserCardProps {
  logoSrc: string; // Source for the logo image (SVG)
  logoAlt: string; // Alt text for the logo
  title: string; // Title text
  reviewCount: number; // Number of reviews
  rating: number; // Rating out of 5
}

const BrowserCard: React.FC<BrowserCardProps> = ({
  logoSrc,
  logoAlt,
  title,
  reviewCount,
  rating,
}) => {
  const fullStars = Math.floor(rating); // Full stars (integer part)
  const hasHalfStar = rating % 1 >= 0.5; // Half star (if decimal part is 0.5)
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="not-prose flex flex-col md:flex-row  space-y-4 justify-left items-left md:justify-between items-center max-w-md w-full  p-4 bg-white rounded-lg shadow-lg ">
      {/* Logo and text section */}
      <div className="space-y-3 flex flex-col items-center md:items-start ">
        <div className="flex space-x-4 items-start">
          <img src={logoSrc} alt={logoAlt} className="w-6 h-6 object-contain" />
          <p className="text-[#7E7B8E] text-sm">{title}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">
            Reviewed by {reviewCount} users
          </p>
        </div>
      </div>

      {/* Stars and rating section */}
      <div className="flex flex-col w-full md:w-auto   space-y-2 md:space-y-0 md:flex-row items-center justify-center space-x-2 border py-2 px-3 rounded-full bg-[#F3F3F3]">
        {/* Stars */}
        <div
          className="flex space-x-1"
          aria-label={`Rating: ${rating} out of 5`}
        >
          {/* Full stars */}
          {Array.from({ length: fullStars }, (_, index) => (
            <svg
              key={`full-star-${index}`}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927a1 1 0 011.902 0l1.392 4.288a1 1 0 00.95.69h4.386a1 1 0 01.592 1.81l-3.548 2.58a1 1 0 00-.364 1.118l1.392 4.288a1 1 0 01-1.54 1.117l-3.548-2.58a1 1 0 00-1.176 0l-3.548 2.58a1 1 0 01-1.54-1.117l1.392-4.288a1 1 0 00-.364-1.118l-3.548-2.58a1 1 0 01.592-1.81h4.386a1 1 0 00.95-.69l1.392-4.288z" />
              {/* <path d="M9.049 2.927a1 1 0 011.902 0l1.392 4.288a1 1 0 00.95.69h4.386a1 1 0 01.592 1.81l-3.548 2.58a1 1 0 00-.364 1.118l1.392 4.288a1 1 0 01-1.54 1.117l-3.548-2.58a1 1 0 00-1.176 0l-3.548 2.58a1 1 0 01-1.54-1.117l1.392-4.288z" /> */}
            </svg>
          ))}
          {/* Half star */}
          {hasHalfStar && (
            <svg
              key="half-star"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <defs>
                <linearGradient id="halfGradient">
                  <stop offset="50%" stopColor="gold" />
                  <stop offset="50%" stopColor="#D1D5DB" />
                </linearGradient>
              </defs>
              <path
                fill="url(#halfGradient)"
                d="M9.049 2.927a1 1 0 011.902 0l1.392 4.288a1 1 0 00.95.69h4.386a1 1 0 01.592 1.81l-3.548 2.58a1 1 0 00-.364 1.118l1.392 4.288a1 1 0 01-1.54 1.117l-3.548-2.58a1 1 0 00-1.176 0l-3.548 2.58a1 1 0 01-1.54-1.117l1.392-4.288a1 1 0 00-.364-1.118l-3.548-2.58a1 1 0 01.592-1.81h4.386a1 1 0 00.95-.69l1.392-4.288z"
                // d="M9.049 2.927a1 1 0 011.902 0l1.392 4.288a1 1 0 00.95.69h4.386a1 1 0 01.592 1.81l-3.548 2.58a1 1 0 00-.364 1.118l1.392 4.288a1 1 0 01-1.54 1.117l-3.548-2.58a1 1 0 00-1.176 0L9.049 8.52V2.927z"
              />
            </svg>
          )}
          {/* Empty stars */}
          {Array.from({ length: emptyStars }, (_, index) => (
            <svg
              key={`empty-star-${index}`}
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927a1 1 0 011.902 0l1.392 4.288a1 1 0 00.95.69h4.386a1 1 0 01.592 1.81l-3.548 2.58a1 1 0 00-.364 1.118l1.392 4.288a1 1 0 01-1.54 1.117l-3.548-2.58a1 1 0 00-1.176 0l-3.548 2.58a1 1 0 01-1.54-1.117l1.392-4.288a1 1 0 00-.364-1.118l-3.548-2.58a1 1 0 01.592-1.81h4.386a1 1 0 00.95-.69l1.392-4.288z" />
            </svg>
          ))}
        </div>

        {/* Rating text */}
        <p className="text-xs font-semibold text-gray-700">
          {rating.toFixed(1)} out of 5
        </p>
      </div>
    </div>
  );
};

export default BrowserCard;
