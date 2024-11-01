export default class Utils{
	constructor(){

	}

	getRandomNumberBetween(min, max){
		return Math.floor(Math.random() * ( max - min) + min);
	}

}