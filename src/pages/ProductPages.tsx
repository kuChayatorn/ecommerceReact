import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';


const ProductPages = () => {
    const { id } = useParams();
    return (
        <div>
            <Nav />
            <div className='flex flex-row py-10'>
                <div className='flex flex-col px-10 lg:p-20  cursor-pointer gap-4 basis-1/2' >
                    <img src="https://picsum.photos/200/300" alt="Image products" />
                    <img src="https://picsum.photos/200/300" alt="Image products" />
                    <img src="https://picsum.photos/200/300" alt="Image products" />
                    <img src="https://picsum.photos/200/300" alt="Image products" />
                    <img src="https://picsum.photos/200/300" alt="Image products" />
                </div>
                <div className='flex flex-col basis-1/2 px-4 sticky top-20'>
                    <p className='font-bold text-3xl'>Product name</p>
                    <p className='text-xl text-gray-700'>$200 USD</p>
                    <p className='text-sm text-gray-700'>size</p>
                    <form className='flex flex-col w-full' action="" onSubmit={(e) => { e.preventDefault(); console.log(e) }}>
                        <div className='flex flex-row gap-4'>
                            <label className='flex items-center gap-2'>
                                <input type="radio" className='accent-fuchsia-950' name="size" value="S" />
                                <span className='text-sm text-gray-700'>S</span>
                            </label>
                            <label className='flex items-center gap-2'>
                                <input type="radio" className='accent-fuchsia-950' name="size" value="M" />
                                <span className='text-sm text-gray-700'>M</span>
                            </label>
                            <label className='flex items-center gap-2'>
                                <input type="radio" className='accent-fuchsia-950' name="size" value="L" />
                                <span className='text-sm text-gray-700'>L</span>
                            </label>
                            <label className='flex items-center gap-2'>
                                <input type="radio" className='accent-fuchsia-950' name="size" value="XL" />
                                <span className='text-sm text-gray-700'>XL</span>
                            </label>
                        </div>
                        <p>Quantity</p>
                        <div className='flex flex-row gap-4'>
                            <label className='flex items-center border border-fuchsia-950 p-3 gap-4'>
                                <p className='cursor-pointer'>-</p>
                                <p className='cursor-pointer'>1</p>
                                <p className='cursor-pointer'>+</p>
                            </label>
                        </div>
                        <button type="submit" className='bg-fuchsia-950 text-white p-3 mt-4 '>Add to cart</button>
                    </form>
                    <p className='text-sm text-gray-700'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus incidunt obcaecati iusto fugiat aliquam? Numquam soluta debitis, aliquam amet fuga aperiam quidem esse eius ut alias voluptate? A, atque?
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPages