import Phaser from 'phaser';
import Coin from "./Coin";

export default class Coins extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.scene.physics.world, scene);
    this.scene = scene;
    this.countMax = 20;
    this.countCoins = 15;
    this.countBombs = 5;

    this.timer = this.scene.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.createCoin,
      callbackScope: this,
    })
  }

  createCoin() {
    let coin;
    const velocity = Phaser.Math.Between(50, 150);
    this.add(coin = new Coin(this.scene.scene, velocity));
    coin.move();
    // const coin = new Coin(this.scene);
    console.log('Item created')
  }

}
