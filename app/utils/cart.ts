// /utils/cart.ts

import { menu } from "@/types/menu"; // Import your menu type

export const addToCart = (menuItem: menu) => {
    const cart: menu[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProductIndex = cart.findIndex(item => item._id === menuItem._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1; // Increase inventory if already in cart
    } else {
        cart.push({ ...menuItem, inventory: 1 }); // Add new item to cart
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
};

export const removeFromCart = (productId: string) => {
    let cart: menu[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== productId); // Remove item by ID
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: menu[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1) {
        cart[productIndex].inventory = quantity; // Update item quantity
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

export const getCartItems = (): menu[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]'); // Return cart items
};
