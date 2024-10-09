import React from 'react'
import { ProductCard } from "../../../components/Element/ProductCard"
import { useFetch } from '../../../hooks/useFetch'
import { featured_products } from '../../../assets/db'

// Don't have custom api
const [data, loading, error] = [featured_products, false, ""]

export const FeaturedProducts = () => {

  // Can't call custom API right now.
  //const { data, loading, error } = useFetch("http://localhost:3000/featured_products")

  function render() {
    if (data) {
      return data.map(product => <ProductCard key={product.id} product={product} />)
    } else if (loading) {
      return <div>Loading Loading Loading</div>
    } else {
      return <div>Error Error Error</div>
    }
  }

  return (
    <section className='mt-14 '>
      <h1 className='text-3xl font-semibold dark:text-slate-100 mb-5 underline underline-offset-4'>Featured Courses</h1>
      <div className='flex justify-center flex-wrap'>
        {/*Product Card*/}
        {render()}
      </div>
    </section>
  )
}
