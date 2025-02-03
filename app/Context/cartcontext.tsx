// // /context/CartContext.js

// import React, { createContext, useContext, useState } from "react";

// // Cart Context Setup
// const CartContext = createContext();

// // Hook to access cart
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // CartProvider: Wrap your app with this to make cart state available globally
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]); // Store cart items

//   // Function to add items to the cart
//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
