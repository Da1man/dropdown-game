import Phaser from 'phaser';

export default class Bomb extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, Phaser.Math.Between(10, scene.sys.game.config.width - 10), 0, 'bomb');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.setScale(0.1,0.1);
    this.setOrigin(0);
    this.body.setVelocityY(100);
  }

  move(velocity) {
    this.body.setVelocityY(velocity);
  }


}
