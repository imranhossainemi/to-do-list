import './style.css';
import List from './list.js';
// import interactive from './interactive.js';

const list = new List();

list.addTask();
list.showTask();
const emi = document.querySelectorAll('#emi');
const label = document.querySelectorAll('.label');
emi.forEach((item) => item.addEventListener('click', (e) => {
  const todo = item.parentElement;
  e.preventDefault();
  todo.classList.toggle('completed');
}));
label.forEach((lab) => lab.addEventListener('click', (e) => {
  const view = lab.parentElement;
  const todo = view.parentElement;
  e.preventDefault();
  todo.classList.toggle('editting');
}));
