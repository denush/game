import { canvas } from './canvas';

const viewport = {
	unit: null,

	x: null,
	y: null,

	init(unit) {
		this.unit = unit;

		this.x = this.unit.x - canvas.width / 2 + this.unit.width / 2;
		this.y = this.unit.y - canvas.height / 2 + this.unit.height / 2;
	},

	update() {
		this.x = this.unit.x - canvas.width / 2 + this.unit.width / 2;
		this.y = this.unit.y - canvas.height / 2 + this.unit.height / 2;
	}
};

export default viewport;