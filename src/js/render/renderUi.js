function renderUi(ctx, viewport, ui) {
	const dx = viewport.x;
	const dy = viewport.y;

	_renderTarget(ctx, viewport, ui);

	for (let bar of ui.healthBarList) {

		ctx.fillStyle = 'black';
		ctx.fillRect(
			bar.x - dx,
			bar.y - bar.distance - bar.height - dy,
			bar.width,
			bar.height
		);

		ctx.fillStyle = 'red';
		ctx.fillRect(
			bar.x - dx,
			bar.y - bar.distance - bar.height - dy,
			bar.unit.currentHealth / bar.unit.totalHealth * bar.width,
			bar.height
		);
	}

	for (let bar of ui.castBarList) {

		ctx.fillStyle = 'blue';
		ctx.fillRect(
			bar.x - dx,
			bar.y - bar.distance - bar.height - dy,
			bar.width,
			bar.height
		);

		// ctx.fillStyle = 'red';
		// ctx.fillRect(
		// 	bar.x - dx,
		// 	bar.y - bar.distance - bar.height - dy,
		// 	bar.unit.currentHealth / bar.unit.totalHealth * bar.width,
		// 	bar.height
		// );
	}
}

function _renderTarget(ctx, viewport, ui) {
	const dx = viewport.x;
	const dy = viewport.y;

	const target = ui.target;
	if (!target) {
		return;
	}

	ctx.fillStyle = 'gray';
	ctx.fillRect(
		target.x - dx,
		target.y - dy,
		target.width,
		target.height
	);
}

export default renderUi;