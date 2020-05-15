import { canvas, ctx } from './canvas';
import units from './units';
import control from './control';
import viewport from './viewport';

const game = {

	backgroundColor: 'lightblue',

	init() {
		units.init();
		control.init(units.hero);
		viewport.init(units.hero);
	},

	update() {
		units.update();
		viewport.update();
	},

	render() {
		
		this._renderBackground();
		this._renderMap();
		this._renderUnits();

	},

	_renderBackground() {
		ctx.fillStyle = this.backgroundColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	},

	_renderUnits() {
		const dx = viewport.x;
		const dy = viewport.y;

		for (let unit of units.list) {
			ctx.fillStyle = unit.color;
			ctx.fillRect(unit.x - dx, unit.y - dy, unit.width, unit.height);
		}
	},

	_renderMap() {
		const dx = viewport.x;
		const dy = viewport.y;

		ctx.fillStyle = 'lightgreen';
		ctx.fillRect(0 - dx, 0 - dy, 800, 600);
	}

};

export default game;