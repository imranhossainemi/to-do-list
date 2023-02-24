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

const doList = document.querySelector('#item-list');
const listItem = () => {
  for (let i = 0; i < listCon.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('todo');
    li.innerHTML = `
    <button class="toggle" type="button" title="check!" alt="check!" tabindex="0">
      <i class="fa-sharp fa-solid fa-square-check"></i>
    </button>
    
    <div class="view">
      <label class="label" tabindex="0" for="${listCon[i].index}">${listCon[i].description}</label>
      <textarea class="edit input" maxlength="255" name="${listCon[i].index}">${listCon[i].description}</textarea>
    </div>

    <div class="ver"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></div>
    <div class="trash"><i class="fa-sharp fa-solid fa-trash"></i></div>
    `;
    doList.appendChild(li);
  }
};
listItem();
