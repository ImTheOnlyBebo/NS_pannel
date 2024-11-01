// Setting up the global variables to be filled with HA entities // first display
var current_time;
var current_date;
var current_outside_temp;
var weather_state;
var uv_index;
var moon_state;
var sun_state;
var fan_mode;
var first_light;
var second_light;
var third_light;

// second display
var internal_temp;
var internal_humidity;
var living_room_heating;


// Setting up entities names - set id and entity name. Id 1 is reserved for call getting entitites state
// check sensor name

// first display
var entity_current_time = [2,"sensor.time"];
var entity_current_date = [3, "sensor.svatky_a_narozeniny"];
var entity_current_outside_temp = [4,"sensor.openweathermaphourly_temperature"];
var entity_weather_state = [5,"sensor.openweathermaphourly_condition"];
var entity_uv_index = [6,"sensor.openweathermaphourly_uv_index"];
var entity_moon_state = [7, "sensor.moon_phase"];
var entity_sun_state = [8,"sun.sun"];
var entity_fan_mode = [9,"input_boolean.fan_mode"];
var entity_first_light = [10,"input_boolean.first_light"];
var entity_second_light = [11,"media_player.second_light"];
var entity_third_light = [12,"media_player.third_light"];

// second display
var entity_internal_temp = [13,"sensor.teplotni_sensor_obyvak_temperature"]
var entity_internal_humidity = [14,"sensor.teplotni_sensor_obyvak_humidity"]
var entity_livingroom_heating = [15,"sensor.living_room_heating"];

// Connection global variables
var socket;
var service_call_id;
