function initVue() {
    new Vue({
        el: '#app',
        data: {
            'sayHello': 'Hello World!',
            'immagine': 'img1.png'
        }
    });
}

function init() {
    initVue();
}

$(init);
