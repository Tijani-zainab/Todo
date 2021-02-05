
// This is the array that will hold the todo list items

let todoItems = [];

function renderTodo(todo) {
  const list = document.querySelector('.js-todo-list');
  const item = document.querySelector(`[data-key='${todo.id}']`);

  // add this if block
  if (todo.deleted) {
    // remove the item from the DOM
    item.remove();
    return
  }

  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <i far fa-window-close"></i>>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}


 
function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };
  
    todoItems.push(todo);
    renderTodo(todo);
}  

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}


function deleteTodo(key) {
  // find the corresponding todo object in the todoItems array
  const index = todoItems.findIndex(item => item.id === Number(key));
  // Create a new object with properties of the current todo item
  // and a `deleted` property which is set to true
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  // remove the todo item from the array by filtering it out
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderTodo(todo);
}


const form = document.querySelector('.js-form');

// Add a submit event listener
form.addEventListener('submit', event => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const input = document.querySelector('.js-todo-input');

  // Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

// Select the entire list
const list = document.querySelector('.js-todo-list');
// Add a click event listener to the list and its children
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  // add this `if` block
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }

});



/*var Person = function(name,birth, job) {
  this.name = name;
  this.birth = birth;
  this.job = job;
  
}


Person.prototype.calculateAge = function() {
  console.log(2021 - this.birth); 
}; 

Person.prototype.lastName = 'Tijani';

var joseph = new Person('joseph', 1990, 'designer');
var sam = new Person('Sam', '1980', 'teacher');
var ola = new Person('Sam', '1940', 'retired');

joseph.calculateAge();
sam.calculateAge();
ola.calculateAge();

console.log(joseph.lastName);
console.log(sam.lastName);
console.log(ola.lastName);
*/


/*
var weather;

function setut() {
  createCanvas(400, 200);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=lagos&appid=1d99a787ffd8a8d0cd76ad7ce2cdf808&unit=metric');
}

function gotData(data) {
  // println(data);
  weather = data;
}

function draw() {
  background(0); 
  if(weather) {
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);
  }
}



/*
fetch('https://reqres.in/api/users')
.then(res => res.json())
.then(res => console.log(res))
.then(res => {
  if (res.ok)
  console.log('success')
} else {
  console.log('Not sucessful')
}

})
.then(data => console.log(data))
.catch(error => console.log('Error'));
*/  


/*
var retirement = function(year) {
  console.log(70 - (2021 - year));
} 

retirement(2000);
*/