var task = document.querySelector('#title');
var tasks = document.querySelector('#tasks');
var button = document.querySelector('#add');

function Task(title, pk) {
  this.pk = pk;
  this.taskTitle = title;
  this.add = function(){  
  	tasks.innerHTML += '<div id=\'abc' + this.pk + '\'>' + this.taskTitle 
  					+ '<input type=\'button\' value=\'Delete\' onclick=\'' + this.rem + '\'>' 
  					+ '</div>';};
  this.edit = function(){  	
  	var div = document.querySelector('#abc' + this.pk);
  	div.innerHTML = 'dupa'; };
  this.rem =  function(){document.querySelector('#abc' + this.pk).remove();};
}

var titles = [];

button.addEventListener('click', function(event) {
	event.preventDefault();
	var x = titles.length + 1;
	var y = new Task(task.value, x);
	y.add();
	titles.push(y);
	task.value = '';
});



