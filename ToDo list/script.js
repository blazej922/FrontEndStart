var task = document.querySelector('#title');
var tasks = document.querySelector('#tasks');
var bootton = document.querySelector('#myBtn');
var done = document.querySelector('#done-list');
var inputs = '<button class="edit" onclick=\'editEl(event)\'>Edit</button>'
  		  +  '<button class="remove" onclick=\'delEl(event)\'>Delete</button>'
  		  +  '<button class="done" onclick=\'doneEl(event)\'>Done</button>'

function delEl (event){
	event.preventDefault();
	event.target.parentElement.remove();
	}

function editEl (event){
	event.preventDefault();
	var parent = event.target.parentElement;
	var childsEl = parent.childNodes;
	var inputEl = document.createElement('input');
	var buttonEl = document.createElement('button');
	buttonEl.className = 'OK';
	buttonEl.innerHTML = 'OK';
	buttonEl.addEventListener("click", function(event){
		event.preventDefault();
		var x = parent.firstChild.value;
		var div = document.createElement('div');
		if(x != ''){
			div.innerHTML += '<p>' + x + '</p>' + inputs;
			parent.replaceWith(div);
		}
		else{
			window.alert('You must enter the title!')
		}	
	});
	childsEl[0].replaceWith(inputEl);
	var i;
	for(i=0; i<=childsEl.length; i++){
		parent.lastChild.remove();
	}
	parent.appendChild(buttonEl);
	
}

function doneEl (event){
	event.preventDefault();
	console.log(event);
	var x = event.target.parentElement.firstChild.textContent;
	console.log(x);
	event.target.parentElement.remove();
	done.innerHTML += '<p>' + x + '</p>';
}

bootton.addEventListener('click', function(event){
	event.preventDefault();
	if(task.value != ''){
		tasks.innerHTML += '<div>' + '<p>' +  task.value + '</p>'
  						+ inputs
						+ '</div>';
	}
	else{
		window.alert('You must enter the title!')
	}	
});
