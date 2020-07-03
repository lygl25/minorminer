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
        //"lavaLayer" 是tiled文件里面 图层的名字,用setDisplaySize把背景充满整个场景大小
         menu.createStaticLayer("lavaLayer",tiles) .setDisplaySize(swidth, sheight)
        //添加一个角色到背景中间，最后一个参数是 第5帧的图片
         this.add.sprite(swidth * 0.5, sheight * 0.5+56, "player",5); //创建一个精灵
      
        
        
        // 游戏标题
        this.titleText = this.add.bitmapText(swidth * 0.5, sheight * 0.5, "myfont", "小  矿  工", 64).setOrigin(0.5)
        // 游戏提示
        this.startText = this.add.bitmapText(swidth * 0.5, sheight * 0.5 + 100, "myfont", "请按‘X’开始", 24).setOrigin(0.5)
        // 底部网址
        this.add.bitmapText(swidth * 0.5, sheight - 12, 'myfont', 'A game by jikeyt.com', 12).setOrigin(0.5)

        //把图片添加为粒子，熔岩的粒子，可以用于背景热效果和熔岩飞溅
        var particles = this.add.particles('particle');
        
        //熔岩随机喷溅效果
        //5000是粒子寿命，20是发射频率，也就是没20毫秒发射一个粒子，每个粒子5秒后消失
        this.lavaSplash=particles.createEmitter({
            x: 0,//X 位置
            y: 0, // y位置
            lifespan:5000,//粒子寿命，单位毫秒
            frequency:20,//发射频率，单位毫秒，设置1000显示效果是 1秒钟发射一个粒子
            maxParticles:200,//发射粒子总数， 发射完就停止执行了
            scale:{min:0.3,max: 1.5},
            //speedY:[-280,-150],//Y方向的最小和最大速度
            //speedX:[-50,150],
          // angle: { min: 140, max: 180 },
            rotate:{ min: 0, max: 0 },
            gravityY: 500,
            speed: { min: 150, max: 280 },//粒子发射的速度，与重力相结合
            angle: { min: 250, max: 290 }, //粒子发射的方向，里面是角度值
            on:false
           // blendMode: 'ADD'  //粒子重叠到一起 会叠加颜色
            
        });
         //延时执行熔岩喷溅，每700毫秒关闭一次熔岩喷射的执行
         this.time.addEvent({ delay: 700, callback: this.onEvent, callbackScope: this, loop: true });
        
        //粒子透明度
        //this.emitter.setAlpha(0.2)
        

    },

    update: function () {

        this.shakeText(this.titleText);
        this.shakeText(this.startText, null, this.scale.height / 2 + 100);
      
        if(Math.random()>0.97 && !this.lavaSplash.on){
              
            this.lavaSplash.setPosition( Math.floor(Math.random() * this.scale.width),this.scale.height-28)
                this.lavaSplash.start()
               console.log(this.lavaSplash.on);
               
        }


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
    },
    onEvent:function(){
       // 延时试行事件，关闭熔岩喷射
        this.lavaSplash.on=false
    }

})


export { Menu }