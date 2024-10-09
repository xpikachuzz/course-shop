import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sort_by, rating as rating_set, only_in_stock, best_seller, clear_filter } from '../../../store/filterSlice'



export const Filterbar = ({ setShowFilter }) => {
  const dispatch = useDispatch()
  const {
    onlyInStock,
    bestSellerOnly,
    sortBy,
    rating } = useSelector((state) => state.filterState)

  const handleSortBy = (e) => {
    dispatch(sort_by(e.target.value))
  }

  const handleRating = (e) => {
    dispatch(rating_set(e.target.value))
  }

  const handleOtherFilter = (e) => {
    if (e.target.value === "bestseller") {
      dispatch(best_seller(e.target.checked))
    } else if (e.target.value === "instock") {
      dispatch(only_in_stock(e.target.checked))
    }
  }

  return (
    <section className='fixed top-0 left-0 w-64 bottom-0 bg-gray-100 flex flex-col px-3 dark:bg-gray-900'>
      <div className='border-b border-black text-gray-600 px-1 py-3 flex flex-row justify-between font-bold'>
        <p className='dark:text-gray-100'>Filter</p>
        <button className='dark:text-gray-100' onClick={() => setShowFilter((showFilter) => !showFilter)}>x</button>
      </div>
      <div className='flex flex-col items-start pt-4'>
        <p className='font-bold'>Sort by</p>
        <div>
          <input onClick={handleSortBy} className="mr-1" type="radio" id="html" name="sort_by" value="lowtohigh" checked={(sortBy === "lowtohigh" ? true : false)} />
          <label htmlFor="html">LOW TO HIGH</label><br />
        </div>
        <div>
          <input onClick={handleSortBy} className="mr-1" type="radio" id="css" name="sort_by" value="hightolow" checked={(sortBy === "hightolow" ? true : false)} />
          <label htmlFor="css">HIGH TO LOW</label><br />
        </div>
      </div>

      <div className='flex flex-col items-start pt-4'>
        <p className='font-bold'>Rating</p>
        <div>
          <input onClick={handleRating} className="mr-1" type="radio" id="html" name="rating" value="4STARSABOVE" checked={(rating === "4STARSABOVE" ? true : false)} />
          <label htmlFor="html">4 Stars & Above</label><br />
        </div>
        <div>
          <input onClick={handleRating} className="mr-1" type="radio" id="css" name="rating" value="3STARSABOVE" checked={(rating === "3STARSABOVE" ? true : false)} />
          <label htmlFor="css">3 Stars & Above</label><br />
        </div>
        <div>
          <input onClick={handleRating} className="mr-1" type="radio" id="css" name="rating" value="2STARSABOVE" checked={(rating === "2STARSABOVE" ? true : false)} />
          <label htmlFor="css">2 Stars & Above</label><br />
        </div>
        <div>
          <input onClick={handleRating} className="mr-1" type="radio" id="css" name="rating" value="1STARSABOVE" checked={(rating === "1STARSABOVE" ? true : false)} />
          <label htmlFor="css">1 Stars & Above</label><br />
        </div>
      </div>

      <div className='flex flex-col items-start pt-4'>
        <p className='font-bold'>Other Filters</p>
        <div>
          <input onClick={handleOtherFilter} className="mr-1" type="checkbox" id="html" name="othr" value="bestseller" checked={bestSellerOnly} />
          <label htmlFor="html">Best Seller Only</label><br />
        </div>
        <div>
          <input onClick={handleOtherFilter} className="mr-1" type="checkbox" id="css" name="othr" value="instock" checked={onlyInStock} />
          <label htmlFor="css">INSTOCK Only</label><br />
        </div>
      </div>
      <button onClick={() => dispatch(clear_filter())} className='border rounded-md bg-slate-100 dark:bg-slate-600 py-2 mt-3'>Clear Filter</button>
    </section>
  )
}
