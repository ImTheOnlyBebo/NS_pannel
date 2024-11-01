
// change rgba value to your liking

function updateButtons() {
	if (fan_mode == "on") {
			document.getElementById("buttonFan").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
	else {
			document.getElementById("buttonFan").style.backgroundColor = "rgba(255, 255, 255, 0.08)";
	}

	if (first_light == "on") {
			document.getElementById("firstButtonLight").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
	else {
			document.getElementById("firstButtonLight").style.backgroundColor = "rgba(255, 255, 255, 0.08)";
	}

	if (second_light == "on") {
			document.getElementById("secondButtonLight").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
	else {
			document.getElementById("secondButtonLight").style.backgroundColor = "rgba(255, 255, 255, 0.08)";
	}

	if (third_light == "on") {
			document.getElementById("thirdButtonLight").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	}
	else {
			document.getElementById("thirdButtonLight").style.backgroundColor = "rgba(255, 255, 255, 0.08)";
	}
}