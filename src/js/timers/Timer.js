class Timer {

	constructor(id, duration, callback) {
		this.id = id;
		this.duration = duration;
		this.start = Date.now();
		this.lasting = 0;
		this.expired = false;

		this.callback = callback;
	}

	update() {
		this.lasting = Date.now() - this.start;

		if (this.lasting > this.duration) {
			this.expired = true;
		}
	}

	getFraction() {
		return (this.lasting / this.duration) / 100 * 100;
	}

}

export default Timer;