class Timer {

	constructor(id, duration, callback) {
		this.id = id;
		this.duration = duration;
		this.start = Date.now();

		this.callback = callback;
	}

}

export default Timer;