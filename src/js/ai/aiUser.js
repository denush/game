import { getPointDirection } from '../auxiliary';

class Bot {

	constructor(unit) {
		this.unit = unit;

		this.taskList = [];
		this.currentTask = null;
	}

	update() {
		// this.unit.moveUp = true;
		if (this.taskList.length) {
			this.currentTask = this.taskList[0];
		}

		if (this.currentTask) {
			const task = this.currentTask;
			const type = this.currentTask.type;
			// console.log(this.currentTask);
			switch (type) {

				case 'move': {

					const direction = getPointDirection(task.destination, this.unit);
					// console.log(direction);

					switch(direction) {
						case 'north':
							this.unit.moveUp = true;
							this.unit.moveDown = false;
							this.unit.moveLeft = false;
							this.unit.moveRight = false;
							break;
						case 'south':
							this.unit.moveUp = false;
							this.unit.moveDown = true;
							this.unit.moveLeft = false;
							this.unit.moveRight = false;
							break;
						case 'west':
							this.unit.moveUp = false;
							this.unit.moveDown = false;
							this.unit.moveLeft = true;
							this.unit.moveRight = false;
							break;
						case 'east':
							this.unit.moveUp = false;
							this.unit.moveDown = false;
							this.unit.moveLeft = false;
							this.unit.moveRight = true;
							break;
					}

					break;
				}

				case 'moveToUnit': {

					this.unit.walk = true;

					const direction = getPointDirection({ x: task.destination.x, y: task.destination.y }, this.unit);
					// console.log(direction);

					switch(direction) {
						case 'north':
							this.unit.moveUp = true;
							this.unit.moveDown = false;
							this.unit.moveLeft = false;
							this.unit.moveRight = false;
							break;
						case 'south':
							this.unit.moveUp = false;
							this.unit.moveDown = true;
							this.unit.moveLeft = false;
							this.unit.moveRight = false;
							break;
						case 'west':
							this.unit.moveUp = false;
							this.unit.moveDown = false;
							this.unit.moveLeft = true;
							this.unit.moveRight = false;
							break;
						case 'east':
							this.unit.moveUp = false;
							this.unit.moveDown = false;
							this.unit.moveLeft = false;
							this.unit.moveRight = true;
							break;
					}

					break;
				}

			}
		}
	}

	_moveTo() {

	}
}

export default Bot;