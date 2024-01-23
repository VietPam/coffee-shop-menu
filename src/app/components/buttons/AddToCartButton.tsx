'use client';

import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon';

export function AddToCartButton() {
    return (
        <button
            className="btn-success btn-square btn"
            title="Add to cart"
            type="button"
            onClick={()=>{}}
        >
            <ShoppingCartIcon className="absolute h-6 w-6" />
        </button>
    );
}
