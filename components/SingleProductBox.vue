<template>
  <div class="single-bs-product">
    <div class="h-80 relative mb-6">
      <div class="h-full bg-gray-50 flex justify-center items-center p-4">
        <img src="~/assets/img/fresh-fruit.png" alt="">
      </div>
      <div class="product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center">
        <div class="bg-black absolute h-full w-full opacity-60"></div>

        <button @click.prevent="productDetails" class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg></button>


        <div class="relative z-10">
          <div class="flex justify-center items-center text-4xl text-white mb-8">
            <button class="h-12 w-12 border border-white rounded-full">-</button>
            <span class="mx-6">0</span>
            <button class="h-12 w-12 border border-white rounded-full">+</button>
          </div>

          <button class="bs-dark-green-bg text-white px-8 py-2 rounded-full inline-block">Add to cart</button>
        </div>
      </div>
    </div>

    <h4 class="text-xl mb-3">Product Name - {{product}}</h4>
    <p><span class="font-medium bs-dark-orange-color">$200.00</span> <del class="text-gray-400">$300</del></p>
  </div>
</template>

<script>
export default {
  name: "SingleProductBox",
  props: ["product"],
  methods: {
    productDetails() {
      this.$store.dispatch("product-details-modal/triggerModal", this.product);
    }
  },
}
</script>

<style scoped>

</style>
