const App = {
    data: () => ({
        productName: "Acanthocereus tetragonus Fairy Castle Cactus",
        productDescription: 'This plant comes in a 3.5 inch pot. You will receive a similar plant in size and shape to the ones in the pictures. Our plants are hand-picked and carefully selected to bring you the best quality possible.',
        productImage: 'images/cactus.png',
        altText: 'cactus',
        link: 'https://planetdesert.com/',
        productPrice: 1099,
        finalPrice: 1099,
        additionalCost: 0,
        quantity: 14,
        cart: 1,
        selectedCards: [],
        details: ['Minimum avg. temperature: 10°C', 'Origin: Garden origin', 'Sun exposure: bright light, and some direct sun, but avoid direct afternoon sun in summer'],
        cards: [
            {
                image: 'images/birthday.png',
                selected: false,
                name: "Happy Birthday! "
            },
            {
                image: 'images/hello.png',
                selected: false,
                name: "Hello! "
            },
            {
                image: 'images/love.png',
                selected: false,
                name: "Love You! "
            },
            {
                image: 'images/thanks.png',
                selected: false,
                name: "Thank You! "
            },
            {
                image: 'images/valentine.png',
                selected: false,
                name: "Happy Valentine's Day! "
            },
            {
                image: 'images/wish.png',
                selected: false,
                name: "Wish You Were Here! "
            },
            {
                image: 'images/miss.png',
                selected: false,
                name: "Miss You! "
            },
            {
                image: 'images/congrats.png',
                selected: false,
                name: "Congratulations! "
            },
            {
                image: 'images/holiday.png',
                selected: false,
                name: "Happy Holiday! "
            },
            {
                image: 'images/nocard.png',
                selected: false,
                name: ""
            }
        ]
    }),
    methods: {
        addCard(i) {
            this.cards[i].selected = !this.cards[i].selected;
            if (i === this.cards.length-1) {
                this.additionalCost = 0;
                this.selectedCards = []
                for (let j = 0; j < this.cards.length-1; j++) {
                    this.cards[j].selected = false;
                }
            } else if (this.cards[i].selected) {
                this.additionalCost += 1
                this.selectedCards.push(this.cards[i].name)
                this.cards[this.cards.length-1].selected = false
            } else {
                this.additionalCost -= 1
                if (this.cards[i].name) {
                    this.selectedCards.splice(this.selectedCards.indexOf(this.cards[i].name), 1)
                }
            }
        },
        addProduct() {
            this.cart = Number(this.cart) + 1
            this.finalPrice = this.productPrice * this.cart
        },
        removeProduct() {
            if (this.cart) {
                this.cart = Number(this.cart) - 1
                this.finalPrice = this.productPrice * this.cart
            }
        },
        checkCart() {
            if (!this.cart.match(/^\d{1,2}\b/)) {
                this.cart = 0
            } else {
                this.finalPrice = this.productPrice * this.cart
            }
        }
    },
}

Vue.createApp(App).mount('#app')





