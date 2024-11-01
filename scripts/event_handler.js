// 
function handle_event_response(response) {
	if (response.id === 2){
			current_time = response.event.variables.trigger.to_state.state;
			updateClock();
	}
	if (response.id === 3){
			current_date = response.event.variables.trigger.to_state.state;
			updateDate();
	}
	if (response.id === 4){
			current_outside_temp = response.event.variables.trigger.to_state.state;
			updateWeatherInfo();
	}
	if (response.id === 5){
			weather_state = response.event.variables.trigger.to_state.state;
			updateWeatherInfo();
	}
	if (response.id === 6){
			uv_index = response.event.variables.trigger.to_state.state;
			updateWeatherInfo();
	}
	if (response.id === 7){
			moon_state = response.event.variables.trigger.to_state.state;
			updateWeatherInfo();
	}
	if (response.id === 8){
			sun_state = response.event.variables.trigger.to_state.state;
			updateWeatherInfo();
	}

	// // run this if update_buttons.js is running
	
	// if (response.id === 9){
	// 		guest_mode = response.event.variables.trigger.to_state.state;
	// 		updateButtons();
	// }
	// if (response.id === 10){
	// 		cleaning_mode = response.event.variables.trigger.to_state.state;
	// 		updateButtons();
	// }
	// if (response.id === 11){
	// 		living_room_tv = response.event.variables.trigger.to_state.state;
	// 		updateButtons();
	// }
	// if (response.id === 12){
	// 		living_room_tv = response.event.variables.trigger.to_state.state;
	// 		updateButtons();
	// }

	if (response.id === 13){
			internal_temp = response.event.variables.trigger.to_state.state;
			updateHeatingInfo();
	}
	if (response.id === 14){
			internal_humidity = response.event.variables.trigger.to_state.state;
			updateHeatingInfo();
	}
	if (response.id === 15){
			living_room_heating = response.event.variables.trigger.to_state.state;
			updateHeatingInfo();
	}

}

// Filter the initial received states and assign to corresponding variables
function filter_states(response) {

	// Filter current time
	current_time = response["result"].filter(function (el) { return el.entity_id == entity_current_time[1]})[0].state;

	// Filter current date 
	current_date = response["result"].filter(function (el) { return el.entity_id == entity_current_date[1]})[0].state;

	// Filter current outside temp
	current_outside_temp = response["result"].filter(function (el) { return el.entity_id == entity_current_outside_temp[1]})[0].state;

	// Filter weather state
	weather_state = response["result"].filter(function (el) { return el.entity_id == entity_weather_state[1]})[0].state;

	// Filter UV index
	uv_index = response["result"].filter(function (el) {return el.entity_id == entity_uv_index[1]})[0].state;

	// Filter moon phase
	moon_state = response["result"].filter(function (el) {return el.entity_id == entity_moon_state[1]})[0].state;

	// Filter sun state
	sun_state = response["result"].filter(function (el) {return el.entity_id == entity_sun_state[1]})[0].state;

	// Filter internal temp
	internal_temp = response["result"].filter(function (el) {return el.entity_id == entity_internal_temp[1]})[0].state;
	
	// Filter internal humidity
	internal_humidity = response["result"].filter(function (el) {return el.entity_id == entity_internal_humidity[1]})[0].state;

	// Filter living room heating
	living_room_heating = response["result"].filter(function (el) {return el.entity_id == entity_livingroom_heating[1]})[0].state;

	// Filter fan mode
	fan_mode = response["result"].filter(function (el) {return el.entity_id == entity_fan_mode[1]})[0].state;

	// Filter first light
	first_light = response["result"].filter(function (el) {return el.entity_id == entity_first_light[1]})[0].state;

	// Filter second light
	second_light = response["result"].filter(function (el) {return el.entity_id == entity_second_light[1]})[0].state;

	// Filter third light
	third_light = response["result"].filter(function (el) {return el.entity_id == entity_third_light[1]})[0].state;

	updateClock();
	updateDate();
	updateWeatherInfo();
	updateHeatingInfo();

	// updateButtons();
}