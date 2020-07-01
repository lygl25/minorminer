var Menu = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

        function Preloader() {
            Phaser.Scene.call(this, { key: 'menu' });
        },

    preload: function () {



    },

    create: function () {
        //获取场景的宽高
        const swidth = this.scale.width
        const sheight = this.scale.height
        console.log('%c Menu ', 'background: green; color: white; display: block;');
        //创建背景
        console.dir("menu")
        var menu = this.make.tilemap({ key: 'menu' });
         //加入瓦片地图的背景图片 lavaTiles 是图块集名字，tiles 是对应的图片
        var tiles = menu.addTilesetImage("lavaTiles", "tiles");
        //"lavaLayer" 是tiled文件里面 图层的名字,并把背景充满整个场景大小
         menu.createStaticLayer("lavaLayer",tiles) .setDisplaySize(swidth, sheight)
        
         this.add.sprite(swidth * 0.5, sheight * 0.5+56, "player",5); //创建一个精灵
      
     
        
        // 游戏标题
        this.titleText = this.add.bitmapText(swidth * 0.5, sheight * 0.5, "myfont", "小  矿  工", 64).setOrigin(0.5)
        // 游戏提示
        this.startText = this.add.bitmapText(swidth * 0.5, sheight * 0.5 + 100, "myfont", "请按‘X’开始", 24).setOrigin(0.5)
        // 底部网址
        this.add.bitmapText(swidth * 0.5, sheight - 12, 'myfont', 'A game by jikeyt.com', 12).setOrigin(0.5)

    },

    update: function () {

        this.shakeText(this.titleText);
        this.shakeText(this.startText, null, this.scale.height / 2 + 100);
    },
    shakeText: function (text, x, y) {
        //菜单场景上的文字抖动效果
        if (text) {
            var randX = Math.random();
            var randY = Math.random();
            if (parseInt(this.time.now) % 2) {
                //数值越小抖动的幅度越大

                randX *= -1;
                randY *= -1;
            }

            x = x || this.scale.width / 2;
            y = y || this.scale.height / 2;

            text.x = x + randX;
            text.y = y + randY;
        }
    }

})


export { Menu }