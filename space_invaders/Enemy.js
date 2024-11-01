export default class Enemy {
	constructor(gameObject, startX, startY){
		this.gameObject = gameObject;
		this.x = startX;
		this.y = startY;
		this.width = 16;
		this.height = 16;
		this.speed = 0.07;
		this.img = document.getElementById('characters');

		this.delete = false;

	}

	update(deltaTime){
		this.y += this.speed;
	}

	draw(context){
		context.drawImage(this.img, 16, 40, this.width, this.height, this.x, this.y, this.width *1.5, this.height *1.5);
	}

	shoot(){
		this.gameObject.addProjectileFromEnemy(this.gameObject, this.x, this.y + this.height *1.5, 'down');
	}

	checkCollision(projectile){
		if (
			this.x < projectile.x + projectile.width &&
			this.x + this.width > projectile.x &&
			this.y < projectile.y + projectile.height &&
			this.y + this.height > projectile.y
		){
			this.gameObject.score ++;
			this.delete = true;
			projectile.delete = true;
		}

	};

}

window.EnemyWaves = {
	1: {
		e_1: [40, 0],
		e_2: [80, 0],
		e_3: [120, 0],
		e_4: [160, 0],
		e_5: [200, 0],

		e_6: [40, 20],
		e_7: [80, 20],
		e_8: [120, 20],
		e_9: [160, 20],
		e_10: [200, 20],
	},
	2: {
		e_1: [40, 10],
		e_2: [80, 5],
		e_3: [120, 0],
		e_4: [160, 5],
		e_5: [200, 10],

		e_6: [40, 30],
		e_7: [80, 25],
		e_8: [120, 20],
		e_9: [160, 25],
		e_10: [200, 30],
	},
	3: {
		e_1: [40, 10],
		e_2: [80, 5],
		e_3: [120, 0],
		e_4: [160, 5],
		e_5: [200, 10],

		e_6: [40, 30],
		e_7: [80, 35],
		e_8: [120, 40],
		e_9: [160, 35],
		e_10: [200, 30],
	},
	4: {
		e_1: [10, 0],
		e_2: [50, 5],
		e_3: [90, 0],
		e_4: [130, 5],
		e_5: [170, 0],
		e_6: [200, 5],

		e_7: [10, 30],
		e_8: [50, 25],
		e_9: [90, 30],
		e_10: [130, 25],
		e_11: [170, 30],
		e_12: [200, 25],
	},
	5: {
		e_1: [40, -10],
		e_2: [80, -10],
		e_3: [120, -10],
		e_4: [160, -10],
		e_5: [200, -10],

		e_6: [40, 5],
		e_7: [80, 5],
		e_8: [120, 5],
		e_9: [160, 5],
		e_10: [200, 5],

		e_11: [40, 20],
		e_12: [80, 20],
		e_13: [120, 20],
		e_14: [160, 20],
		e_15: [200, 20],
	},




};