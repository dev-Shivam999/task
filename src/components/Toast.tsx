import React from 'react';

export interface ToastProps {
  message: string | null;
  onClose: () => void;
}

/** Toast component displaying a side notification when an item is added to the cart. */
export default function Toast({ message, onClose }: ToastProps): React.ReactElement | null {
  if (!message) return null;

  return (
    <div className="toast-notification" role="alert">
      <div className="toast-content">
        <span className="toast-icon">🛒</span>
        <span className="toast-message">{message}</span>
      </div>
      <button type="button" className="toast-close" onClick={onClose} aria-label="Close notification">
        &times;
      </button>
    </div>
  );
}
