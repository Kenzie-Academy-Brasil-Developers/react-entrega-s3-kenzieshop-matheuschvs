import { Route, Routes } from "react-router-dom"

import { Layout } from "../pages/Layout"
import { Products } from "../pages/Products"
import { Cart } from "../pages/Cart"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export { Router }
