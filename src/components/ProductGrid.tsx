import React from 'react';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';

export interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

/** ProductGrid component mapping product items to ProductCard components within a responsive container. */
export default function ProductGrid({ products, onAddToCart }: ProductGridProps): React.ReactElement {
  return (
    <section className="product-grid" aria-label="Products Collection">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}
