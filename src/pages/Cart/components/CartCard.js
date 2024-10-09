export const CartCard = ({ product: { poster, id, name, price } }) => {
  return (
    <div key={id} className="flex flex-row justify-between pr-4 mb-4 border w-3/4 items-center">
      <div className="w-4/5 flex flex-row items-center">
        <img src={poster} alt="poster" className="w-1/3" />
        <p className="text-left ml-4 lg:text-xl font-semibold">{name}</p>
      </div>
      <div>
        ${price}
      </div>

    </div>
  )
}
