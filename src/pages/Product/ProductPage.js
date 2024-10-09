import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../components/Element/ProductCard'
import { Filterbar } from "./components/Filterbar"
import { useFetch } from '../../hooks/useFetch'
import { useLocation } from "react-router-dom"
import { DataHandler } from '../../util/DataHandler'
import { useTitle } from '../../hooks/useTitle'
import { useDispatch, useSelector } from 'react-redux'
import { product_list } from '../../store/filterSlice'
import { products } from '../../assets/db'

const [data, loading, error] = [products, false, ""]

export const ProductPage = () => {
  const dispatch = useDispatch()
  const [showFilter, setShowFilter] = useState(false)

  const state = useSelector((state) => state.filterState)

  // name_like=""
  const search = useLocation().search
  const name_like = new URLSearchParams(search).get("q")

  const [url, setUrl] = useState(`http://localhost:3000/products`)

  // I would call API if I had a custom API
  //const { data, loading, error } = useFetch(url)

  useTitle("Products")

  useEffect(() => {
    // name_like=""
    const named_data = (data && name_like) ? DataHandler.q_name_like(data, name_like) : data
    let { products } = (data) ? DataHandler.filteredProduct({ ...state, products: named_data }) : []
    dispatch(product_list(products))
  }, [data, name_like, state.sortBy, state.onlyInStock, state.bestSellerOnly, state.rating])

  let { products } = state

  useEffect(() => {
  }, [state, dispatch])


  function render() {
    if (state.products) {
      return state.products.map(product => <ProductCard key={product.id} product={product} />)
    } else if (loading) {
      return <div>Loading Loading Loading</div>
    } else {
      return <div>Error Error Error</div>
    }
  }

  return (
    <main>
      <section className='my-5'>
        <div className='my-5 flex justify-between'>
          <span className='text-2xl font-semibold dark:text-slate-100 mb-5'>All eBooks ({products && products.length})</span>
          <span>
            <button onClick={() => setShowFilter(!showFilter)} className='font-extrabold text-2xl bg-gray-200 dark:bg-gray-950 px-3 rounded'>
              ⫶
            </button>
          </span>
        </div>

        <div className='flex flex-wrap justify-center lg:flex-row'>
          {
            render()
          }
        </div>
      </section>
      {showFilter && <Filterbar setShowFilter={setShowFilter} />}
    </main>
  )
}
