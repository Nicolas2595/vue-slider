var app = new Vue ({

    el: "#root",
    data: {
        imageIndex: 0,
        images: [
            "https://www.ipersoap.com/wp-content/uploads/2020/11/cover-curiosita-1.png",
            "https://qdpnews.it/wp-content/uploads/2019/06/foto_estate_animali.jpg",
            "https://media.laregione.ch/files/domains/laregione.ch/images/4bv9/s_-animali-vita-periodo-concorso-giardini-femmine-tempo-specie-piccoli-piante-l9go.jpg?v=1",
            "https://www.quotidianocanavese.it/img/pics_orig/19121_23123.jpg",
            "https://www.panoramasanita.it/wp-content/uploads/2020/03/CANE-201805_Friskies_Cane17_mobile-e1583090382664.jpg",
            "https://www.quotedbusiness.com/images/articoli/7257/img/raccoon-3538081_1920.jpg?box=650x850"
        ]
    },
    methods: {
        leftImage: function () {
            this.imageIndex--;

            if (this.imageIndex == -1) {
                this.imageIndex = this.images.length - 1;
            }
        },
        rightImage: function () {
            this.imageIndex++;

            if (this.imageIndex == this.images.length) {
                this.imageIndex = 0;
            }
        }
    },

    // Soluzione salvando il this in una variabile fuori dal setinterval

    // created: function() {
    //     var vm = this;

    //     setInterval (function() {
    //         vm.rightImage();
    //     },3000)

    // }

    // Soluzione usando la variabile app

    // created: function() {
        
    //     setInterval (function() {
    //        app.rightImage();
    //     },3000)
    // }

    // Soluzione con l'arrow function

    created: function() {

        setInterval(() => {
            this.rightImage();
        },3000);
    }

});