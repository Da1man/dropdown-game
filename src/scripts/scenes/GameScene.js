import Phaser from 'phaser';
import Coin from "../classes/Coin";
import Bomb from "../classes/Bomb";
import Player from "../classes/Player";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.score = 0;
    this.missed = 10;
  }

  create() {
    this.createBackground();
    this.createGroups();
    this.createPlayer();
    this.createCollisions();
    this.createCoinTimer();
    this.createBombTimer();
    this.createScore();
    this.createSounds();
  }

  createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
  }

  createCoinTimer() {
    this.scene.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.createCoins,
      callbackScope: this,
    })
  }

  createBombTimer() {
    this.scene.scene.time.addEvent({
      delay: 2000,
      loop: true,
      callback: this.createBomb,
      callbackScope: this,
    })
  }

  createGroups() {
    this.coins = this.physics.add.group();
    this.bombs = this.physics.add.group();
  }

  createPlayer() {
    this.player = new Player(this);
  }

  createCollisions() {
    this.physics.add.overlap(this.player, this.coins, this.onCoinCollect, undefined, this);
    this.physics.add.overlap(this.player, this.bombs, this.onBombHit, undefined, this)
  }

  onCoinCollect(source, target) {
    target.isCollected = true;
    this.updateScore(++this.score)
  }

  onBombHit(source, target) {
    this.scene.start('Gameover',{
      score: this.score,
    });
  }

  createCoins() {
    const coinVelocity = Phaser.Math.Between(50, 200);
    this.coin = new Coin(this);
    this.coins.add(this.coin);
    this.coin.move(coinVelocity);
  }

  createBomb() {
    const bombVelocity = Phaser.Math.Between(50, 400);
    this.bomb = new Bomb(this);
    this.bombs.add(this.bomb);
    this.bomb.move(bombVelocity);
  }

  createScore() {
    this.scoreText = this.add.text(20,20, 'Coins: 0', {
      fill: '#ffffff'
    }).setOrigin(0,0)
    this.missedScoreText = this.add.text(this.sys.game.config.width - 20, 20, `Miss: ${this.missed}`, {
      fill: '#ffffff'
    }).setOrigin(1,0)
  }

  updateScore(score) {
    this.scoreText.setText(`Coins: ${score}`);
  }

  updateMissedScore(score) {
    this.missedScoreText.setText(`Miss: ${score}`)
  }

  createSounds() {
    this.sound.add('theme', {volume:0.1, loop: true})
  }


  update(time, delta) {
    this.player.move();
    if (this.missed <= 0) {
      this.scene.start('Gameover', {
        score: this.score,
      })
    }
  }

}
