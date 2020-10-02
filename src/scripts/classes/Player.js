import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super (scene, 250, 750, 'rs');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.setScale(0.5);
    this.body.setCollideWorldBounds(true);
  }

  move(){
    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-500);
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(500);
    } else {
      this.body.setVelocityX(0);
    }
  }


}

