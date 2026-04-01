const app = Vue.createApp({
    data() {
        return {
            products: [
                { id: 1, title: "Yellow Onion", short_text: "Classic cooking onion", image: "images/onion1.jpg" },
                { id: 2, title: "Red Onion", short_text: "Sweet and colorful", image: "images/onion2.jpg" },
                { id: 3, title: "White Onion", short_text: "Sharp flavor", image: "images/onion3.jpg" },
                { id: 4, title: "Green Onion", short_text: "Fresh and light", image: "images/onion4.jpg" },
                { id: 5, title: "Sweet Onion", short_text: "Mild and sweet", image: "images/onion5.jpg" }
            ],
            product: {},
            btnVisible: 0,
            
            cart: [],
            contactFields: {},
            orderPlaced: false
        }
    },

    methods: {
        getProduct() {
            const id = window.location.hash.replace('#', '');
            if (id) {
                this.product = this.products.find(p => p.id == id);
            }
        },

        addToCart(id) {
            let cartIds = JSON.parse(localStorage.getItem('cart')) || [];
            if (!cartIds.includes(id)) {
                cartIds.push(id);
                localStorage.setItem('cart', JSON.stringify(cartIds));
            }
            this.btnVisible = 1;
            this.getCart(); 
        },

        getCart() {
            let cartIds = JSON.parse(localStorage.getItem('cart')) || [];
            this.cart = this.products.filter(product => cartIds.includes(product.id));
        },

        removeFromCart(id) {
            
            this.cart = this.cart.filter(item => item.id !== id);
            
            let cartIds = JSON.parse(localStorage.getItem('cart')) || [];
            cartIds = cartIds.filter(cartId => cartId !== id);
            localStorage.setItem('cart', JSON.stringify(cartIds));
        },

        makeOrder() {
            this.orderPlaced = true;
            
            this.cart = [];
            localStorage.removeItem('cart');
            
            console.log("Order Data:", this.contactFields);
        },

        checkInCart() {
            const id = window.location.hash.replace('#', '');
            let cartIds = JSON.parse(localStorage.getItem('cart')) || [];
            if (cartIds.includes(Number(id))) {
                this.btnVisible = 1;
            }
        }
    },

    mounted() {
        this.getProduct();
        this.checkInCart();
        this.getCart();
    }
});

app.mount('#app');