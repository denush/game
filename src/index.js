'use script';

import game from './js/game';

game.init();

function loop() {

	requestAnimationFrame(loop);

	game.update();
	game.render();

}

requestAnimationFrame(loop);