'use client';

import { LocalizedStringObject } from '@/lib/i18n-config';
import { createContext, useEffect, useReducer, useState } from 'react';

export interface CartItem {
    name: LocalizedStringObject;
    price: number;
}
function cloneItem(item: CartItem) {
    return { ...item };
}

export type CartAction = {
    type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'SET_CART';
    payload: CartItem | CartItem[];
};
