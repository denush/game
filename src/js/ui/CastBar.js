import { timers } from '../dependency';

class CastBar {
	constructor(unit) {
		this.unit = unit;

		this.x = this.unit.x;
		this.y = this.unit.y;

		this.maxWidth = 50;
		this.width = 0;
		this.height = 10;

		this.distance = 30;
	}

	update() {
		this.x = this.unit.x;
		this.y = this.unit.y;

		const timer = timers.list[this.unit.id + 'casts'];
		if (!timer) {
			return;
		}
		this.width = this.maxWidth * timer.getFraction();
	}
}

export default CastBar;