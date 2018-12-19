var task = document.querySelector('#title');
var tasks = document.querySelector('#tasks');
var bootton = document.querySelector('#myBtn');
var done = document.querySelector('#done-list');
var inputs = '<input class="remove" type=\'button\' value=\'Delete\' onclick=\'delEl(event)\'>'
  		  +  '<input class="edit" type=\'button\' value=\'Edit\' onclick=\'editEl(event)\'>'
  		  +  '<input class="done" type=\'button\' value=\'Done\' onclick=\'doneEl(event)\'>'

function delEl (event){
		event.target.parentElement.remove();
	}

function editEl (event){
	event.target.parentElement.innerHTML = task.value + inputs;
}

function doneEl (event){
	var x = event.target.parentElement.textContent;
	event.target.parentElement.remove();
	done.innerHTML += '<p>' + x + '</p>';
}

bootton.addEventListener('click', function(event){
	event.preventDefault();
	tasks.innerHTML += '<div>' + task.value
  					+ inputs
					+ '</div>';
});

