"use client"

import { createContext, ReactNode, useState } from "react";

interface CartItem {
  productId: string
  quantity: number
}


interface CartContextProps {
  items: CartItem[]
  addCart: (productId: string) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])


  function addCart(productId: string) {
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