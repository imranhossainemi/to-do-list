import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}
const doList = document.querySelector('.list');
const listItem = () => {
  const li = document.createElement('li');
  li.classList.add('list-item');
  doList.appendChild(li);
};
listItem();
document.body.appendChild(component());