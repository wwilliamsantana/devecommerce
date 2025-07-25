import { ImageResponse } from 'next/og'
import { api } from "@/data/api";
import { env } from '../../../../../env'

import { ProductProps } from '@/data/types/product'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export async function getProduct(slug: string): Promise<ProductProps> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60 * 24 // 1 day
    }
  })
  const product = response.json()

  return product
}



export default async function Image({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)
  const productImageURL = new URL(product.image, env.API_BASE_URL).toString()

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <img src={productImageURL} alt="" style={{ width: "100%" }} />
      </div>
    ),

    {

      ...size,

    }
  )
}