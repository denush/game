import Unit from './Unit';

const hero = new Unit(200, 200);
hero.color = 'darkblue';

const list = [
	new Unit(300, 300),
	new Unit(500, 500),
	new Unit(100, 100),
	new Unit(150, 400),
	new Unit(400, 150),
	new Unit(450, 350)
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