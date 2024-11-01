// 
let countAmountElem = document.getElementById('countAmount');
let amount = Number(countAmountElem.innerText);

document.getElementById('countUp').addEventListener('click', countUp);
document.getElementById('countDown').addEventListener('click', countDown);

function countUp(){
	 amount ++;
	 countAmountElem.innerText = amount;
}
	
function countDown(){
	amount --;
	countAmountElem.innerText = amount;
}
