var Play = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

        function Preloader() {
            Phaser.Scene.call(this, { key: 'play' });
        },

    preload: function () {



    },

    create: function () {
        console.log('%c play ', 'background: green; color: white; display: block;');

    },

    update: function () {



    }
   

})


export { Play }