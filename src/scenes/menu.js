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
                //获取场景的宽高
                const swidth = this.scale.width
                const sheight = this.scale.height
        console.log('%c Menu ', 'background: green; color: white; display: block;');
        // 游戏标题
        var titleText = this.add.bitmapText(swidth * 0.5, sheight * 0.5, "myfont", "小  矿  工", 96).setOrigin(0.5)
        // 游戏提示
        var startText = this.add.bitmapText(swidth * 0.5, sheight * 0.5+100, "myfont", "请按‘X’开始", 32).setOrigin(0.5)
         // 底部网址
        this.add.bitmapText(swidth * 0.5, sheight-22, 'myfont', 'A game by jikeyt.com', 24).setOrigin(0.5)
   
    }

})


export {Menu}