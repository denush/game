// функция подсчета фпс
function fc(now) {
	const duration = now - fc.elapsed;

	if (duration < 1000) {
		++fc.fps;
	}
	else {
		fc.block.textContent = 'FPS: ' + fc.fps;

		fc.elapsed = Date.now();
		fc.fps = 0;
	}
}

fc.fps = 0;

fc.block = document.createElement('div');
fc.block.className = 'fps-block';

document.body.append(fc.block);

export default fc;