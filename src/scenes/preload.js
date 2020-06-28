
var Preload=new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'preload' });
    },

    preload: function (){
        console.dir(this)

        const width=this.scale.width
        const height=this.scale.height
       //显示文字 load，并且用 setOrigin将原点设置为0.5，以使其在垂直和水平方向上居中
        var play=this.add.bitmapText(width*0.5,height*0.5, "myfont", "载入游戏",28).setOrigin(0.5)
       


    },

    create: function ()
    {
        console.log('%c Preload ', 'background: green; color: white; display: block;');
       // this.scene.start('menu');
    }

})


export {Preload}