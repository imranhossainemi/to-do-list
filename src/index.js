import './style.css';
import List from './list.js';
// import interactive from './interactive.js';

const list = new List();

list.addTask();
list.showTask();
// interactive();
const emi = document.getElementById('emi');
const label = document.querySelector('.label');
const todo = document.querySelector('.todo');
emi.addEventListener('click', (e) => {
  e.preventDefault();
  todo.classList.toggle('completed');
});
label.addEventListener('click', (e) => {
  e.preventDefault();
  todo.classList.toggle('editting');
});