import React from 'react';

export default function ProductCard({
  title,
  image,
  price,
  originalPrice,
  onAddToCart,
}) {
  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercent}%
          </span>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-xl font-bold text-gray-900">₹{price}</span>
            {hasDiscount && (
              <span className="ml-2 text-sm line-through text-gray-500">
                ₹{originalPrice}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={onAddToCart}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
