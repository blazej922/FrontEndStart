var task = document.querySelector('#title');
var tasks = document.querySelector('#tasks');
var button = document.querySelector('#add');

function Task(title, pk) {
  this.pk = pk;
  this.taskTitle = title;
  this.add = function(){  
  	tasks.innerHTML += '<div>' + this.taskTitle 
  					+  '<input type=\'button\' value=\'Delete\' onclick=\'' + 'parentElement.remove()' + '\'>'
  					+  '<input id=\'abc' + this.pk + '\' type=\'button\' value=\'Edit\' onclick=\'' + 'edit(' + this.pk + ')' + '\'>' 
  					+  '</div>';};	
}

var titles = [];

button.addEventListener('click', function(event) {
	event.preventDefault();
	var taskID = titles.length;
	var taskObj = new Task(task.value, taskID);
	taskObj.add();
	titles.push(taskObj);
	task.value = '';
});

function edit(number){
	var inputNr = document.querySelector('#abc' + number);
	inputNr.parentElement.remove();
	var task = document.querySelector('#title');
	afterEdit = new Task(task.value, number);
	afterEdit.add();
	titles[number] = (afterEdit);
  	inputNr.parentElement.innerHTML = afterEdit;
}

