import { Routes, Route } from "react-router-dom"
import { HomePage, ProductPage, ProductDetail, CartPage, SuccessfulPurchase } from "../pages"
import { Login } from "../pages/Micelaneous/Login"
import { useSelector } from "react-redux";

export const AllRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/successful_purchase" element={<SuccessfulPurchase />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}
