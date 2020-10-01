import Phaser from "phaser";
import PreloadScene from "./scripts/scenes/PreloadScene";
import BootScene from "./scripts/scenes/BootScene";
import GameoverScene from "./scripts/scenes/GameoverScene";
import GameScene from "./scripts/scenes/GameScene";



const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 800,
  scene: [BootScene, PreloadScene, GameoverScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
};

const game = new Phaser.Game(config);
