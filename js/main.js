const app = Vue.createApp({
    data() {
        return {
            products: [
                {
                    id: 1,
                    title: "Yellow Onion",
                    short_text: "Classic cooking onion",
                    image: "images/onion1.jpg",
                    desc: "Yellow onion is the most common onion used in cooking."
                },
                {
                    id: 2,
                    title: "Red Onion",
                    short_text: "Sweet and colorful",
                    image: "images/onion2.jpg",
                    desc: "Red onion is perfect for salads and fresh dishes."
                },
                {
                    id: 3,
                    title: "White Onion",
                    short_text: "Sharp flavor",
                    image: "images/onion3.jpg",
                    desc: "White onion has a stronger taste and is often used in Mexican cuisine."
                },
                {
                    id: 4,
                    title: "Green Onion",
                    short_text: "Fresh and light",
                    image: "images/onion4.jpg",
                    desc: "Green onion is used fresh in salads and soups."
                },
                {
                    id: 5,
                    title: "Sweet Onion",
                    short_text: "Mild and sweet",
                    image: "images/onion5.jpg",
                    desc: "Sweet onion is perfect for caramelizing."
                }
            ],

            product: {},
            btnVisible: 0
        }
    },

    methods: {
        getProduct() {
            const id = window.location.hash.replace('#', '');

            this.product = this.products.find(p => p.id == id);
        },

        addToCart(id) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (!cart.includes(id)) {
                cart.push(id);
                localStorage.setItem('cart', JSON.stringify(cart));
            }

            this.btnVisible = 1;
        },

        checkInCart() {
            const id = window.location.hash.replace('#', '');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (cart.includes(Number(id))) {
                this.btnVisible = 1;
            }
        }
    },

    mounted() {
        this.getProduct();
        this.checkInCart();
    }
});

app.mount('#app');