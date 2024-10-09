import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset_cart } from "../../store/cartSlice"

export const SuccessfulPurchase = () => {
  const { email } = useSelector((state) => state.loginState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset_cart())
  })

  return (
    <div className="my-20 text-3xl">
      Successful Purchase by {email}!!
    </div>
  )
}
