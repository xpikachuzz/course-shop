import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { remove_product, add_product } from "../../store/cartSlice"
import { useTitle } from '../../hooks/useTitle'
import { useSelector, useDispatch } from 'react-redux'
import { products } from '../../assets/db'

export const ProductDetail = () => {
  const { id } = useParams()
  const [data, loading, error] = [products.find(prod => Number(prod.id) === Number(id)), false, null]
  //const { data, loading, error } = useFetch(`http://localhost:3000/products/id=${id}`)
  const [title, setTitle] = useState("Details")

  const cartList = useSelector((state) => state.cartState.products);
  const [inCart, setInCart] = useState(cartList.reduce((acc, prod) => (Number(prod.id) === Number(id)) || acc, false))
  const dispatch = useDispatch();

  useTitle(title)

  function addToCart() {
    dispatch(add_product(data))
    setInCart(true)
  }

  function removeFromCart() {
    dispatch(remove_product(data))
    setInCart(false)
  }

  useEffect(() => {
    setTitle(data ? (data.name) : "Details")
  }, [data])


  if (loading) {
    return <div>Loading Loading Loading</div>
  }

  if (error) {
    return <div> Error Error Error Error</div>
  }

  const { name, overview, long_description, price, poster, rating, in_stock, size } = data


  return (
    <section className='px-5 '>
      <div className='flex flex-col justify-center'>
        <h1 className='text-3xl font-bold mt-10'>{name}</h1>
        <p className='mt-4'>{overview}</p>
        <div className='flex flex-row mt-8'>
          <div className='w-1/2'>
            <img className='w-full rounded-md' src={poster} alt='poster' />
          </div>
          <div className='flex flex-col w-1/2 items-start justify-start ml-6'>
            <h2 className='text-2xl font-bold'>${price}</h2>
            <p className="text-left mt-4">{"⭐".repeat(rating)}{"☆".repeat(5 - rating)}</p>
            <div className='flex flex-row mt-4'>
              <p className='mr-2 text-orange-400 bg-orange-100 px-3 py-0.5 text-sm rounded-md border-orange-400 border'>Best Seller</p>
              <p className='mr-2 text-green-400 bg-green-100 px-3 py-0.5 text-sm rounded-md border-green-400 border'>{in_stock ? "In Stock" : "No Stock"}</p>
              <p className='mr-2 text-blue-400 bg-blue-100 px-3 py-0.5 text-sm rounded-md border-blue-400 border'>{size} MB</p>
            </div>
            {!inCart ? <button onClick={addToCart} className="bg-blue-600 mt-3 p-2.5 rounded-md text-white">Add To Cart +</button> :
              <button onClick={removeFromCart} className="bg-red-600 p-2.5 mt-3 rounded-md text-white">Remove 🗑️</button>}
            <p className='text-left mt-4'>{long_description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
