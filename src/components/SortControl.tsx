import React from 'react';

export type SortOrder = 'none' | 'low-high' | 'high-low';

export interface SortControlProps {
  value: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

/** SortControl component rendering a controlled dropdown for product price sorting. */
export default function SortControl({ value, onSortChange }: SortControlProps): React.ReactElement {
  return (
    <div className="sort-control">
      <label htmlFor="sort-select" className="sort-label">
        Sort by:
      </label>
      <select
        id="sort-select"
        className="sort-select"
        value={value}
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
      >
        <option value="none">Sort Products</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>
    </div>
  );
}
