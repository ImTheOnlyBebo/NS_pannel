export default class Player {
	constructor(gameObject){
		this.gameObject = gameObject;
		this.img = document.getElementById('characters');
		this.width = 16;
		this.height = 16;
		this.x = 125;
		this.y = 85;
		this.speed = 3;

	};

	update(direction, deltaTime){
		if (!direction){
			return;
		} else if (direction === 'left'){
			this.x -= this.speed;
		} else if (direction === 'right'){
			this.x += this.speed;
		}

		// check x coords
		if (this.x <= 0){
			this.x = 0;
		} else if (this.x >= this.gameObject.width - this.width*2){
			this.x = this.gameObject.width - this.width*2;
		}
	
	};

	draw(context){
		context.drawImage(this.img, 0, 0, this.width, this.height, this.x, this.y, this.width *1.5, this.height *1.5);
	};

	checkCollision(projectile){
		if (
			this.x < projectile.x + projectile.width &&
			this.x + this.width > projectile.x &&
			this.y < projectile.y + projectile.height &&
			this.y + this.height > projectile.y
		){
			this.gameObject.endGame();
		}

	};

	reset(){
		this.x = 125;
		this.y = 85;
	}



};