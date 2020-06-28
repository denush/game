import HealthBar from './HealthBar';

const ui = {

	healthBarList: [],

	init(units) {
		for (let unit of units.list) {
			const temp = new HealthBar(unit);
			this.healthBarList.push(temp);
		}
	},

	update() {
		for (let bar of this.healthBarList) {
			bar.update();
		}
	},

	// future
	createHealthBar(unit) {

	},
	deleteHealthBar(unit) {

	},

};

export default ui;

