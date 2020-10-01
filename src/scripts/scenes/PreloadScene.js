import Phaser from 'phaser';
import bombPng from '../../assets/sprites/bomb.png';
import coinsPng from '../../assets/sprites/coins.png';
import coinsJson from '../../assets/sprites/coins';
import backgroundJpg from "../../assets/sprites/background.jpg";
import bucketPng from "../../assets/sprites/bucket.png";


import mainTheme from "../../assets/sounds/theme.mp3";
import explosionMp3 from "../../assets/sounds/explosion.mp3";
import coinMp3 from "../../assets/sounds/coin.mp3";
import failMp3 from "../../assets/sounds/fail.mp3";




export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload')
  }

  preload() {
    console.log('PreloadScene preload');
    this.preloadAssets();
  }

  preloadAssets() {
    this.load.image('bg', backgroundJpg);
    this.load.image('bomb', bombPng);
    this.load.image('bucket', bucketPng);
    this.load.atlas('coin', coinsPng, coinsJson)

    this.load.audio('theme', mainTheme )
    this.load.audio('explosion', explosionMp3 )
    this.load.audio('collectCoin', coinMp3 )
    this.load.audio('fail', failMp3 )
  }

  create() {
    console.log('PreloadScene create');
    this.scene.start('Game')
  }
}