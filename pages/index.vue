<template>
  <div>
    <div class="p-8">
      <vue-slick-carousel class="hero-slide" :arrows="false" :dots="true">
        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex items-center">
              <div class="w-1/2 mr-6 font-size-22">
                <p class="bs-dark-green-color font-size-32 mb-4">Save up 30% off</p>
                <h2 class="text-7xl font-bold mb-6 text-gray-800">Bengal Vegetable farm  Organic 100%</h2>
                <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>

                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="550" src="~/assets/img/hero.png" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex items-center">
              <div class="w-1/2 mr-6 font-size-22">
                <p class="bs-dark-green-color font-size-32 mb-4">Save up 40% off</p>
                <h2 class="text-7xl font-bold mb-6 text-gray-800">Bengal Vegetable farm  Organic 100%</h2>
                <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>

                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="550" src="~/assets/img/hero.png" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex items-center">
              <div class="w-1/2 mr-6 font-size-22">
                <p class="bs-dark-green-color font-size-32 mb-4">Save up 50% off</p>
                <h2 class="text-7xl font-bold mb-6 text-gray-800">Bengal Vegetable farm  Organic 100%</h2>
                <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>

                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="550" src="~/assets/img/hero.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </vue-slick-carousel>

      <div class="container pt-20">
        <h3 class="text-4xl mb-6">Search by Category</h3>
        <div class="flex items-center mb-10">
          <div style="height: 3px" class="w-32 bs-dark-green-bg"></div>
          <div style="height: 2px" class="w-full bg-gray-200"></div>
        </div>

        <vue-slick-carousel class="category-carousel mb-10 text-center" v-bind="categoryCarouselSettings">
          <div class="bg-gray-100 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-1.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <div class="bg-gray-100 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-2.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <div class="bg-gray-100 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-3.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <div class="bg-gray-100 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-4.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <div class="bg-gray-100 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-5.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <div class="bg-gray-100 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-6.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <div class="bg-gray-100 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-1.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <template #prevArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>

          <template #nextArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>
        </vue-slick-carousel>
      </div>

    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: 'IndexPage',
  components: {Footer, Header},
  data() {
    return {
      categoryCarouselSettings: {
        "slidesToShow": 6,
        "prevArrow": '>'
      }
    }
  }
}
</script>
