import {Money} from '@shopify/hydrogen';

/**
 * @param {{
 *   price?: MoneyV2;
 *   compareAtPrice?: MoneyV2 | null;
 * }}
 */
export function ProductPrice({price, compareAtPrice}) {
  return (
    <div className="product-price">
      {compareAtPrice ? (
        <div className="product-price-on-sale">
          <s>
            <Money data={compareAtPrice} />
          </s>
          <span className='absolute border-2 border-red-500 text-red-500 px-2 py-1 text-sm font-bold rounded-full top-2 left-2'>On Sale!</span>
          {price ? <Money  className='text-red-500 font-bold' data={price} /> : null}
        </div>
      ) : price ? (
        <Money data={price} />
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}

/** @typedef {import('@shopify/hydrogen/storefront-api-types').MoneyV2} MoneyV2 */
