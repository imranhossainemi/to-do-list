let listArr = JSON.parse(localStorage.getItem('task')) || [];
export default class List {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask = () => {
    document.querySelector('form').addEventListener('submit', () => {
      const description = document.getElementById('new-item').value;
      const completed = false;
      const index = 0;
      if (description) {
        const newTask = {
          description,
          completed,
          index,
        };
        listArr.push(newTask);
        localStorage.setItem('task', JSON.stringify(listArr));
        this.showTask();
      }
    });
  };

  showTask = () => {
    if (!listArr.length) {
      document.querySelector('#item-list').innerHTML = 'No task Added';
    } else {
      const doList = document.querySelector('#item-list');
      listArr.forEach((elem, index) => {
        const li = document.createElement('li');
        li.classList.add('todo');
        li.innerHTML = `
        <button class="toggle" type="button" title="check!" alt="check!" tabindex="0">
          <i class="fa-sharp fa-solid fa-square-check"></i>
        </button>
        
        <div class="view">
          <label class="label" tabindex="0" for="${index}">${elem.description}</label>
          <textarea class="edit input" maxlength="255" name="${index}">${elem.description}</textarea>
        </div>
    
        <div class="ver"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></div>
        <button type="button" class="trash" id="${index}"><i class="fa-sharp fa-solid fa-trash"></i></button>
        `;
        doList.appendChild(li);
      });
    }
    const removeTask = () => {
      const trash = document.querySelectorAll('.trash');
      trash.forEach((item) => item.addEventListener('click', () => {
        const removeId = parseInt(item.id, 10);
        let obj = JSON.parse(localStorage.getItem('task'));
        listArr = obj;
        listArr = listArr.filter((element, index) => index !== removeId);
        obj = listArr;
        localStorage.setItem('task', JSON.stringify(obj));
        this.showTask();
      }));
    };
    removeTask();
  };
}