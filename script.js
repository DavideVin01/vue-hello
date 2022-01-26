// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// console.log('Vue Ready', Vue);
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        title: 'Hello VUE',
        image: 'https://picsum.photos/300/300',
    }
})