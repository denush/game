import { viewport } from './dependency';
import { units } from './dependency';

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
			this._setSightDirection(unit);
			this._setTarget();
		});

		document.addEventListener('click', event => {
			this.unit.attack();
		});

		document.addEventListener('keydown', event => {
			// console.log(event.code);

			if (event.code === 'KeyW') { this.unit.moveUp = true; }
			if (event.code === 'KeyS') { this.unit.moveDown = true; }
			if (event.code === 'KeyA') { this.unit.moveLeft = true; }
			if (event.code === 'KeyD') { this.unit.moveRight = true; }

			if (event.code === 'ShiftLeft') { this.unit.walk = true; }

			if (event.code === 'Digit4') { this.unit.cast('heal'); }
			if (event.code === 'Digit5') { this.unit.cast('revive'); }
			if (event.code === 'Space') { this.unit.stopCast(); }
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

	_setSightDirection(unit) {

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

	_setTarget() {
		const units = this._getUnitsUnderCursor();
		if (units.length) {
			this.unit.target = units[0];
		} else {
			this.unit.target = null;
		}
	},

	_getUnitsUnderCursor() {
		const result = [];

		for (let unit of units.list) {
			if (this._isUnitUnderMouse(unit)) {
				result.push(unit);
			}
		}

		return result;
	},

	_isUnitUnderMouse(unit) {
		if (this.mouse.x < unit.left || this.mouse.x > unit.right) return false;
		if (this.mouse.y < unit.top || this.mouse.y > unit.bottom) return false;

		return true;
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