import { timers } from '../dependency';
import { actions } from '../dependency';

function unitDied(unit) {
	timers.create(unit.id + 'unit-died', 3000, () => {
		actions['revival'](unit);
	});
}

export default unitDied;