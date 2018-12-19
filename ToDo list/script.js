var task = document.querySelector('#title');
var tasks = document.querySelector('#tasks');
var bootton = document.querySelector('#myBtn');
var done = document.querySelector('#done');
var inputs = '<input class="remove" type=\'button\' value=\'Delete\' onclick=\'delEl(event)\'>'
  		  +  '<input class="edit" type=\'button\' value=\'Edit\' onclick=\'editEl(event)\'>'

function delEl (event){
		event.target.parentElement.remove();
	}

function editEl (event){
	event.target.parentElement.innerHTML = task.value + inputs;
}

bootton.addEventListener('click', function(event){
	event.preventDefault();
	tasks.innerHTML += '<div>' + task.value
  					+ inputs
					+ '</div>';
});

