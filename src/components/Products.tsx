import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    return (
        <div className=' grid grid-cols-2 lg:grid-cols-4 p-10 lg:px-20'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default Products