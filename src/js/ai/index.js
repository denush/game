import { units } from '../dependency';
import Bot from './aiUser';
import { Point } from '../lib';

const ai = {

	botList: [],

	init() {
		this.botList.push(new Bot(units.list[1]));

		/* test */
		const toUnit = units.list[5];

		const task1 = {
			type: 'move',

			// x: this.unit.x,
			// y: this.unit.y,

			destination: new Point(toUnit.x, toUnit.y),
		};
		const task2 = {
			type: 'moveToUnit',

			// x: this.unit.x,
			// y: this.unit.y,

			destination: units.hero,
		};
		this.botList[0].taskList.push(task2);
	},

	update() {
		for (let bot of this.botList) {
			bot.update();
		}
	}

};

export default ai;