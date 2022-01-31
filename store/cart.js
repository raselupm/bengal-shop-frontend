export const state = () => ({
  cart: []
});

export const mutations = {
  ADD_TO_CART(state, data) {

    // save in localstorage
    let getProductsLocalStorage = JSON.parse(localStorage.getItem('cart'));

    let newProduct = true;
    getProductsLocalStorage.forEach(item => {
      if(data.product.id === item.id) {
        newProduct = false
      }
    })

    if(newProduct) {
      getProductsLocalStorage.push({
        id: data.product.id,
        name: data.product.name,
        image: data.product.image,
        quantity: 1,
        price: data.product.price,
      });
    } else {
      getProductsLocalStorage.forEach((exitingProduct, index) => {
        if(exitingProduct.id === data.product.id) {
          if(data.type === 'minus') {
            if(getProductsLocalStorage[index].quantity > 1) {
              getProductsLocalStorage[index].quantity = getProductsLocalStorage[index].quantity - 1;
            }
          } else {
            getProductsLocalStorage[index].quantity = getProductsLocalStorage[index].quantity + 1;
          }

        }
      })
    }



    localStorage.setItem('cart', JSON.stringify(getProductsLocalStorage))


    // save in store
    state.cart = getProductsLocalStorage;



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


