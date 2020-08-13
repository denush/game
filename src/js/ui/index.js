import { units } from '../dependency';
import HealthBar from './HealthBar';
import CastBar from './CastBar';

const ui = {

	target: null,

	healthBarList: [],
	castBarList: [],

	init() {
		this.target = units.hero.target;

		for (let unit of units.list) {
			const temp = new HealthBar(unit);
			this.healthBarList.push(temp);
		}
	},

	update() {
		this.target = units.hero.target;

		for (let bar of this.healthBarList) {
			bar.update();
		}

		for (let unit of units.list) {
			const index = this.castBarList.findIndex(bar => bar.unit === unit);
			const castBar = (index !== -1) ? this.castBarList[index] : null;

			if (unit.isCasting && !castBar) {
				this.castBarList.push(new CastBar(unit));
			} else if (!unit.isCasting && castBar) {
				this.castBarList.splice(index, 1);
			} else if (unit.isCasting && castBar) {
				castBar.update();
			}
		}
	},

	// future
	createHealthBar(unit) {

	},
	deleteHealthBar(unit) {

	},

};

export default ui;

