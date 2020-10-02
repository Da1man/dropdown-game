import Phaser from 'phaser';

export default class Sber extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super (scene, Phaser.Math.Between(10, scene.sys.game.config.width - 10), 0, 'sber');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.setScale(0.2);
    this.isCollected = false;
    this.scene.events.on('update', this.update, this);

    this.move()
  }

  move(velocity) {
    this.body.setVelocityY(velocity);
  }

  update(){
    if (this.body) {
      if (this.isCollected || this.body.y > this.scene.sys.game.config.height-10) {
        if (this.body.y > this.scene.sys.game.config.height-10) {
          this.scene.updateMissedScore(--this.scene.missed)
        }
        this.body.enable = false;
        this.body.y = -50;
        this.setVisible(false);
        this.setActive(false);
        this.body.destroy();
        this.isCollected = false;
      }
    }

  }

}
