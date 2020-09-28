import Phaser from 'phaser';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start')
  }

  preload() {
    console.log('StartScene preload')
  }

  create() {
    console.log('StartScene create');
    this.scene.start('Game')
  }
}
