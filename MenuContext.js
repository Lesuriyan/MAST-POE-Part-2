import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);

  // Add a menu item
  const addMenuItem = (item) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  // Remove a menu item
  const removeMenuItem = (id) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the average price
  const getAveragePrice = () => {
    if (menuItems.length === 0) return 0;
    const totalPrice = menuItems.reduce((sum, item) => sum + item.price, 0);
    return (totalPrice / menuItems.length).toFixed(2);
  };

  return (
    <MenuContext.Provider
      value={{ menuItems, addMenuItem, removeMenuItem, getAveragePrice }}
    >
      {children}
    </MenuContext.Provider>
  );
};