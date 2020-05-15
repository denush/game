const control = {

	unit: null,

	init(unit) {
		this.unit = unit;

		document.addEventListener('keydown', event => {
			if (event.code === 'KeyW') { this.unit.moveUp = true; }
			if (event.code === 'KeyS') { this.unit.moveDown = true; }
			if (event.code === 'KeyA') { this.unit.moveLeft = true; }
			if (event.code === 'KeyD') { this.unit.moveRight = true; }
		});

		document.addEventListener('keyup', event => {
			if (event.code === 'KeyW') { this.unit.moveUp = false; }
			if (event.code === 'KeyS') { this.unit.moveDown = false; }
			if (event.code === 'KeyA') { this.unit.moveLeft = false; }
			if (event.code === 'KeyD') { this.unit.moveRight = false; }
		});
	}

};

export default control;