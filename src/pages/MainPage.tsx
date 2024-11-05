import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Filter from '../components/Filter'
import Products from '../components/Products'

const MainPage = () => {
    return (
        <div>

            <Nav />
            <Filter />
            <Products />
            <Footer />
        </div>
    )
}

export default MainPage