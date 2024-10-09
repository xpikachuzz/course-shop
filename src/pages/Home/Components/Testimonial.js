const pf = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"

export const Testimonial = () => {
  return (
    <section className="mt-20 dark:bg-gray-700 dark:text-slate-100">
      <h1 className="text-3xl font-semibold underline underline-offset-4">
        Student About CodeBook
      </h1>
      <div className="grid md:grid-cols-2 rounded-md overflow-hidden mt-5">
        <figure className="border flex flex-col justify-center items-center p-8 text-center dark:bg-gray-800 ">
          <h3 className="text-xl font-bold">
            Testimonial
          </h3>
          <p className="text-gray-500 mt-3">
            If you care for your time, I hands down would go with this
          </p>
          <div className="flex flex-row mt-10">
            <img src={pf} alt="" className="w-10 rounded-3xl mr-4" />
            <div className="flex flex-col text-left">
              <p className="font-bold">Bonnie Green</p>
              <p className="text-gray-500">Developer at Random AI</p>
            </div>
          </div>
        </figure>
        <figure className="border flex flex-col justify-center items-center p-8 text-center dark:bg-gray-800 ">
          <h3 className="text-xl font-bold">
            Testimonial
          </h3>
          <p className="text-gray-500 mt-3">
            If you care for your time, I hands down would go with this
          </p>
          <div className="flex flex-row mt-10">
            <img src={pf} alt="" className="w-10 rounded-3xl mr-4" />
            <div className="flex flex-col text-left">
              <p className="font-bold">Bonnie Green</p>
              <p className="text-gray-500">Developer at Random AI</p>
            </div>
          </div>
        </figure>
        <figure className="border flex flex-col justify-center items-center p-8 text-center dark:bg-gray-800 ">
          <h3 className="text-xl font-bold">
            Testimonial
          </h3>
          <p className="text-gray-500 mt-3">
            If you care for your time, I hands down would go with this
          </p>
          <div className="flex flex-row mt-10">
            <img src={pf} alt="" className="w-10 rounded-3xl mr-4" />
            <div className="flex flex-col text-left">
              <p className="font-bold">Bonnie Green</p>
              <p className="text-gray-500">Developer at Random AI</p>
            </div>
          </div>
        </figure>
        <figure className="border flex flex-col justify-center items-center p-8 text-center dark:bg-gray-800 ">
          <h3 className="text-xl font-bold">
            Testimonial
          </h3>
          <p className="text-gray-500 mt-3">
            If you care for your time, I hands down would go with this
          </p>
          <div className="flex flex-row mt-10">
            <img src={pf} alt="" className="w-10 rounded-3xl mr-4" />
            <div className="flex flex-col text-left">
              <p className="font-bold">Bonnie Green</p>
              <p className="text-gray-500">Developer at Random AI</p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
