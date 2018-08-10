## Phaser 3 - ES6 Enabled
A boilerplate for the phaser 3 game engine, with ES6 set up with Parcel. Allows ES6 and includes automatic refreshing and ESLint.
This setup is for anyone who wants to jump straight into making the game without worrying about dependancies. It also contains no demo assets, which usually end up being removed straight away anyway.

### Install:
Simply clone this repositry and run `npm install` in the project root.

### Running the project:
Run `npm run` in the project root.

### The project:
- The configuration for your game canvas is setup inside `index.js` in the project root. 
- The webpage and styling it is setup on is contained in `index.html` and `style.css` in the project root.
- Your games scene is set up inside `game/scenes/default.js`. If you add a new scene be sure to export it from `game/scenes/index.js`
- Assets belong in `game/assets/`
