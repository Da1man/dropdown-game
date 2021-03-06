import Phaser from 'phaser';
import Coin from "../classes/Coin";
import Bomb from "../classes/Bomb";
import Player from "../classes/Player";
import Sothebys from "../classes/Sothebys";
import Kodo from "../classes/kodo";
import Gorod from "../classes/Gorod";
import Chistaya from "../classes/Chistaya";
import Rustrus from "../classes/Rustrus";
import Baltimor from "../classes/Baltimor";
import President from "../classes/president";
import Sber from "../classes/Sber";




export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
    this.leftTapPressed = false
    this.rightTapPressed = false
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
    if (!this.sys.game.device.os.desktop) {
      this.createMobileControls()
    }
  }

  createMobileControls() {

    const leftActiveBlock = this.add.rectangle(0,0,this.sys.game.config.width / 2, this.sys.game.config.height, 0x000000, 0)
    leftActiveBlock.setOrigin(0);
    leftActiveBlock.setInteractive();
    leftActiveBlock.on('pointerdown', () => this.leftSideTapDown(),this);
    leftActiveBlock.on('pointerup', () => this.leftSideTapUp(),this);

    const rightActiveBlock = this.add.rectangle(this.sys.game.config.width / 2,0,this.sys.game.config.width / 2, this.sys.game.config.height, 0x000000, 0)
    rightActiveBlock.setOrigin(0);
    rightActiveBlock.setInteractive();
    rightActiveBlock.on('pointerdown', () => this.rightSideTapDown(), this);
    rightActiveBlock.on('pointerup', () => this.rightSideTapUp(), this);

  }

  leftSideTapDown() {
    this.leftTapPressed = true;
  }
  leftSideTapUp() {
    this.leftTapPressed = false;
  }

  rightSideTapDown() {
    this.rightTapPressed = true
  }
  rightSideTapUp() {
    this.rightTapPressed = false
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
    this.updateScore(++this.score);
    this.sounds.collectCoin.play();
  }

  onBombHit(source, target) {
    this.sounds.explosion.play();
    this.scene.start('Gameover',{
      score: this.score,
      sounds: this.sounds,
      target: target,
    });
  }

  createCoins() {
    const randCoin = Phaser.Math.Between(2, 6)
    const coinVelocity = Phaser.Math.Between(50, 200);
    if (randCoin === 1) {
      this.coin = new Coin(this);
      this.coins.add(this.coin);
      this.coin.move(coinVelocity);
    } else if (randCoin === 2) {
      this.coin = new Chistaya(this);
      this.coins.add(this.coin);
      this.coin.move(coinVelocity);
    } else if (randCoin === 3) {
      this.coin = new Rustrus(this);
      this.coins.add(this.coin);
      this.coin.move(coinVelocity);
    } else if (randCoin === 4) {
      this.coin = new Baltimor(this);
      this.coins.add(this.coin);
      this.coin.move(coinVelocity);
    } else if (randCoin === 5) {
      this.coin = new President(this);
      this.coins.add(this.coin);
      this.coin.move(coinVelocity);
    } else if (randCoin === 6) {
      this.coin = new Sber(this);
      this.coins.add(this.coin);
      this.coin.move(coinVelocity);
    }
  }

  createBomb() {
    const randBomb = Phaser.Math.Between(1,3)
    const bombVelocity = Phaser.Math.Between(50, 400);
    if (randBomb === 1) {
      this.bomb = new Kodo(this);
      this.bombs.add(this.bomb);
      this.bomb.move(bombVelocity);
    } else if (randBomb === 2) {
      this.bomb = new Sothebys(this);
      this.bombs.add(this.bomb);
      this.bomb.move(bombVelocity);
    } else if (randBomb === 3) {
      this.bomb = new Gorod(this);
      this.bombs.add(this.bomb);
      this.bomb.move(bombVelocity);
    }

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
    this.sounds = {
      theme: this.sound.add('theme', {volume:0.3, loop: true}),
      explosion: this.sound.add('explosion',{volume: 0.1} ),
      collectCoin: this.sound.add('collectCoin', {volume: 0.2}),
      fail: this.sound.add('fail', {volume: 0.3}),
    };

    this.sounds.theme.play();
  }


  update(time, delta) {
    this.player.move();
    if (this.missed <= 0) {
      this.sounds.fail.play();
      this.scene.start('Gameover', {
        score: this.score,
        sounds: this.sounds,
      })
    }

    if (this.leftTapPressed) {
      this.player.body.setVelocityX(-500);
    } else if (this.rightTapPressed) {
      this.player.body.setVelocityX(500);
    }
  }

}
