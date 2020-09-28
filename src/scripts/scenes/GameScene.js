import Phaser from 'phaser';
import Coin from "../classes/Coin";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  }


  create() {
    this.coins = new Coin(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2);
    console.log('GameScene create');
  }
}
