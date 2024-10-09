import { Link } from "react-router-dom"
import { remove_product, add_product } from "../../store/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"


export const ProductCard = ({ product }) => {
  const { id, name, overview, price, poster, rating, best_seller } = product
  const cartList = useSelector((state) => state.cartState.products);
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(cartList.reduce((acc, prod) => (Number(prod.id) === Number(id)) || acc, false))

  console.log(cartList)


  function addToCart() {
    dispatch(add_product(product))
    setInCart(true)
  }

  function removeFromCart() {
    dispatch(remove_product(product))
    setInCart(false)
  }


  return (
    <div key={id} className="flex flex-col m-3 max-w-sm border border-gray-200 shadow-md dark:bg-gray-800 dark:text-slate-100">
      <Link to={`/products/${id}`} className="flex flex-col">
        {best_seller && <span className="absolute m-1.5 ml-3 bg-orange-500 px-2 py-1 rounded-md">Best Seller</span>}
        <img className="" src={poster} alt="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40" />
      </Link>
      <div className="p-5 mt-1 flex flex-col justify-between h-full">
        <div>
          <Link to={`/products/${id}`}>
            <h1 className="text-2xl font-semibold text-left text-wrap">{name}</h1>
          </Link>
          <p className="text-left text-lg mt-3">{overview}</p>
        </div>
        <p className="text-left mt-4">{"⭐".repeat(rating)}{"☆".repeat(5 - rating)}</p>
        <div className="flex flex-row mt-3 justify-between items-center">
          <p className="text-3xl">${price}</p>
          {!inCart ? <button onClick={addToCart} className="bg-blue-600 p-2.5 rounded-md text-white">Add To Cart +</button> :
            <button onClick={removeFromCart} className="bg-red-600 p-2.5 rounded-md text-white">Remove 🗑️</button>}
        </div>
      </div>
    </div>
  )
}
