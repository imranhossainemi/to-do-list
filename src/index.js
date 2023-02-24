import './style.css';
import List from './list.js';

const list = new List();

list.addTask();
list.showTask();
const emi = document.querySelectorAll('#emi');
const emi2 = document.querySelectorAll('.tskTog2');
const label = document.querySelectorAll('.label');
const comTask = () => {
  emi.forEach((item, i) => item.addEventListener('click', (e) => {
    const todo = item.parentElement;
    e.preventDefault();
    todo.classList.add('completed');
    todo.classList.remove('todo');
    let obj = JSON.parse(localStorage.getItem('task'));
    list.listArr = obj;
    list.listArr[i].completed = true;
    obj = list.listArr;
    window.localStorage.setItem('task', JSON.stringify(obj));
  }));
};
comTask();
const rmvComTask = () => {
  emi2.forEach((im, l) => im.addEventListener('click', (e) => {
    const todo = im.parentElement;
    e.preventDefault();
    todo.classList.add('todo');
    todo.classList.remove('completed');
    let obj = JSON.parse(localStorage.getItem('task'));
    list.listArr = obj;
    list.listArr[l].completed = false;
    obj = list.listArr;
    window.localStorage.setItem('task', JSON.stringify(obj));
  }));
};
rmvComTask();
label.forEach((lab) => lab.addEventListener('click', (e) => {
  const view = lab.parentElement;
  const todo = view.parentElement;
  e.preventDefault();
  todo.classList.toggle('editting');
}));
const mkComFls = () => {
  const toDoL = document.querySelectorAll('.todo');
  toDoL.forEach((mi, v) => {
    if (mi || !list.listArr[v].completed) {
      let obj = JSON.parse(localStorage.getItem('task'));
      list.listArr = obj;
      list.listArr[v].completed = false;
      obj = list.listArr;
      window.localStorage.setItem('task', JSON.stringify(obj));
    }
  });
};
mkComFls();