const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

window.addEventListener('resize', event => {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
});

document.body.append(canvas);

export { canvas, ctx };