const App = {
    data: () => ({
        productName: "Acanthocereus tetragonus Fairy Castle Cactus",
        productDescription: 'This plant comes in a 3.5 inch pot. You will receive a similar plant in size and shape to the ones in the pictures. Our plants are hand-picked and carefully selected to bring you the best quality possible.',
        mainImage: 'images/cactus.PNG',
        secondaryImages: ['images/cactus2.jpeg', 'images/cactus3.jpg', 'images/cactus4.jpg', 'images/cactus.PNG'],
        altImageText: 'cactus',
        stock: 10,
        cart: 0,
        unitPrice: 1099,
        unitCount: 1,
        basicCost: 1099,
        extraCost: 0,
        selectedCards: [],
        cards: [
            {
                image: "images/birthday.PNG",
                selected: false,
                name: "Happy Birthday! "
            },
            {
                image: "images/hello.PNG",
                selected: false,
                name: "Hello! "
            },
            {
                image: 'images/love.PNG',
                selected: false,
                name: "Love You! "
            },
            {
                image: 'images/thanks.PNG',
                selected: false,
                name: "Thank You! "
            },
            {
                image: 'images/valentine.PNG',
                selected: false,
                name: "Happy Valentine's Day! "
            },
            {
                image: 'images/wish.PNG',
                selected: false,
                name: "Wish You Were Here! "
            },
            {
                image: 'images/miss.PNG',
                selected: false,
                name: "Miss You! "
            },
            {
                image: 'images/congrats.PNG',
                selected: false,
                name: "Congratulations! "
            },
            {
                image: 'images/holiday.PNG',
                selected: false,
                name: "Happy Holiday! "
            },
            {
                image: 'images/nocard.PNG',
                selected: false,
                name: ""
            }
        ],
        details: ['Minimum avg. temperature: 10°C', 'Origin: Garden origin', 'Sun exposure: bright light, and some direct sun, but avoid direct afternoon sun in summer'],
    }),
    methods: {
        addCard(card) {
            card.selected = !card.selected;
            if (!card.name) {
                this.extraCost = 0;
                this.selectedCards = []
                for (let i = 0; i < this.cards.length-1; i++) {
                    this.cards[i].selected = false;
                }
            } else if (card.selected) {
                this.extraCost += 1
                this.selectedCards.push(card.name)
                this.cards[this.cards.length-1].selected = false
            } else {
                this.extraCost -= 1
                if (card.name) {
                    this.selectedCards.splice(this.selectedCards.indexOf(card.name), 1)
                }
            }
        },
        addItem() {
            this.unitCount = Number(this.unitCount) + 1
            if (this.unitCount <= 10) {
                this.calcBasicPrice()
            }
        },
        removeItem() {
            if (this.unitCount) {
                this.unitCount = Number(this.unitCount) - 1
                this.calcBasicPrice()
            }
        },
        checkUnitCount() {
            if (!this.unitCount.match(/^([0-9]?|10)$/)) {
                this.unitCount = 1
                this.calcBasicPrice()
            } else {
                this.calcBasicPrice()
            }
        },
        changeMainImage(image) {
            this.mainImage = image
        }
    },
    computed: {
        calcBasicPrice() {
            return this.basicCost = this.unitPrice * Number(this.unitCount)
        },
        addToCart() {
            return this.cart = Number(this.unitCount) + this.selectedCards.length
        }
    }
}

Vue.createApp(App).mount('#app')





