var numbers = document.querySelectorAll('.calc-nr-button, .calc-nr-0');
var display = document.querySelector('#calc-display')
var del = document.querySelector('.calc-func-del')
var result = document.querySelector('.calc-func-result')
var functions = document.querySelectorAll('.calc-func-point, .calc-func-perc, .calc-func-mult, .calc-func-div, .calc-func-add, .calc-func-exp, .calc-func-sub', );
var exp = document.querySelector('.calc-func-exp');

function getValue(element){
    element.addEventListener("click", function(event){
		display.innerHTML += element.value;
	});
}

numbers.forEach(getValue);
functions.forEach(getValue);

del.addEventListener("click", function(event){
		display.innerHTML = "";
	});

result.addEventListener("click", function(event){
		var strDisplay = display.textContent;
		console.log(strDisplay);
		//const reg = /[0-9]*[0-9]/g;
		strDisplay.replace('%','/100');
		console.log(strDisplay);
		result = eval(strDisplay);
		console.log(result);
	});
