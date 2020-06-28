import loadBar_png from '../assets/img/load-bar.png'
import myfont_png from '../assets/font/myfont.png'
import myfont_xml from '../assets/font/myfont.xml'


var Boot=new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'boot' });
    },

    preload: function (){
               //加载进度条图片
               this.load.image('load-bar', loadBar_png);
               this.load.bitmapFont('myfont', myfont_png,myfont_xml);


    },

    create: function ()
    {
        console.log('%c Boot ', 'background: green; color: white; display: block;');
       
        this.scene.start('preload');
    }

})


export {Boot}