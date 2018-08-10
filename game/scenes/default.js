import Phaser from "phaser";
import config from "../../constants";

class DefaultScene extends Phaser.Scene {
  constructor() {
    super({ key: "DefaultScene" });
    this.time = null;
  }

  preload() {}

  create() {
    this.add.text(16, 16, "Phaser ES6 loaded :)");
    this.add.text(16, 40, "Happy Development!");
    this.time = this.add.text(130, 300, "Time:");
  }

  update() {
    let now = new Date();
    this.time.setText(now.toString());
  }
}

export default DefaultScene;
