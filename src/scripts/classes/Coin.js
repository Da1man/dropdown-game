import Phaser from 'phaser';

export default class Coin extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super (scene, Phaser.Math.Between(10, scene.sys.game.config.width - 10), 0, 'coin', 'coin1');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.setScale(0.7);
    this.isCollected = false;
    this.scene.events.on('update', this.update, this);

    // Сгенерировать набор фреймов текстуры, необходимых для анимации

    const frames = this.scene.anims.generateFrameNames('coin', {
      prefix: 'coin',
      start: 1,
      end: 6,
    });

    // Создать новую анимацию на основе полученного набора фреймов

    this.scene.anims.create({
      key: 'spinCoin',
      frames: frames,
      frameRate: 10,
      repeat: -1,
    })

    // Запустить анимацию

    this.play('spinCoin')

    this.move()
  }

  move(velocity) {
    this.body.setVelocityY(velocity);
  }

  update(){
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
