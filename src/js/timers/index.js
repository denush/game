import Timer from './Timer';

const timers = {

	list: {},

	create(timer_id, duration, callback) {
		this.list[timer_id] = new Timer(timer_id, duration, callback);
	},

	update() {
		const now = Date.now();

		for (let timer_id in this.list) {

			const timer = this.list[timer_id];

			// если таймер истек, выполняем callback
			// и удаляем таймер
			if (now - timer.start >= timer.duration) {
				timer.callback();
				delete this.list[timer_id];
			}

		}
	}

};

export default timers;