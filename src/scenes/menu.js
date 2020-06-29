var Menu=new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'menu' });
    },

    preload: function (){



    },

    create: function ()
    {
        console.log('%c Menu ', 'background: green; color: white; display: block;');
        var loadingText = this.add.bitmapText(0, 0, "myfont", "游戏", 18)
    }

})


export {Menu}