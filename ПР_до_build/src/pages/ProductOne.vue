<template>
  <div class="product-page-wrapper" v-if="product">
    <section class="product-page py-5">
      <div class="container">
        <router-link to="/products" class="back-link mb-3 d-inline-block">← Back to Products</router-link>

        <div class="row">
          <div class="col-md-6">
            <img :src="product.image" class="product-img" :alt="product.title">
          </div>
          <div class="col-md-6">
            <h2 class="section-title product-title">{{ product.title }}</h2>
            <p class="mt-3">{{ product.short_text }}</p>

            <div class="mt-4">
              <button v-if="!btnVisible" @click="addToCart(product.id)" class="btn btn-success px-4">
                Add to Cart
              </button>
              <div v-else class="alert alert-info d-inline-block py-2 px-3">
                ✓ Product in cart
              </div>
            </div>

            <button class="btn btn-outline-success mt-3 d-block">Download PDF Catalogue</button>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-6">
            <h5 class="section-title">Type</h5>
            <ul>
              <li>Long shelf life on plant and post harvest.</li>
              <li>Nice shiny attractive deep red color.</li>
              <li>Average fruit size: 140 – 160 grams.</li>
            </ul>
          </div>

          <div class="col-md-6">
            <h5 class="section-title">Cycle</h5>
            <ul>
              <li>Spring</li>
              <li>Fall</li>
              <li>Winter</li>
            </ul>

            <h5 class="section-title mt-4">Color</h5>
            <p>Red</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      btnVisible: false,
      products: [
        { id: 1, title: "Yellow Onion", short_text: "Classic cooking onion", image: "/images/onion1.jpg" },
        { id: 2, title: "Red Onion", short_text: "Sweet and colorful", image: "/images/onion2.jpg" },
        { id: 3, title: "White Onion", short_text: "Sharp flavor", image: "/images/onion3.jpg" },
        { id: 4, title: "Green Onion", short_text: "Fresh and light", image: "/images/onion4.jpg" },
        { id: 5, title: "Sweet Onion", short_text: "Mild and sweet", image: "/images/onion5.jpg" }
      ]
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const id = this.$route.params.id;
      this.product = this.products.find(p => p.id == id);
      
      let cartIds = JSON.parse(localStorage.getItem('cart')) || [];
      if (this.product && cartIds.includes(Number(id))) {
        this.btnVisible = true;
      }
    },
    addToCart(id) {
      let cartIds = JSON.parse(localStorage.getItem('cart')) || [];
      if (!cartIds.includes(id)) {
        cartIds.push(id);
        localStorage.setItem('cart', JSON.stringify(cartIds));
      }
      this.btnVisible = true;
    }
  }
}
</script>