import React from 'react'
import { formatCurrency } from '../utils/formatters'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className='Card'>
      <img
        className="Card-image"
        alt='Corebiz'
        src={product.imageUrl}
        width={250}
        height={200}
      />
      <div className='Card-info'>
        <p>{product.productName}</p>
        <p>{`Avaliação: ${product.stars}`}</p>
        <p>{`Preço: ${formatCurrency(product.price)}`}</p>
        <button>
          COMPRAR
        </button>
      </div>
    </div>
  )
}

export default ProductCard
