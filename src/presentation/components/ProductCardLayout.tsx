import { Product } from '@/domain/entities/product'
import React from 'react'

const ProductCardLayout = (products: Product[]) => {
  return (
    <>
     {products.map((product) => <div key={product.name}>{product.name   }</div>)}
    </>
  )
}

export default ProductCardLayout