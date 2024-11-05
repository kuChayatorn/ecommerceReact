import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Nav from './components/Nav';
import ProductPages from './pages/ProductPages';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<ProductPages id={window.location.pathname.split('/')[2]} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
