import Phaser from 'phaser';
import Coin from "../classes/Coin";
import Bomb from "../classes/Bomb";
import DropItems from "../classes/Coins";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  }


  create() {
    this.createBackground();
    this.createCoins();
    this.createBombs();
    console.log('GameScene create');
  }

  createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
  }

  createCoins() {
    // console.log(this.physics.world)
    this.createItems = new DropItems(this.scene);
    // this.coins = new Coin(this);
  }

  createBombs() {
    this.bomb = new Bomb(this, 100, 100);
  }

}
