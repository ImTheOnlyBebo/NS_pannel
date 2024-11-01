export default class EventListeners{
	constructor(gameObject){
		this.gameObject = gameObject;

		this.moveLeftBtn = document.getElementById('leftArrow');
		this.moveRightBtn = document.getElementById('rightArrow');
		this.endBtn = document.getElementById('end');

		this.listenerObject = document.getElementById('gameWrap');

		this.direction;
	};

	addEventListeners(){
		this.moveLeftBtn.addEventListener('mousedown', (e) => this.determineMove(e.target));
		this.moveRightBtn.addEventListener('mousedown', (e) => this.determineMove(e.target));
		this.endBtn.addEventListener('click', this.gameObject.clickedEndGame);
	};

	determineMove(target){
		let targetClassListArray = Array.from(target.classList)

		if (targetClassListArray.includes('left')){
			this.direction = 'left';
		} else if (targetClassListArray.includes('right')){
			this.direction = 'right'
		}

	};

	eventListenersOnMouseUp(){
		this.moveLeftBtn.addEventListener('mouseup', (e) => this.resetDirection(e));
		this.moveRightBtn.addEventListener('mouseup', (e) => this.resetDirection(e));
	};
	
	resetDirection(e){
		this.direction = undefined;
	};





};