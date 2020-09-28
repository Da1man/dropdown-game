import Phaser from 'phaser';

export default class Coin extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super (scene, x, y, 'coin', 'coin1');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;

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


}
