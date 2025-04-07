import React from 'react'
import Product from "./components/Product"

const layout = ({children}) => {

  return (
    <div>
    <Product/>
      {children}
    </div>
  )
}

export default layout
