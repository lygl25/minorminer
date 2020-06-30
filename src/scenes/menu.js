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
        // 游戏标题
        this.titleText = this.add.bitmapText(swidth * 0.5, sheight * 0.5, "myfont", "小  矿  工", 96).setOrigin(0.5)
        // 游戏提示
        this.startText = this.add.bitmapText(swidth * 0.5, sheight * 0.5 + 100, "myfont", "请按‘X’开始", 32).setOrigin(0.5)
        // 底部网址
        this.add.bitmapText(swidth * 0.5, sheight - 22, 'myfont', 'A game by jikeyt.com', 24).setOrigin(0.5)

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

                randX *= -3;
                randY *= -3;
            }

            x = x || this.scale.width / 2;
            y = y || this.scale.height / 2;

            text.x = x + randX;
            text.y = y + randY;
        }
    }

})


export { Menu }