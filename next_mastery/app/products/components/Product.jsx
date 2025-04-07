import React from 'react'
import Link from 'next/link';
const Product = () => {
    const products = [
        { id: 1, title: "phones" },
        { id: 2, title: "laptops" },
        { id: 3, title: "ipad" },
      ];
  return (
    <div>
       {products.map((product) => (
        <ul key={product.id}>
            <li>
              <Link href={`/products/${product.title}`}>{product.title}</Link>
            </li>
          </ul>
      ))}
    </div>
  )
}

export default Product
