<template>
  <div class="container py-20">
    <h3 class="text-2xl font-bold mb-8">Cart</h3>
    <table class="table-auto w-full">
      <thead>
      <tr>
        <th class="border px-4 py-2"></th>
        <th style="width: 50px" class="border px-4 py-2">Image</th>
        <th class="border px-4 py-2 text-left">Name</th>
        <th class="border px-4 py-2">Price</th>
        <th class="border px-4 py-2">Quantity</th>
        <th class="border px-4 py-2">Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products">
        <td class="border px-4 py-2"></td>
        <td class="border px-4 py-2"><img width="50" :src="product.image" alt=""></td>
        <td class="border px-4 py-2">{{product.name}}</td>
        <td class="border px-4 py-2 text-center">${{product.price.toFixed(2)}}</td>
        <td class="border px-4 py-2 text-center">{{product.quantity}}</td>
        <td class="border px-4 py-2 text-center">${{(product.quantity * product.price).toFixed(2)}}</td>
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
      products: []
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
    }
  },
  mounted() {
    this.getCartItems();
  }
}
</script>

<style scoped>

</style>
