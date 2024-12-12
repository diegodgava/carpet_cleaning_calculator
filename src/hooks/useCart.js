import { useState } from "react";
import prices from "./config/prices.json";  // Supondo que o arquivo de preços esteja aqui

export const useCart = () => {
  const [cart, setCart] = useState({
    clean: { room: 0, bath: 0, entry: 0, staircase: 0 },
    protect: { room: 0, bath: 0, entry: 0, staircase: 0 },
    deodorize: { room: 0, bath: 0, entry: 0, staircase: 0 },
  });

  const updateCart = (service, area, amount) => {
    setCart((prevCart) => ({
      ...prevCart,
      [service]: {
        ...prevCart[service],
        [area]: Math.max(0, prevCart[service][area] + amount), // Não permite valores negativos
      },
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(cart).forEach((service) => {
      Object.keys(cart[service]).forEach((area) => {
        total += cart[service][area] * prices.services[service][area];
      });
    });
    return total;
  };

  return { cart, updateCart, calculateTotal };
};
