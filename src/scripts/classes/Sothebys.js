import Phaser from 'phaser';

export default class Sothebys extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, Phaser.Math.Between(20, scene.sys.game.config.width - 20), 0, 'sothebys');
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
