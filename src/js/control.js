import { viewport } from './dependency';

const control = {

	unit: null,

	mouse: {
		clientX: 0,
		clientY: 0,

		get x() { return this.clientX + viewport.x; },
		get y() { return this.clientY + viewport.y; },
		get worldX() { return this.x; },
		get worldY() { return this.y; }
	},

	init(unit) {

		this._initMouse();
		this._preventMouseDefault();

		this.unit = unit;

		document.addEventListener('mousemove', event => {
			// if (this.mouse.x < unit.centerX) {
			// 	unit.sightDirection = 'west';
			// } else {
			// 	unit.sightDirection = 'east';
			// }
			this._getSightDirection(unit);
		});

		document.addEventListener('click', event => {
			this.unit.attack();
		});

		document.addEventListener('keydown', event => {
			if (event.code === 'KeyW') { this.unit.moveUp = true; }
			if (event.code === 'KeyS') { this.unit.moveDown = true; }
			if (event.code === 'KeyA') { this.unit.moveLeft = true; }
			if (event.code === 'KeyD') { this.unit.moveRight = true; }

			if (event.code === 'ShiftLeft') { this.unit.walk = true; }
		});

		document.addEventListener('keyup', event => {
			if (event.code === 'KeyW') { this.unit.moveUp = false; }
			if (event.code === 'KeyS') { this.unit.moveDown = false; }
			if (event.code === 'KeyA') { this.unit.moveLeft = false; }
			if (event.code === 'KeyD') { this.unit.moveRight = false; }

			if (event.code === 'ShiftLeft') { this.unit.walk = false; }
		});
	},

	/* внутренние вспомогательные методы */
	_initMouse() {
		document.addEventListener('mousemove', event => {
			this.mouse.clientX = event.clientX;
			this.mouse.clientY = event.clientY;
		})
	},

	_getSightDirection(unit) {

		const x = this.mouse.x;
		const y = this.mouse.y;

		/* primary line */
		const y1 = -x + unit.centerX + unit.centerY;

		/* primary line */
		const y2 = x - unit.centerX + unit.centerY;

		if (y < y1 && y < y2) {
			unit.sightDirection = 'north';
		}
		else if (y > y1 && y > y2) {
			unit.sightDirection = 'south';
		}
		else if (y < y1 && y > y2) {
			unit.sightDirection = 'west';
		}
		else if (y > y1 && y < y2) {
			unit.sightDirection = 'east';
		}


	},

	_preventMouseDefault() {
		const eventList = [ 'mousedown', 'dblclick', 'contextmenu' ];

		for (let eventName of eventList) {

			document.addEventListener(eventName, event => {
				event.preventDefault();
			});

		}
	}

};

export default control;