import { Link } from "react-router-dom"

const logoUrl = "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 item-center">
      <div className="flex flex-col items-start my-5 ml-5 text-left">
        <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
        <Link to="/products" className="text-white bg-blue-700 hover:bg-blue-800 focus:border-2 border-black p-3 px-4 rounded-lg">Explore courses</Link>
      </div>
      <div className="visual my-5 lg:m-w-xl">
        <img className="rounded-lg max-h-full" src={logoUrl} alt="HeroImage" />
      </div>
    </section>
  )
}
