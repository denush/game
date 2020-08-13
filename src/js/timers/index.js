import Timer from './Timer';

const timers = {

	list: {},

	create(timer_id, duration, callback) {
		this.list[timer_id] = new Timer(timer_id, duration, callback);
	},

	cancel(timer_id) {
		delete this.list[timer_id];
	},

	update() {
		const now = Date.now();

		for (let timer_id in this.list) {
			const timer = this.list[timer_id];

			timer.update();

			// если таймер истек, выполняем callback
			// и удаляем таймер
			if (timer.expired) {
				timer.callback();
				delete this.list[timer_id];
			}

		}
	}

};

export default timers;