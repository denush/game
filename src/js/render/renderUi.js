function renderUi(ctx, viewport, ui) {
	const dx = viewport.x;
	const dy = viewport.y;

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

}

export default renderUi;