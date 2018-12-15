function green_input(input){
	input.style.backgroundColor = "#ccffcc";
	input.style.border = "2px solid #99ff99";
}

function red_input(input){
	input.style.backgroundColor = "#ffc2b3";
	input.style.border = "2px solid #ff9980";
}

var email = document.querySelector('#email');
var array = ['blazej@wp.pl', 'shoplet@shoplet.pl']

email.addEventListener('change', function(){
	for (i=0; i<array.length; i++){
		if (email.value == array[i]){
		window.alert('This email is already in use.');
		red_input(email);
		}
	}	
})

document.querySelector('#registration').addEventListener('submit', function(event) {

event.preventDefault();
var x = document.querySelectorAll('.form-input, #email');
var check = x.length;

for(i=0; i<x.length; i++){
	if(x[i].value == ""){
		red_input(x[i]);
	}
	else{
		green_input(x[i]);
		check -= 1;
	}
}

for (i=0; i<array.length; i++){
	if (email.value == array[i]){
	window.alert('This email is already in use.');
	red_input(email);
	check += 1;
	}
}

var pass = document.forms['registration']['password'];
var repass = document.forms['registration']['repassword'];

if (check==0){
	if(pass.value === repass.value){
		var myObj = {};
		for(i=0; i<x.length; i++){
			myObj[x[i]['name']] = x[i].value;
			}
			console.log(myObj);
	}
	else{
		window.alert('The passwords are not the same.');
		red_input(pass);
		red_input(repass);
	}
}
else{
	window.alert('The ' + check + ' field/s are not correct.');
	pass.value = '';
	repass.value = '';
	red_input(pass);
	red_input(repass);
}
})


