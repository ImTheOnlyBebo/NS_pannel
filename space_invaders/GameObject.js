// 
const startButtonElem = document.getElementById('startButton');
startButtonElem.addEventListener('click', startGame);
const titleElem = document.getElementById('title');
const navBarElem = document.getElementById('navigationBar');
const gameWrapElem = document.getElementById('gameWrap');
const gameButtons = document.getElementById('gameButtons')

import EventListeners from "./EventListeners.js";
import Player from "./Player.js";
import Projectile from "./Projectile.js";
import Enemy from "./Enemy.js";
import Utils from "./utils.js";

const gameCanvasElem = document.getElementById('gameCanvas');
const twoDContext = gameCanvasElem.getContext("2d");
let end = false;
let prevTime;


// game object
class GameObject{
	constructor(){

		this.width = gameCanvasElem.width;
		this.height = gameCanvasElem.height;
		
		this.player = new Player(this);
		this.eventListeners = new EventListeners(this);
		this.utils = new Utils();

		this.shootTimer = 0;
		this.shootInterval = 700;
		this.projectileArray = [];
		this.speed = 5;

		this.enemyArray = [];
		this.enemyWaveCount = 1;
		this.maxWaves = 5;
		this.enemyTimer = 0;
		this.enemyInterval = 1000;

		this.score = 0;


	};

	update(deltaTime){

		this.player.update(this.eventListeners.direction, deltaTime);
		this.eventListeners.addEventListeners();
		this.eventListeners.eventListenersOnMouseUp();

		this.checkShootTimer(deltaTime);

		this.projectileArray.forEach(projectile => {
			projectile.update(deltaTime);
			if (projectile.y <= 0 || projectile.y >= this.height){
				this.projectileArray.splice(this.projectileArray.indexOf(projectile), 1)
			}
		});

		this.checkIfAddEnemies();

		this.enemyArray.forEach(enemy => {
			enemy.update(deltaTime);

			this.projectileArray.forEach(projectile => {
				if (projectile.direction === 'up'){
					enemy.checkCollision(projectile);
				} else if (projectile.direction === 'down'){
					this.player.checkCollision(projectile);
				}
				if (projectile.delete){
					this.projectileArray.splice(this.projectileArray.indexOf(projectile), 1);
				}

			})
			if (enemy.delete){
				this.enemyArray.splice(this.enemyArray.indexOf(enemy), 1);
			}


		})

		this.decideIfEnemyShouldShoot(deltaTime);

	};

	draw(context){
		this.player.draw(context);
		
		this.projectileArray.forEach(projectile => {
			projectile.draw(context);
		})

		this.enemyArray.forEach(enemy => {
			enemy.draw(context);
		})


	};

	checkShootTimer(deltaTime){
		this.shootTimer += deltaTime;
		
		if (this.shootTimer >= this.shootInterval){
			this.projectileArray.push(new Projectile(this, this.player.x, this.player.y, 'up'))
			this.shootTimer = 0;
		}

	};

	checkIfAddEnemies(){
		if (this.enemyArray.length === 0){
			const waveValueArray = Object.values(EnemyWaves[this.enemyWaveCount]);

			if (this.enemyWaveCount === this.maxWaves +1){
				this.endGame();
				return;
			}

			waveValueArray.forEach(arr => {
				this.enemyArray.push( new Enemy(this, arr[0], arr[1]) );
			})
			this.enemyWaveCount ++;
		}
	};

	decideIfEnemyShouldShoot(deltaTime){
		this.enemyTimer += deltaTime;

		if (this.enemyTimer >= this.enemyInterval){
			const indexOfEnemyToShoot = this.utils.getRandomNumberBetween(0, this.enemyArray.length);
			this.enemyArray[indexOfEnemyToShoot].shoot();
			this.enemyTimer = 0;
		}

	};

	addProjectileFromEnemy(gameObject, startX, startY, direction){
		this.projectileArray.push(new Projectile(gameObject, startX, startY, direction));
	};

	endGame(){
		const scoreElem = document.getElementById('score');
		scoreElem.innerText = `Score: ${this.score}`;
		
		this.enemyArray.splice(0, this.enemyArray.length);
		this.projectileArray.splice(0, this.projectileArray.length);
		
		this.enemyWaveCount = 1;
		this.score = 0;
		this.eventListeners.direction = undefined;

		this.player.reset();
		
		end = true;

	};

	clickedEndGame(){
		Game.endGame();
	};

};
const Game = new GameObject();


// starting functions
function startGame(){
	titleElem.style.display = 'none';
	navBarElem.style.display = 'none';
	gameWrapElem.style.display = 'block';
	gameButtons.style.display = 'block';

	animationLoop(0);
}

function changeDisplay(){
	titleElem.style.display = 'flex';
	navBarElem.style.display = 'flex';
	gameWrapElem.style.display = 'none';
	gameButtons.style.display = 'none';
	end = false;
}

function animationLoop(timeStamp){
	if (!prevTime){
		prevTime = timeStamp;
		window.requestAnimationFrame(animationLoop);
		return;
	}

	const deltaTime = timeStamp - prevTime;
	prevTime = timeStamp;

	twoDContext.clearRect(0, 0, gameCanvasElem.width, gameCanvasElem.height);
	Game.update(deltaTime);
	Game.draw(twoDContext)

	if (end){
		changeDisplay();
		prevTime = undefined;
		timeStamp = 0;
		return;
	}

	window.requestAnimationFrame(animationLoop)

};