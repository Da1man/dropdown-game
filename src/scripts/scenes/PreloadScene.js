import Phaser from 'phaser';
import bombPng from '../../assets/sprites/bomb.png';
import coinsPng from '../../assets/sprites/coins.png';
import coinsJson from '../../assets/sprites/coins';
import backgroundJpg from "../../assets/sprites/background.jpg";


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
    this.load.atlas('coin', coinsPng, coinsJson)
  }

  create() {
    console.log('PreloadScene create');
    this.scene.start('Start')
  }
}
