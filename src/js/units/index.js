import Unit from './Unit';

const hero = new Unit(1, 200, 200);
hero.color = 'darkblue';

const list = [
	new Unit(2, 300, 300),
	new Unit(3, 500, 500),
	new Unit(4, 100, 100),
	new Unit(5, 150, 400),
	new Unit(6, 400, 150),
	new Unit(7, 450, 350)
];

const units = {
	hero: null,
	list: [],

	init() {
		this.hero = hero;
		this.list.push(hero);
		this.list = this.list.concat(list);
	},

	update() {
		for (let unit of this.list) {
			unit.update();
		}
	}
};

export default units;