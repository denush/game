import { canvas, ctx } from './canvas';
import units from './units';
import control from './control';
import viewport from './viewport';
import ui from './ui';
import timers from './timers';
import ai from './ai';

import render from './render';

const game = {

	backgroundColor: 'lightblue',

	init() {
		units.init();
		viewport.init(units.hero);
		control.init(units.hero);
		ui.init();
		ai.init();
	},

	update() {
		ai.update();
		timers.update();
		units.update();
		ui.update();

		viewport.update();
	},

	render() {
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		this._renderBackground();
		this._renderMap();

		render.units(ctx, viewport, units);
		render.ui(ctx, viewport, ui);

	},

	_renderBackground() {
		ctx.fillStyle = this.backgroundColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	},

	_renderMap() {
		const dx = viewport.x;
		const dy = viewport.y;

		ctx.fillStyle = 'lightgreen';
		ctx.fillRect(0 - dx, 0 - dy, 800, 600);
	}

};

export default game;