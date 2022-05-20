var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


/*Tente implementar os eventos usando o método addEventListener.
Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.*/

/* 
let count = 0;

var CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	
	// testes
	
	if (count === 10) {
		alert("Limite atingido")
			
	}
}
function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if (count < 0) {		
		document.body.style.backgroundColor = 'Red'
	}
}

function test() {
	kdowkdpo;
}
*/



