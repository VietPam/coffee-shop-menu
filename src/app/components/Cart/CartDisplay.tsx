'use client';

import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon';
import { useContext, useMemo, useRef } from 'react';
import Link from 'next/link';

export function CartDisplay() {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleAnimationEnd = useMemo(
        () => () => {
            buttonRef?.current?.classList.remove('animate-ping-once');
        },
        []
    );

    return (
        <Link
            className="btn-ghost btn-square btn relative mr-3"
            type="button"
            aria-label="Shopping cart"
            ref={buttonRef}
            onAnimationEnd={handleAnimationEnd}
            href={'/checkout'}
        >
            <div className="indicator absolute">
                <ShoppingCartIcon className="h-6 w-6" />
            </div>
        </Link>
    );
}
