import Phaser from 'phaser';

export default class Gorod extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, Phaser.Math.Between(20, scene.sys.game.config.width - 20), 0, 'gorod');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.setScale(0.2,0.2);
    this.setOrigin(0);
    this.body.setVelocityY(100);
  }

  move(velocity) {
    this.body.setVelocityY(velocity);
  }


}
