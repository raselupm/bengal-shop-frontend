export const state = () => ({
  cart: []
});

export const mutations = {
  ADD_TO_CART(state, product) {
    // save in localstorage
    let getProductsLocalStorage = JSON.parse(localStorage.getItem('cart'));

    let newProduct = true;
    getProductsLocalStorage.forEach(item => {
      if(product.id === item.id) {
        newProduct = false
      }
    })

    if(newProduct) {
      getProductsLocalStorage.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
      });
    } else {
      getProductsLocalStorage.forEach((exitingProduct, index) => {
        if(exitingProduct.id === product.id) {
          getProductsLocalStorage[index].quantity = getProductsLocalStorage[index].quantity + 1;
        }
      })
    }



    localStorage.setItem('cart', JSON.stringify(getProductsLocalStorage))


    // save in store
    state.cart = product;

    // save in user database
  }
}

export const actions = {
  addToCart({commit}, product) {
    commit('ADD_TO_CART', product)
  }
}

export const getters = {
  getCart(state) {
    return state.cart
  }
}


