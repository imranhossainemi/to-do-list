import './style.css';

const listCon = [
  {
    description: 'Task one',
    completed: true,
    index: 0,
  },
  {
    description: 'Task two',
    completed: false,
    index: 1,
  },
];

const doList = document.querySelector('.list');
const listItem = () => {
  for (let i = 0; i < listCon.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerHTML = `<input type="checkbox" name="${listCon[i].index}" id="${listCon[i].index}">
    <label for="${listCon[i].index}">${listCon[i].description}</label>
    `;
    doList.appendChild(li);
  }
};
listItem();
