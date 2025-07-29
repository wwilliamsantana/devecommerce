"use client"

import { useCart } from "@/context/cart-context"

export function ButtonAddCart(productId: number) {
  const { addCart } = useCart()

  function handlerAddCart() {
    addCart(productId)
  }


  return (
    <button type="button" onClick={handlerAddCart} className="mt-8 flex h-12 items-center justify-center rounded-full cursor-pointer bg-emerald-700 font-semibold text-white">Adicionar ao carrinho</button>
  )
}