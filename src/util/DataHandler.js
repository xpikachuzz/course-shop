export class DataHandler {
  static q_name_like(data, name_like) {
    return data.filter(({ name }) => {
      return name.toLowerCase().includes(name_like)
    })
  }
  static sort_by(state) {
    let products = state.products
    if (state.sortBy === "lowtohigh") {
      products = [...products].sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      products = [...products].sort((a, b) => Number(b.price) - Number(a.price));
    }
    return { ...state, products: products };
  }
  static ratings(state) {
    let products = state.products
    if (state.rating === "4STARSABOVE") {
      products = [...products].filter(product => product.rating >= 4);
    }
    if (state.rating === "3STARSABOVE") {
      products = [...products].filter(product => product.rating >= 3);
    }
    if (state.rating === "2STARSABOVE") {
      products = [...products].filter(product => product.rating >= 2);
    }
    if (state.rating === "1STARSABOVE") {
      products = [...products].filter(product => product.rating >= 1);
    }
    return { ...state, products: products };
  }
  static best_seller_only(state) {
    let products = [...state.products]
    products = state.bestSellerOnly ? products.filter(product => product.best_seller) : products
    return { ...state, products: products };
  }
  static only_in_stock(state) {
    let products = [...state.products]
    products = state.onlyInStock ? products.filter(product => product.in_stock) : products
    return { ...state, products: products };
  }
  static clear_filter(state) {
    return state
  }
  static filteredProduct(state) {
    return DataHandler.ratings(DataHandler.sort_by(DataHandler.only_in_stock(DataHandler.best_seller_only(state))))
  }
}