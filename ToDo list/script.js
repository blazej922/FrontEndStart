var task = document.querySelector('#title');
var tasks = document.querySelector('.tasks');
var button = document.querySelector('#add');

function Task(title) {
  this.taskTitle = title;
}

var titles = [];

button.addEventListener('click', function(event) {
	event.preventDefault();
	var x = new Task(task.value);
	titles.push(x);
	task.value = '';
	return titles;
});



