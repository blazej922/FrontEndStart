var logo = document.querySelector('#logo');
var li = document.querySelector('li');
var divimg = document.querySelector('.image');
var image = document.querySelector('.image > img');
var form = document.querySelector('#person-data');
var inputs = document.querySelectorAll('#person-data > input');
var button = document.querySelector('#person-data > button');
var left = document.querySelector('#left');
var right = document.querySelector('#right');

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

//drop down menu for mobile resolutions
if(viewportWidth <= 736){

	logo.addEventListener('mouseover', function(event){
		event.target.src = 'img/aplle_logo_color.png';
	});

	logo.addEventListener('mouseout', function(event){
		event.target.src = 'img/apple_logo_white.png';
	});

	logo.addEventListener('click', function(){
		var a = document.createElement('a');
		var array = [{nazwa:'Zasady', url:'#description'},
					 {nazwa:'Formularz', url:'#person-data'}];
		var i;
		for (i=0; i<array.length; i++){
			li.innerHTML += '<a href=\"' + array[i].url + '\">' + array[i].nazwa + '</a>';
			aMenu = document.querySelectorAll("li > a");
			aMenu.forEach(setOpac);
			aMenu.forEach(raiseOpac);
			//setInterval(function(){ if(eval(x.style.opacity)<=1){x.style.opacity *= 1.05;}}, 80);
		}
	},{once : true});
}

//function form validation with coloring inputs 
button.addEventListener('click', function(event){
	event.preventDefault();
	var result = 0;
	for(i=0; i<inputs.length; i++){
		if(inputs[i].value==''){
			inputs[i].style.borderColor='#ff9999';
		}
		else{
			inputs[i].style.borderColor='#9fff80';
			result = result + 1;
		}
	if(result==inputs.length){
		form.submit();
	}
	}
});

//slider function

var images = ['img/Apple-iPhoneX-SpaceGray_0.jpg', 'img/Apple-iPhoneX-SpaceGray_1.jpg', 'img/Apple-iPhoneX-SpaceGray_2.jpg'];
var index = 0;

function Slider(value){
	index += value;
	if(index<0){
		index = images.length - 1;
		image.src = images[index];
	}
	else if(index==images.length){
		index = 0;
		image.src = images[index];	
	}
	else{
		image.src = images[index];
	};
}


left.onclick = function(){Slider(-1)};
right.onclick = function(){Slider(1)};

	//divimg.addEventListener('mouseover', function(event){
	//	var div = document.createElement("div");
	//	div.style.display = 'block';
	//	div.style.backgroundColor = 'red';
	//	divimg.before(div);
	//});

	//divimg.addEventListener('mouseout', function(event){
	//	divimg.style.opacity = '1';
	//});