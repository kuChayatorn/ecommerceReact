import React from 'react'

const ProductCard = () => {
    const openProductInfoHandler = () => {
        window.location.href = '/products/1'
    }
    return (
        <div className='flex flex-col p-10 cursor-pointer' onClick={openProductInfoHandler}>
            <img src="https://picsum.photos/200/300" alt="Image products" />
            <p>Product name</p>
            <p>$200 USD</p>
        </div>
    )
}

export default ProductCard