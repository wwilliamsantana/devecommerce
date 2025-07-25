"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextProps {
  items: CartItem[]
  addCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])


  function addCart(productId: number) {
    setCartItems(state => {
      const productInCart = state.some(item => item.productId === productId)

      if (productInCart) {
        return state.map(item => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }

    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addCart }}>
      {children}
    </CartContext.Provider>
  )
}


export const useCart = () => useContext(CartContext)