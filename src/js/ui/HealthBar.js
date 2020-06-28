class HealthBar {
	constructor(unit) {
		this.unit = unit;

		this.x = this.unit.x;
		this.y = this.unit.y;

		this.width = 50;
		this.height = 10;

		this.distance = 10;
	}

	update() {
		this.x = this.unit.x;
		this.y = this.unit.y;
	}
}

export default HealthBar;