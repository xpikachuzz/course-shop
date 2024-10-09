import { useSelector } from "react-redux";
import { CartCard } from "./CartCard"
import { useTitle } from "../../../hooks/useTitle";

export const CartList = () => {
  const cartList = useSelector((state) => state.cartState.products);
  useTitle(`(${cartList.length}) Cart`)

  return (
    <div className="flex flex-col justify-center items-center">
      {
        cartList.map(product => <CartCard key={product.id} product={product} />)
      }
    </div>
  )
}
