import React from 'react';
import type { Product } from '../types/product';

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

/** ProductCard component rendering product image with lazy loading, title, rating, price, and add-to-cart button. */
export default function ProductCard({ product, onAddToCart }: ProductCardProps): React.ReactElement {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.currentTarget;
    target.onerror = null;
    target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23e31e24"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-family="sans-serif" font-size="28" font-weight="bold">${encodeURIComponent(product.title.charAt(0).toUpperCase())}</text></svg>`;
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(product.price);

  const roundedRating = Math.round(product.rating);
  const filledStars = '★'.repeat(roundedRating);
  const emptyStars = '☆'.repeat(5 - roundedRating);

  const handleAddToCart = (): void => {
    console.log(`Add to cart clicked for product ID ${product.id}: ${product.title}`);
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <article className="product-card">
      <div className="card-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
          onError={handleImageError}
        />
      </div>
      <div className="card-body">
        <h3 className="product-title">{product.title}</h3>
        <div className="rating-row" aria-label={`Rating: ${product.rating} out of 5 stars`}>
          <span className="star-icons">
            <span className="filled-stars">{filledStars}</span>
            <span className="empty-stars">{emptyStars}</span>
          </span>
          <span className="rating-value">{product.rating}</span>
        </div>
        <div className="card-footer">
          <span className="product-price">{formattedPrice}</span>
          <button
            type="button"
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
