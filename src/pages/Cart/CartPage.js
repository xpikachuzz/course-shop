import React from 'react'
import { CartList } from './components/CartList'
import { useSelector } from 'react-redux';
import { reset_cart } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import Secure from '../../security/Secure';

export const CartPage = () => {
  const { cost, products } = useSelector((state) => state.cartState);
  const loginState = useSelector((state) => state.loginState.email)



  return (
    <section className='py-8  flex flex-col items-center'>
      <h1 className='text-4xl mb-5 font-bold underline underline-offset-4'>Cart | ${cost}</h1>
      {!loginState && <><div className='border border-dashed border-red-800 mb-4 w-full sm:w-1/2'>
        <h1 className='text-4xl font-semibold mb-2 text-red-500'>Login first</h1>
        <p className='text-red-500 mb-5'>Log in by clicking on the profile icon in the top-right</p>
      </div>
        <Secure />
      </>
      }
      <CartList />
      {products.length && ((loginState) ? (
        <Link to={"/successful_purchase"} className={`bg-blue-500 p-5 py-3 rounded-md`} onClick={reset_cart}>
          Purchase
        </Link>) : (<div className={`bg-blue-500 p-5 py-3 rounded-md cursor-not-allowed`} >
          Purchase
        </div>))
      }
    </section>
  )
}
