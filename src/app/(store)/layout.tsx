import Header from "@/components/header";
import { CartProvider } from "@/context/cart-context";
import { ReactNode } from "react";



export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto max-h-screen w-full max-w-[1600px] grid grid-rows-app gap-5 px-8 pt-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}