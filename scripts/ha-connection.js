// Function to connect to Home Assistant websocket API
function connectHomeAssistant() {
 
	console.log("Connection requested")
	socket = new WebSocket(WEBSOCKET_URL);
	service_call_id = 30

	// Listen for messages
	socket.addEventListener('message', function(event) {
			var response = JSON.parse(event.data);
			console.log('Received: ', response);
			if(response.type === 'auth_required') {
					socket.send(JSON.stringify({type: 'auth',access_token: WEBSOCKET_TOKEN}));
					console.log("Sent authentication message");
			}

			if (response.type === 'auth_ok'){
					console.log("Authorization was successful");
					
					// Request all current states
					socket.send(JSON.stringify({"id": 1,"type": "get_states"}));
					console.log("All states requested");

					// Subscribe to state changes // first display
					subscribeStateTrigger(entity_current_time[0],entity_current_time[1]);
					subscribeStateTrigger(entity_current_date[0],entity_current_date[1]);
					subscribeStateTrigger(entity_current_outside_temp[0],entity_current_outside_temp[1]);
					subscribeStateTrigger(entity_weather_state[0],entity_weather_state[1]);
					subscribeStateTrigger(entity_uv_index[0],entity_uv_index[1]);
					subscribeStateTrigger(entity_moon_state[0],entity_moon_state[1]);
					subscribeStateTrigger(entity_sun_state[0],entity_sun_state[1]);
					subscribeStateTrigger(entity_fan_mode[0],entity_fan_mode[1]);
					subscribeStateTrigger(entity_first_light[0],entity_first_light[1]);
					subscribeStateTrigger(entity_second_light[0],entity_second_light[1]);
					subscribeStateTrigger(entity_third_light[0],entity_third_light[1]);
					
					// second display
					subscribeStateTrigger(entity_internal_temp[0],entity_internal_temp[1]);
					subscribeStateTrigger(entity_internal_humidity[0],entity_internal_humidity[1]);
					subscribeStateTrigger(entity_livingroom_heating[0],entity_livingroom_heating[1]);
					
			}
			if (response.type === 'event'){
					handle_event_response(response);
			}

			if (response.type === 'result' && response.id == 1){
					filter_states(response);
			}
	});

	// Connection closed
	socket.addEventListener('close', function() {
			console.log('The connection has been closed.');
			restartConnection();
	});

	// Connection error
	socket.addEventListener('error', function(event) {
			console.error('WebSocket error: ', event);
	});
}

// Function to subscribe to trigger
function subscribeStateTrigger(id, entity) {
	var trigger = {
			"id": id,
			"type": "subscribe_trigger",
			"trigger": {
					"platform": "state",
					"entity_id": entity,
			}
	};
	
	socket.send(JSON.stringify(trigger));
	console.log("Trigger for ",trigger.trigger.entity_id, " state change subscribed");
}

function callService(entity, service, domain, data) {
	var service_call = {
			"id": service_call_id,
			"type": "call_service",
			"domain": domain,
			"service": service,
			// Optional
			"service_data": data,
			// Optional
			"target": {
				"entity_id": entity
			}
		}

	
	socket.send(JSON.stringify(service_call));
	console.log("Service ", service_call.service, " was called with id ", service_call_id);
	service_call_id = service_call_id + 1
}

function restartConnection() {
	console.log("Waiting 60 seconds to restart connection...");
	setTimeout(connectHomeAssistant, 60000);
}

connectHomeAssistant();