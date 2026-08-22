import React, { useState, useMemo, useRef } from 'react';
import type { Product } from './types/product';
import { products } from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import SortControl from './components/SortControl';
import type { SortOrder } from './components/SortControl';
import ProductGrid from './components/ProductGrid';
import Toast from './components/Toast';
import './App.css';

/** App component managing sorting state, calculating sorted products, toast notifications, and rendering semantic layout. */
export default function App(): React.ReactElement {
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sortedProducts = useMemo<Product[]>(() => {
    const copy = [...products];
    if (sortOrder === 'low-high') return copy.sort((a, b) => a.price - b.price);
    if (sortOrder === 'high-low') return copy.sort((a, b) => b.price - a.price);
    return copy;
  }, [sortOrder]);

  const handleAddToCart = (product: Product): void => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setToastMessage(`Added "${product.title}" to cart!`);
    timerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <section className="controls-section">
          <h2 className="section-title">All Products</h2>
          <SortControl value={sortOrder} onSortChange={setSortOrder} />
        </section>
        <ProductGrid products={sortedProducts} onAddToCart={handleAddToCart} />
      </main>
      <Footer />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
