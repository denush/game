function renderUnits(ctx, viewport, units) {
	const dx = viewport.x;
	const dy = viewport.y;

	for (let unit of units.list) {

		ctx.fillStyle = unit.color;
		ctx.fillRect(	unit.x - dx,
								 	unit.y - dy,
								 	unit.width,
								 	unit.height	);

		/* направление взгляда */
		ctx.beginPath();

		switch (unit.sightDirection) {
			case 'north': {
				ctx.moveTo(unit.centerX - dx, unit.centerY - dy);
				ctx.lineTo(unit.left - dx, unit.top - dy);
				ctx.lineTo(unit.right - dx, unit.top - dy);
				break;
			};
			case 'south': {
				ctx.moveTo(unit.centerX - dx, unit.centerY - dy);
				ctx.lineTo(unit.left - dx, unit.bottom - dy);
				ctx.lineTo(unit.right - dx, unit.bottom - dy);
				break;
			};
			case 'west': {
				ctx.moveTo(unit.centerX - dx, unit.centerY - dy);
				ctx.lineTo(unit.left - dx, unit.top - dy);
				ctx.lineTo(unit.left - dx, unit.bottom - dy);
				break;
			};
			case 'east': {
				ctx.moveTo(unit.centerX - dx, unit.centerY - dy);
				ctx.lineTo(unit.right - dx, unit.top - dy);
				ctx.lineTo(unit.right - dx, unit.bottom - dy);
				break;
			};
		}
		
		ctx.closePath();

		ctx.strokeStyle = 'white';
		ctx.lineWidth = 2;
		ctx.stroke();
	
		/* временные вспомогательные прямые */
		if (unit === units.hero) {
			// _renderAttackRange(unit);
			// _renderAuxLines(unit);
		}
	}

	function _renderAuxLines(unit) {
		/* primary line */
		ctx.beginPath();

		ctx.moveTo(unit.centerX - 150 - dx, unit.centerY - 150 - dy);
		ctx.lineTo(unit.centerX + 150 - dx, unit.centerY + 150 - dy);

		ctx.closePath();

		ctx.strokeStyle = 'purple';
		ctx.lineWidth = 1;
		ctx.stroke();

		/* secondary line */
		ctx.beginPath();

		ctx.moveTo(unit.centerX - 150 - dx, unit.centerY + 150 - dy);
		ctx.lineTo(unit.centerX + 150 - dx, unit.centerY - 150 - dy);

		ctx.closePath();

		ctx.strokeStyle = 'purple';
		ctx.lineWidth = 1;
		ctx.stroke();
	}

	function _renderAttackRange(unit) {
		ctx.beginPath();

		switch (unit.sightDirection) {
			case 'north': {
				ctx.moveTo(unit.centerX - dx, unit.centerY - dy);
				ctx.lineTo(unit.centerX - unit.attackRange - dx, unit.centerY - unit.attackRange - dy);
				ctx.lineTo(unit.centerX + unit.attackRange - dx, unit.centerY - unit.attackRange - dy);
				break;
			};
			case 'south': {
				ctx.moveTo(unit.centerX - dx, unit.centerY - dy);
				ctx.lineTo(unit.centerX - unit.attackRange - dx, unit.centerY + unit.attackRange - dy);
				ctx.lineTo(unit.centerX + unit.attackRange - dx, unit.centerY + unit.attackRange - dy);
				break;
			};
			case 'west': {
				ctx.moveTo(unit.centerX - dx, unit.centerY - dy);
				ctx.lineTo(unit.centerX - unit.attackRange - dx, unit.centerY - unit.attackRange - dy);
				ctx.lineTo(unit.centerX - unit.attackRange - dx, unit.centerY + unit.attackRange - dy);
				break;
			};
			case 'east': {
				ctx.moveTo(unit.centerX - dx, unit.centerY - dy);
				ctx.lineTo(unit.centerX + unit.attackRange - dx, unit.centerY - unit.attackRange - dy);
				ctx.lineTo(unit.centerX + unit.attackRange - dx, unit.centerY + unit.attackRange - dy);
				break;
			};
		}

		ctx.closePath();

		ctx.strokeStyle = 'purple';
		ctx.lineWidth = 2;
		ctx.stroke();
	}
}



export default renderUnits;