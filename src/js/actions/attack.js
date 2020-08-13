import { getUnitsInSight } from '../auxiliary';
import { isUnitInRange } from '../auxiliary';

function attack(options) {

	const unit = options.unit;
	const targetList = getUnitsInSight(unit);

	for (let target of targetList) {

		if (target === unit) {
			continue;
		}

		if (isUnitInRange(unit, target, unit.attackRange)) {
			target.currentHealth -= unit.attackPower;
		}
	}
}

export default attack;