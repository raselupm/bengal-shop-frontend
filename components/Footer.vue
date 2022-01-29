<template>
  <div>
    <div class="container">
      <div class="flex -mx-4 mb-16">
        <div class="w-1/4 px-4 flex items-center">
          <div class="min-w-max mr-4">
            <img width="80" src="~/assets/img/customer-support.png" alt="">
          </div>
          <div class="w-full">
            <h3 class="text-xl font-medium mb-2">24 Customer Support</h3>
            Contact us 24 hours
          </div>
        </div>

        <div class="w-1/4 px-4 flex items-center">
          <div class="min-w-max mr-4">
            <img width="80" src="~/assets/img/authentic-products.png" alt="">
          </div>
          <div class="w-full">
            <h3 class="text-xl font-medium mb-2">Authentic Products</h3>
            Contact us 24 hours
          </div>
        </div>

        <div class="w-1/4 px-4 flex items-center">
          <div class="min-w-max mr-4">
            <img width="80" src="~/assets/img/secure-payment.png" alt="">
          </div>
          <div class="w-full">
            <h3 class="text-xl font-medium mb-2">Secure Payment</h3>
            Contact us 24 hours
          </div>
        </div>

        <div class="w-1/4 px-4 flex items-center">
          <div class="min-w-max mr-4">
            <img width="80" src="~/assets/img/best-price.png" alt="">
          </div>
          <div class="w-full">
            <h3 class="text-xl font-medium mb-2">Best Prices & Offers</h3>
            Contact us 24 hours
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-200 py-20">
      <div class="container">
        <div class="flex">
          <div class="w-3/5 pr-10">
            <Logo/>

            <p class="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare nam est gravida. Netus viverra rhoncus sit magna sapien ac eget parturient id. Est luctus dapibus quam aliquam in nisl turpis. Elit et dictum lacus morbi nec accumsan a in.</p>

            <div class="flex">
              <a class="mr-4" href="" target="_blank"><img src="~/assets/img/playstore.png" alt=""></a>
              <a href="" target="_blank"><img src="~/assets/img/appstore.png" alt=""></a>
            </div>
          </div>
          <div class="w-1/5 pl-6">
            <h3 class="text-2xl mb-6">About Us</h3>
            <ul class="leading-loose">
              <li><nuxt-link to="/">About Karte</nuxt-link></li>
              <li><nuxt-link to="/">Contact</nuxt-link></li>
              <li><nuxt-link to="/">Career</nuxt-link></li>
              <li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
              <li><nuxt-link to="/">Category</nuxt-link></li>
            </ul>
          </div>

          <div class="w-1/5 pl-6">
            <h3 class="text-2xl mb-6">About Us</h3>
            <ul class="leading-loose">
              <li><nuxt-link to="/">About Karte</nuxt-link></li>
              <li><nuxt-link to="/">Contact</nuxt-link></li>
              <li><nuxt-link to="/">Career</nuxt-link></li>
              <li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
              <li><nuxt-link to="/">Category</nuxt-link></li>
            </ul>
          </div>
        </div>

        <div class="flex -mx-6 mt-20 items-center text-xs">
          <div class="w-1/3 px-6"></div>
          <div class="w-1/3 px-6 text-center">@2022 Copyright All Right Reserved by Bengal Shop</div>
          <div class="w-1/3 px-6 text-right">
            <img src="~/assets/img/payments.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "Footer",
  components: {Logo}
}
</script>

<style scoped>

</style>
