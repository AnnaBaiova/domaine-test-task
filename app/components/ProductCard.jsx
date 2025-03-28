import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@remix-run/react';
import { AddToCartButton } from './AddToCartButton';
import { useAside } from './Aside';

export const ProductCard = (({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants.nodes[0]);
  const [imgSrc, setImgSrc] = useState(selectedVariant.image.url);
  const compareAtPrice = selectedVariant.compareAtPrice ? selectedVariant.compareAtPrice : { amount: '29.50', currencyCode: 'EUR' };

  useEffect(() => {
    setImgSrc(selectedVariant.image.url);
  }, [selectedVariant]);

  const handleMouseEnter = () => {
    setImgSrc(product.images.nodes.find(img => img.altText === `${selectedVariant?.image?.altText}-secondary`).url);
  };

  const handleMouseLeave = () => {
    setImgSrc(product.images.nodes.find(img => img.altText === `${selectedVariant?.image?.altText}`).url);
  };

  return (
    <div className="max-w-lg mx-auto">
      <Link
        key={product.id}
        className="recommended-product"
        to={`/products/${product.handle}`}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative border border-(--custom-grey) max-w-(--card-width) h-full max-h-(--card-height) rounded-lg overflow-hidden p-2">
          {compareAtPrice && (
            <span className="absolute top-2 left-2 text-(--custom-red) font-bold px-3 py-1 text-sm rounded-full border border-(--custom-red)">
              On Sale!
            </span>
          )}

          <img
            src={imgSrc}
            alt={selectedVariant.image.altText || product.title}
            className="w-full h-64 object-cover rounded-lg max-w-(--card-height)"
          />
        </div>
      </Link>
      <div className="flex gap-2 mt-4">
        {product.variants.nodes.map((variant) => (
          <button
            key={variant.id}
            className={`w-(--custom-width) h-(--custom-width) rounded-full ${selectedVariant.id === variant.id ? "border-black" : ""}`}
            style={{ backgroundColor: variant.title.toLowerCase() }}
            onClick={() => setSelectedVariant(variant)}
          />
        ))}
      </div>
      <p className="text-(--dark)">{product.vendor}</p>
      <Link
        key={product.id}
        className="recommended-product"
        to={`/products/${product.handle}`}
      >
        <p className="text-lg font-semibold text-(--navy) hover:underline cursor-pointer">
          {product.title}
        </p>
      </Link>
      <div className="flex items-center gap-2 mt-2">
        {compareAtPrice && (
          <span className="text-(--dark) line-through text-sm">
            €{compareAtPrice.amount}
          </span>
        )}
        <span className="text-(--custom-red) text-m font-semibold">
          €{selectedVariant.price.amount}
        </span>
      </div>
    </div>
  );
});
