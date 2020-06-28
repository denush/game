'use script';


import game from './js/game';
import fc from './fpsCounter';

game.init();

function loop() {

	requestAnimationFrame(loop);

	fc( Date.now() );

	game.update();
	game.render();

}

requestAnimationFrame(loop);