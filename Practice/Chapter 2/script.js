var data = new Vue({
    el: '#app',
    data: {
        name: "Hello Vue!",
        imgClass: "img-fluid",
        products: [
            {
                "id": 492,
                "name": "Vue.js T-shirt",
                "description": "A T-shirt designed to wear while you code Vue.js",
                "price": 20,
                "image": "https://ih1.redbubble.net/image.519724910.8973/ssrco,active_tshirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg",
                "quantity": 5
            },
            {
                "id": 493,
                "name": "Vue.js Hoodie",
                "description": "A Hoodie designed to wear while you code Vue.js",
                "price": 40,
                "image": "https://ih1.redbubble.net/image.593378671.8523/ssrco,mhoodie,mens,101010:01c5ca27c6,front,square_product,x600-bg,f8f8f8.1u3.jpg",
                "quantity": 5
            },
            {
                "id": 494,
                "name": "Vue.js Stickers",
                "description": "Stickers to decorate your laptop",
                "price": 2,
                "image": "https://ih1.redbubble.net/image.5158354035.1156/st,small,507x507-pad,600x600,f8f8f8.jpg",
                "quantity": 5
            }
        ]
    }
});