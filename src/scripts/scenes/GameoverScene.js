import Phaser from 'phaser';

export default class GameoverScene extends Phaser.Scene {
  constructor() {
    super('Gameover')
  }

  preload() {
  }

  create(data) {
    data.sounds.theme.stop();
    this.game.config.backgroundColor.setTo(0,0,0,.5)
    this.add.text(this.sys.game.config.width / 2,300, 'GAME OVER',{
      font: '40px CurseCasual',
    }).setOrigin(.5)

    this.restartButton = this.add.text(this.sys.game.config.width / 2,400, 'TRY AGAIN', {
      font: '30px CurseCasual',
    }).setOrigin(0.5).setInteractive()

    this.add.text(this.sys.game.config.width / 2,500, `Your Score: ${data.score}`, {
      font: '30px CurseCasual',
    }).setOrigin(0.5)

    this.restartButton.on('pointerover', () => this.onHoverIn());
    this.restartButton.on('pointerout', () => this.onHoverOut());
    this.restartButton.on('pointerdown', () => this.onHoverDown());

  }

  onHoverIn() {
    this.restartButton.setStyle({
      fill: '#ff0',
    })
  }

  onHoverOut() {
    this.restartButton.setStyle({
      fill: '#fff',
    })
  }

  onHoverDown() {
    console.log('Button Clicked')
    this.scene.start('Boot')
  }
}
