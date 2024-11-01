export default class Projectile{
	constructor(gameObject, startX, startY, direction){
		this.gameObject = gameObject;
		this.x = startX;
		this.y = startY;
		this.direction = direction;

		this.img = document.getElementById('dot');
		this.width = 16;
		this.height = 8;

		this.delete = false;

	}
	update(deltaTime){

		if (this.direction === 'up'){
			this.y -= this.gameObject.speed;
		} else if (this.direction === 'down'){
			this.y += this.gameObject.speed;
		}

	}

	draw(context){
		context.drawImage(this.img,  this.x + this.width/2, this.y - this.height/2, this.width, this.height);
	}
}