import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { DropdownLoggedIn } from "../Element/DropdownLoggedIn"
import { DropdownLoggedOut } from "../Element/DropdownLoggedOut"
import { useSelector } from "react-redux"


export const Header = () => {
  const cartList = useSelector((state) => state.cartState.products);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("theme")) && true)
  const email = useSelector((state) => state.loginState.email);
  const [value, setValue] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const [showUser, setShowUser] = useState(false)

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])


  return (
    <header className="">
      <nav className=" border-gray-200 bg-slate-400 dark:bg-gray-900 border-b-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Course-Shop" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Course-Shop</span>
          </Link>
          <div className="relative flex items-center space-x-6 rtl:space-x-reverse">
            <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">{darkMode ? "☀️" : "🌙"}</span>
            <span className="cursor-pointer" onClick={() => setShowSearch(!showSearch)}>🔍</span>
            <Link to="/cart">
              <span className="cursor-pointer">
                🛒
                <span className="absolute -mt-1 -ml-2 px-1 text-blue-50 bg-red-500 rounded-md text-xs">{cartList.length}</span>
              </span>
            </Link>
            <button onClick={() => setShowUser(!showUser)}>
              <span className="cursor-pointer">👤</span>
            </button>
            {showUser && (email ? <DropdownLoggedIn /> : <DropdownLoggedOut />)}
          </div>
        </div>
      </nav>
      {showSearch && <div className="rounded-md overflow-hidden ">
        <input className="mt-4 h-8 rounded-l w-3/5 text-black pl-3 border-2 border-black" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
        <Link to={`/products?q=${value.toLowerCase()}`} className="cursor-pointer rounded-r bg-slate-800 p-2" onClick={() => { }}>🔍</Link>
      </div>}
    </header>
  )
}
