import { Hero } from "./Components/Hero"
import { FeaturedProducts } from "./Components/FeaturedProducts"
import { Testimonial } from "./Components/Testimonial"
import { Faq } from "./Components/Faq"
import { useTitle } from "../../hooks/useTitle"

export const HomePage = () => {

  useTitle("Home")

  return (
    <main className="dark:bg-gray-700">
      <Hero />
      <FeaturedProducts />
      <Testimonial />
      <Faq />
    </main>
  )
}
