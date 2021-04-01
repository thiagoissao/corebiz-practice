import React from 'react'
import ProductCard from './ProductCard'
import './ListProductCard.css'

const ListProductCard = ({ products }) => {
  return (
    <div className='List-product'>
      {products.map(product => (
        <div className='List-product-item' key={product.productId}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ListProductCard
