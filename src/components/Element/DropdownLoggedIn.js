import { useDispatch, useSelector } from "react-redux";
import { email as emailSet } from "../../store/loginSlice"

export const DropdownLoggedIn = () => {
  const email = useSelector((state) => state.loginState.email);
  const dispatch = useDispatch()

  function logOutHandler() {
    dispatch(emailSet(false))
  }

  return (
    <div className='select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'>
      <div className="py-2 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{email}</div>
      </div>
      <div className="py-1">
        <span onClick={() => logOutHandler()} className="cursor-pointer block py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
      </div>
    </div>
  )
}
