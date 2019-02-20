const image = document.querySelector('.slider img');
const imageObj = [{path : 'img/1.jpg',
			     descr : 'Ten projekt jest przykładem solidności naszej firmy.'},

			     {path : 'img/2.jpg',
			     descr : 'Ten projekt równiez jest wspaniały.'}];
const proBo = document.querySelector('.card-body p');

let index = 0;

const slider = (value) => {
	index += value;
	if(index<0){
		index = imageObj.length - 1;
		image.src = imageObj[index].path;
		proBo.textContent = imageObj[index].descr;
	}
	else if(index==imageObj.length){
		index = 0;
		image.src = imageObj[index].path;
		proBo.textContent = imageObj[index].descr;	
	}
	else{
		image.src = imageObj[index].path;
		proBo.textContent = imageObj[index].descr;
	};
}

left.onclick = () => {slider(-1)};
right.onclick = () => {slider(1)};


const menu = document.querySelector('menu');
const mark = menu.children[1];

const addMenu = () => {
	const ulEl = document.createElement('ul');
	ulEl.innerHTML += '<li><a href=\"#about\">O nas</a></li>';
	ulEl.innerHTML += '<li><a href=\"#card\">Projekty</a></li>';
	ulEl.innerHTML += '<li><a href=\"#offer\">Oferta</a></li>';
	ulEl.innerHTML += '<li><a href=\"#footer\">Kontakt</a></li>';
	menu.appendChild(ulEl);
}

if(window.innerWidth >= 768){
		mark.remove();
		addMenu();
}

window.onresize = () => { 
	if(window.innerWidth >= 768){
		mark.remove();
		if(menu.lastChild.tagName != 'UL'){
			addMenu();
		}
	}
	else{
		window.location.reload(true);
	}
}

mark.addEventListener('click', () => {

	markClass = mark.className;

	const closeMenu = () => {
		menu.style.height = '60px';
  		mark.className = 'fas fa-bars';
  		menu.lastChild.remove();
	}

	switch(markClass) {
		case ('fas fa-bars'):
		menu.style.height = '120px';
		mark.className = 'fas fa-times';
		addMenu();
		const menuButtons = document.querySelectorAll('menu ul li a');
		for(let i=0; i < menuButtons.length; i++){
			menuButtons[i].addEventListener('click', closeMenu);
		}			  				  
    	break;
  		case ('fas fa-times'):
  			closeMenu();
    	break;
	}
});




