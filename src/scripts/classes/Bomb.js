import Phaser from 'phaser';

export default class Bomb extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'bomb');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.setScale(0.1,0.1);
    this.setOrigin(0);
    this.body.setVelocityY(100);
  }


}
