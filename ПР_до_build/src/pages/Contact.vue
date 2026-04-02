<template>
  <div class="contact-wrapper">
    <section class="contact-page py-5">
      <div class="container">
        <h2 class="section-title mb-5">Contact</h2>

        <div class="row">
          <div class="col-md-6">
            <div v-if="!orderPlaced">
              <div class="row g-3">
                <div class="col-md-12">
                  <input v-model="contactFields.name" type="text" class="form-control" placeholder="Name">
                </div>
                <div class="col-md-12">
                  <input v-model="contactFields.email" type="email" class="form-control" placeholder="Email">
                </div>
                <div class="col-md-12">
                  <textarea v-model="contactFields.message" class="form-control" rows="5" placeholder="Message"></textarea>
                </div>
                <div class="col-md-12">
                  <div class="d-flex align-items-center gap-3">
                    <span class="p-2 bg-light border fw-bold text-success">7 C J 3</span>
                    <input type="text" class="form-control w-25" placeholder="Code">
                    <button @click="makeOrder" class="btn btn-success px-4">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="alert alert-success text-center py-4">
              <h4>Thank you!</h4>
              <p>Your order and message have been sent.</p>
              <button @click="orderPlaced = false" class="btn btn-sm btn-outline-success">Send another</button>
            </div>
          </div>

          <div class="col-md-6 ps-md-5 border-start">
            <h4 class="mb-4">Selected Products:</h4>
            <div v-if="cart.length > 0">
              <div v-for="item in cart" :key="item.id" class="d-flex align-items-center mb-3 p-2 border-bottom">
                <img :src="item.image" style="width: 50px;" class="me-3">
                <span class="flex-grow-1 fw-bold">{{ item.title }}</span>
                <button @click="removeFromCart(item.id)" class="btn btn-sm text-danger">✕</button>
              </div>
            </div>
            <p v-else class="text-muted italic">Your cart is empty.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-address text-center py-5 bg-light">
      <div class="container">
        <h5 class="fw-bold mb-3">Our Address</h5>
        <p class="text-muted">
          AGRIDERA Seeds & Agriculture Ltd.<br>
          P.O Box 103,<br>
          Gedera 70750, Israel.<br>
          Telephone: +972 8 944 9222
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactFields: { name: '', email: '', message: '' },
      orderPlaced: false,
      cart: [],
      products: [
        { id: 1, title: "Yellow Onion", image: "/images/onion1.jpg" },
        { id: 2, title: "Red Onion", image: "/images/onion2.jpg" },
        { id: 3, title: "White Onion", image: "/images/onion3.jpg" },
        { id: 4, title: "Green Onion", image: "/images/onion4.jpg" },
        { id: 5, title: "Sweet Onion", image: "/images/onion5.jpg" }
      ]
    }
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      let cartIds = JSON.parse(localStorage.getItem('cart')) || [];
      this.cart = this.products.filter(p => cartIds.includes(p.id));
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id);
      let cartIds = JSON.parse(localStorage.getItem('cart')) || [];
      cartIds = cartIds.filter(cid => cid !== id);
      localStorage.setItem('cart', JSON.stringify(cartIds));
    },
    makeOrder() {
      if (!this.contactFields.name || !this.contactFields.email) {
        alert("Please fill name and email");
        return;
      }
      this.orderPlaced = true;
      this.cart = [];
      localStorage.removeItem('cart');
    }
  }
}
</script>