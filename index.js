import Phaser from "phaser";
import { DefaultScene } from "./game/scenes";
import constants from "./constants";

const config = {
  type: Phaser.AUTO,
  width: constants.WIDTH,
  height: constants.HEIGHT,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [DefaultScene],
  backgroundColor: constants.colors.CHERRY,
};

new Phaser.Game(config);

// Small fix to force a hard reload
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
    throw "Ignore this error: Reloading page..";
  });
}
