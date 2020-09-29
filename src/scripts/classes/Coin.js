import Phaser from 'phaser';

export default class Coin extends Phaser.GameObjects.Sprite {
  constructor(scene, velocity) {
    super (scene, Phaser.Math.Between(50, scene.sys.game.config.width - 50), 0, 'coin', 'coin1');
    this.scene = scene;
    this.velocity = velocity
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.setScale(0.7);

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
  }

  move() {
    this.body.setVelocityY(this.velocity);
  }


}
