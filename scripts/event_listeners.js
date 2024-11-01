// 
document.getElementById("buttonGroup").addEventListener("click", (e) => changeBackground(e));
document.getElementById("buttonFan").addEventListener("click", fanClicked);
document.getElementById("firstButtonLight").addEventListener("click", firstLightClicked);
document.getElementById("secondButtonLight").addEventListener("click", secondLightClicked);
document.getElementById("thirdButtonLight").addEventListener("click", thirdLightClicked);

function changeBackground(e) {
    let on;
	const classValues = Array.from(e.target.classList);
	if (!classValues.includes('button')){
		return;
	}
    
	if (e.target.children[0].style.backgroundColor === 'rgb(255, 255, 255)'){
        e.target.children[0].style.backgroundColor = 'rgb(165, 165, 165)';
        on = false;
	} else {
        e.target.children[0].style.backgroundColor = 'rgb(255, 255, 255)';
        on = true;
	}
    
    if (classValues.includes('light')){
        switchLight(e, on);
    }
};

function fanClicked() {
    domain = "input_boolean"
    service = "toggle"
    entity = "input_boolean.fan_mode" // check this info --
    data = {}
    callService(entity, service, domain, data);
}

function firstLightClicked() {
    domain = "input_boolean"
    service = "toggle"
    entity = "input_boolean.first_light"
    data = {}
    callService(entity, service, domain, data);
}

function secondLightClicked() {
    domain = "media_player"
    service = "toggle"
    entity = "input_boolean.second_light"
    data = {}
    callService(entity, service, domain, data);
}

function thirdLightClicked() {
    domain = "media_player"
    service = "toggle"
    entity = "input_boolean.third_light"
    data = {}
    callService(entity, service, domain, data);
}

function switchLight(e, on){
    const childrenArray = Array.from(e.target.children);
    if (on){
        childrenArray[0].src = 'img/bulb-on-svgrepo-com.svg';
    } else {
        childrenArray[0].src = 'img/bulb-svgrepo-com.svg';
    }
}