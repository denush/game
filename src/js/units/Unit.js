class Unit {

	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.width = 50;
		this.height = 50;

		this.speed = 5;

		this.color = 'darkgreen';

		/* triggers */
		this.moveUp = false;
		this.moveDown = false;
		this.moveLeft = false;
		this.moveRight = false;
	}

	update() {
		if (this.moveUp) {
			this.y -= this.speed;
		}
		if (this.moveDown) {
			this.y += this.speed;
		}
		if (this.moveLeft) {
			this.x -= this.speed;
		}
		if (this.moveRight) {
			this.x += this.speed;
		}
	}

}

export default Unit;