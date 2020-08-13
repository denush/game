import { actions } from '../dependency';
import { timers } from '../dependency';
import { events } from '../dependency';
import { magic } from '../dependency';

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

		this.target = null;

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
		this.intelligence = 10;

		/* state */
		this.deadRecent = false; // юнит был мертв в предыдущем кадре
		this.aliveRecent = false; // юнит был жив в предыдущем кадре

		this.castingSpell = null;

		this.spells = [
			'revive',
			'heal'
		];

		/* 
			таргет выбирается динамически
			в зависимости от положения юнита.
			таргет можно залочить, чтобы
			сконцентрироваться на определенном юните
		*/
		this.target = null;
		this.targetIsLocked = false; // возможно нужно
																 // перенести в control
	}

	/* geometry getters */
	get top()			{ return this.y; }
	get bottom() 	{ return this.y + this.height; }
	get left() 		{ return this.x; }
	get right() 	{ return this.x + this.width; }
	get centerX() { return this.x + this.width / 2; }
	get centerY() { return this.y + this.height / 2; }

	/* unit state getters */
	get isDead() { return this.currentHealth === 0; }
	get isCasting() { return !!this.castingSpell }

	/* update state methods */
	update() {
		this._updateHealth();
		this._updateMovement();
	}

	_updateHealth() {
		if (this.currentHealth < 0) {
			this.currentHealth = 0;
		} else if (this.currentHealth > this.totalHealth) {
			this.currentHealth = this.totalHealth;
		}

		if (this.currentHealth === 0) {
			this.deadRecent = true;
		} else if (this.currentHealth > 0) {
			this.aliveRecent = true;
		}

		if (this.isDead && this.aliveRecent) {
			this.aliveRecent = false;

			const options = {
				unit: this
			};
			this.emit('unit-died', options);
		} else if (!this.isDead && this.deadRecent) {
			this.deadRecent = false;

			const options = {
				unit: this
			};
			this.emit('unit-revived', options);
		}
	}

	_updateMovement() {
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
		const options = {
			unit: this,
			target: this.target
		};
		this.act('attack', options);
	}

	act(actionName, options) {
		actions[actionName](options);
	}

	emit(eventName, options) {
		events[eventName](options);
	}

	cast(spellName) {
		const spell = magic[spellName];

		if (spell.needTarget && !this.target) {
			return;
		}

		this.castingSpell = spell;

		const options = {
			unit: this,
			target: this.target
		};

		timers.create(this.id + 'casts', spell.duration, () => {
			spell.apply(options);
			this.castingSpell = null;
		});
	}

	stopCast() {
		if (!this.isCasting) {
			return;
		}

		timers.cancel(this.id + 'casts');

		this.castingSpell = null;
	}
}

export default Unit;