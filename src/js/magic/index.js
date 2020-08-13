const magic = {

	heal: {
		id: 'heal',
		name: 'Лечение',
		description: 'Восстанавливает здоровье цели',
		duration: 500,
		needTarget: true,

		apply(options) {
			const { unit, target } = options;

			if (target.isDead) {
				return;
			}

			target.currentHealth += 2 * unit.intelligence;
		}
	},

	revive: {
		id: 'revive',
		name: 'Оживление',
		description: 'Оживляет цель',
		duration: 1500,
		needTarget: true,

		apply(options) {
			const { unit, target } = options;

			if (!target.isDead) {
				return;
			}

			target.currentHealth = 0.1 * target.totalHealth;
		}
	}

};

export default magic;