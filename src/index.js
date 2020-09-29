import Phaser from "phaser";
import PreloadScene from "./scripts/scenes/PreloadScene";
import BootScene from "./scripts/scenes/BootScene";
import StartScene from "./scripts/scenes/StartScene";
import GameScene from "./scripts/scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 800,
  scene: [BootScene, PreloadScene, StartScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
};

const game = new Phaser.Game(config);
