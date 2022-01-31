<template>
  <div class="container py-20">
    <h3 class="text-2xl font-bold mb-8">Cart</h3>
    <table class="table-auto w-full">
      <thead>
      <tr>
        <th style="width: 30px" class="border px-4 py-2"></th>
        <th style="width: 50px" class="border px-4 py-2">Image</th>
        <th class="border px-4 py-2 text-left">Name</th>
        <th style="width: 150px" class="border px-4 py-2">Price</th>
        <th style="width: 150px" class="border px-4 py-2">Quantity</th>
        <th style="width: 150px" class="border px-4 py-2">Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products">
        <td class="border px-4 py-2">
          <button @click="removeCart(product.id)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </td>
        <td class="border px-4 py-2"><img width="50" :src="product.image" alt=""></td>
        <td class="border px-4 py-2">{{product.name}}</td>
        <td class="border px-4 py-2 text-center">${{product.price.toFixed(2)}}</td>
        <td class="border px-4 py-2 text-center">
          <div class="flex justify-center items-center">
            <button @click.prevent="cartChange(product, 'minus')" class="bg-gray-50 h-6 w-6 flex justify-center items-center rounded-full mr-3 font-bold">-</button>

            {{product.quantity}}

            <button @click.prevent="cartChange(product, 'plus')" class="bg-gray-50 h-6 w-6 flex justify-center items-center rounded-full ml-3 font-bold">+</button>
          </div>
        </td>
        <td class="border px-4 py-2 text-center">${{(product.quantity * product.price).toFixed(2)}}</td>
      </tr>

      <tr>
        <td class="border px-4 py-2 text-center text-right" colspan="5">Total</td>
        <td class="border px-4 py-2 text-center">${{total.toFixed(2)}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      products: [],
      total: 0
    }
  },
  methods: {
    getCartItems() {
      const getProductsLocalStorage = JSON.parse(localStorage.getItem('cart'));
      const getProductsStore = this.$store.getters["cart/getCart"];

      if(getProductsStore.length) {
        this.products = getProductsStore;
      } else {
        this.products = getProductsLocalStorage;
      }

      this.products.forEach(item => {
        this.total += (item.quantity * item.price)
      })

    },
    removeCart(product_id) {
      this.$store.dispatch("cart/removeCart", product_id);
      this.getCartItems();
    },
    cartChange(product, type) {
      this.$store.dispatch("cart/addToCart",
        {
          product: product,
          type: type
        }
      );

      this.getCartItems();
    }
  },
  mounted() {
    this.getCartItems();
  }
}
</script>

<style scoped>

</style>
