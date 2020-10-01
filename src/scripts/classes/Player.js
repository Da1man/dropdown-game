import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super (scene, 250, 750, 'bucket');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.setScale(0.1);
    this.body.setCollideWorldBounds(true);
  }

  move(){
    // console.log(this.scene.cursors)
    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-400);
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(400);
    } else {
      this.body.setVelocityX(0);
    }

    // this.scene.input.keyboard.on('tapLeftSide', () => console.log('AAAAAAAAAAAAAAaaaa'), this)
  }


}

