<template>
  <div class="product-page py-5">
    <div class="container">
      <h1 class="section-title">Products - Tomatoes</h1>
      
      <div class="row mt-5">
        <div v-for="item in products" :key="item.id" class="col-md-4 mb-4 text-center">
          <router-link :to="'/product/' + item.id">
            <img :src="item.image" class="product-img mb-2" :alt="item.title">
            <h6 class="text-dark">{{ item.title }}</h6>
          </router-link>
          <p class="small text-muted">{{ item.short_text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, title: "Yellow Onion", short_text: "Classic cooking onion", image: "/images/onion1.jpg" },
        { id: 2, title: "Red Onion", short_text: "Sweet and colorful", image: "/images/onion2.jpg" },
        { id: 3, title: "White Onion", short_text: "Sharp flavor", image: "/images/onion3.jpg" },
        { id: 4, title: "Green Onion", short_text: "Fresh and light", image: "/images/onion4.jpg" },
        { id: 5, title: "Sweet Onion", short_text: "Mild and sweet", image: "/images/onion5.jpg" }
      ]
    }
  }
}
</script>