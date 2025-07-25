import Header from "@/components/header";
import { ReactNode } from "react";



export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-h-screen w-full max-w-[1600px] grid grid-rows-app gap-5 px-8 pt-8">
      <Header />
      {children}
    </div>
  )
}