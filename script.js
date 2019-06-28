window.onload = function() {
	initColorPicker();
}

function initColorPicker() {
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	let colorPickers = document.getElementsByClassName('picker');
	setEventListeners(colorBox, rgb, colorPickers);
}

function setEventListeners(colorBox, rgb, pickerElements) {

	let picLen = pickerElements.length;

	for (let i=0; i < picLen; i++) {
		pickerElements[i].addEventListener('change', function() {
			let red = rgb.red.value;
			let green = rgb.green.value;
			let blue = rgb.blue.value;

			setColor(colorBox, red, green, blue);
			setDiaplayValues(red, green, blue);
		});
	}

	/*
	rgb.red.addEventListener('change', function () {
		console.log(rgb.red.value);
		setColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.green.addEventListener('change', function() {
		console.log(rgb.green.value);
		setColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.blue.addEventListener('change', function() {
		console.log(rgb.blue.value);
		setColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	 */
}

function setColor(colorBox, r, g, b) {
	colorVal = [r, g, b].join(',');
	colorBox.style.backgroundColor = "rgb(" + colorVal + ")";
}

function setDiaplayValues(r, g, b) {
	let red = document.getElementById('red-val');
	let green = document.getElementById('green-val');
	let blue = document.getElementById('blue-val');

	red.innerText = r;
	green.innerText = g;
	blue.innerText = b;
}