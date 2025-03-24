import { Image } from '@shopify/hydrogen';
import { useState } from 'react'
/**
 * @param {{
 *   image: ProductVariantFragment['image'];
 * }}
 */
export function ProductImage({ image, hoveredImage }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const primaryImage = image ? image.url : hoveredImage.node.src;

  if (!image) {
    return <div className="product-image" />;
  }
  return (
    <div className="product-image p-4 border rounded-lg shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isHovered && primaryImage ? hoveredImage.node.src : primaryImage}
        alt={isHovered && primaryImage ? hoveredImage.node.altText : image.altText}
        className='max-h-[300px] object-cover'
      />
    </div>
  );
}

/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */
