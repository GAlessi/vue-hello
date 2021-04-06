function initVue() {
    new Vue({
        el: '#app',
        data: {
            'sayHello': 'Hello World!',
            'immagine1': 'img/img1.png',
            'immagine2': 'img1.png'

        }
    });
}

function init() {
    initVue();
}

$(init);
