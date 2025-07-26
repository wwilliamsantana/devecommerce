import Link from "next/link";
import Image from "next/image";
import { ProductProps } from "@/data/types/product";
import { api } from "@/data/api";
import { redirect } from "next/navigation";

interface SearchProps {
  searchParams: {
    q: string
  }
}

export async function getProducts(slug: string): Promise<ProductProps[]> {
  const response = await api(`/products/search?q=${slug}`, {
    next: {
      revalidate: 60 * 60 * 24 // 1 day
    }
  })
  const product = response.json()

  return product
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect("/")
  }

  const products = await getProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">Resultado para: <span className="font-semibold">{query}</span></p>
      <div className="grid grid-cols-3 gap-6">

        {
          products.map(product => {
            return (
              <Link key={product.id} href={`/product/${product.slug}`} className="group rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end relative">
                <Image src={`${product.image}`} className="group-hover:scale-105 transition-transform duration-500 " width={480} height={480} quality={100} alt="" />

                <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                  <span className="text-sm truncate">{product.title}</span>
                  <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    })}
                  </span>

                </div>
              </Link>
            )
          })
        }



      </div>
    </div>
  );
}
