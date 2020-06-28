import { actions } from '../dependency';
// import { timers } from '../dependency';
import { events } from '../dependency'

class Unit {

	constructor(id, x, y) {
		this.id = id;

		this.x = x;
		this.y = y;

		this.width = 50;
		this.height = 50;

		this.sightDirection = 'south';

		this.speed = 5;

		this.color = 'darkgreen';

		/* triggers */
		this.moveUp = false;
		this.moveDown = false;
		this.moveLeft = false;
		this.moveRight = false;

		this.walk = false;

		/* stats */
		this.totalHealth = 100;
		this.currentHealth = 70;

		this.attackPower = 20;
		this.attackRange = 100;

		/* state */
		this.isDead = false;
	}

	get top()			{ return this.y; }
	get bottom() 	{ return this.y + this.height; }
	get left() 		{ return this.x; }
	get right() 	{ return this.x + this.width; }
	get centerX() { return this.x + this.width / 2; }
	get centerY() { return this.y + this.height / 2; }

	update() {
		if (this.currentHealth < 0) {
			this.currentHealth = 0;
		}
		if (this.currentHealth === 0 && !this.isDead) {
			this.isDead = true;
			this.emit('unit-died', this);
		}

		if (this.moveUp) {
			this.y -= this.walk ? this.speed * 0.5 : this.speed;
		}
		if (this.moveDown) {
			this.y += this.walk ? this.speed * 0.5 : this.speed;
		}
		if (this.moveLeft) {
			this.x -= this.walk ? this.speed * 0.5 : this.speed;
		}
		if (this.moveRight) {
			this.x += this.walk ? this.speed * 0.5 : this.speed;
		}
	}

	/* triggers */
	attack() {
		this.act('attack', this);
	}

	/* events */
	act(actionName, options) {
		actions[actionName](options);
	}

	emit(eventName, options) {
		events[eventName](options);
	}
}

export default Unit;