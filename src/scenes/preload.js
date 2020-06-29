import tiles from '../assets/img/tiles.png'
import outsideTiles from '../assets/img/outside-tiles.png'


var Preload = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

        function Preloader() {
            Phaser.Scene.call(this, { key: 'preload' });
        },

    preload: function () {
        console.dir(this)
        //获取场景的宽高
        const width = this.scale.width
        const height = this.scale.height
        //显示“载入游戏”文字，并且用 setOrigin将原点设置为0.5，以使其在垂直和水平方向上居中
        var loadingText = this.add.bitmapText(width * 0.5, height * 0.5 - 32, "myfont", "载入游戏", 18).setOrigin(0.5)
        //添加进度条图片
        var preloadBar = this.add.sprite(width * 0.5, height * 0.5, 'load-bar').setOrigin(0.5);
      
        //创建进度百分比数值的文本
        var percentNum = this.make.text({
            x: width / 2,
            y: height / 2,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentNum.setOrigin(0.5, 0.5);
        //开始游戏加载资源的进度条和数值的显示
        this.load.on('progress', function (value) {
            //进度条上面百分比数值的增加
            percentNum.setText(parseInt(value * 100) + '%');
            //进度条图片显示的进度
            preloadBar.setCrop(0, 0, preloadBar.displayWidth * value, preloadBar.displayHeight)

        });
        //资源加载结束后，进度信息全部消失
        this.load.on('complete', function () {
            loadingText.destroy();
            percentNum.destroy();
            preloadBar.destroy();
        });


        // load tiles/sprites/images
        this.load.image('tiles', tiles);
        this.load.image('outside-tiles', outsideTiles);



        // load audio assets
        this.load.audio('intro', 'static/audio/intro.mp3');
        this.load.audio('start_game', 'static/audio/start_game.wav');



    },

    create: function () {

        console.log('%c Preload ', 'background: green; color: white; display: block;');

         this.scene.start('menu');
    }

})


export { Preload }