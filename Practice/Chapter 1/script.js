var app = new Vue({
    el: '#app',
    data: {
        maximum: 100,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            inputWidth: 70,
            sliderStatus: true
        }
    },
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
    },
    computed: {
        sliderState: function() {
            return this.style.sliderStatus ? 'd-flex' : 'd-none';
        }
    },
    methods: {
        addItem: function(product) {
            this.cart.push(product);
        }
    }
});
