import Phaser from 'phaser';
import backgroundJpg from '../../assets/sprites/background.jpg';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot')
  }

  preload() {
    console.log('BootScene preload');

  }

  create() {
    console.log('BootScene create');
    this.scene.start('Preload')
  }
}
