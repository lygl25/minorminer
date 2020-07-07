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
         //场景淡入淡出效果（持续时间，R，G，B）
        this.cameras.main.flash(250,0,0,0);


    },

    update: function () {



    }
   

})


export { Play }