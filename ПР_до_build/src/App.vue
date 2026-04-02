<template>
  <div id="app">
    <header class="header shadow-sm bg-white">
      <div class="container">
        <div class="top-bar d-flex justify-content-end py-2">
          <input type="text" placeholder="Search" class="search-input border-bottom">
        </div>

        <div class="d-flex justify-content-between align-items-center py-3 position-relative">
          <router-link to="/">
            <img src="/images/logo.png" class="logo" alt="Logo">
          </router-link>
          
          <div class="menu-btn" @click="isMenuOpen = !isMenuOpen">☰</div>
          
          <ul class="nav" :class="{ 'active': isMenuOpen }">
            <li><router-link to="/" class="nav-link">Home</router-link></li>
            <li><a href="#" class="nav-link">Company Profile</a></li>
            <li><router-link to="/products" class="nav-link">Products</router-link></li>
            <li><a href="#" class="nav-link">Services</a></li>
            <li><a href="#" class="nav-link">R & D</a></li>
            <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <footer class="footer py-4 bg-dark text-white text-center mt-5">
      <div class="container">
        <ul class="nav justify-content-center mb-3">
          <li><router-link to="/" class="text-light px-2">Home</router-link></li>
          <li><a href="#" class="text-light px-2">Company Profile</a></li>
          <li><router-link to="/products" class="text-light px-2">Products</router-link></li>
          <li><a href="#" class="text-light px-2">Services</a></li>
          <li><a href="#" class="text-light px-2">R & D</a></li>
          <li><router-link to="/contact" class="text-light px-2">Contact</router-link></li>
        </ul>
        <div class="footer-bottom small">
          AGRIDERA SEEDS & AGRICULTURE LTD © 2020
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return { isMenuOpen: false }
  },
  watch: {
    $route() { this.isMenuOpen = false; }
  }
}
</script>