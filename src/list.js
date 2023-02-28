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
      const index = listArr.length;
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
      let li = '';
      listArr.forEach((elem, index) => {
        li += `
        <li class="todo" id="todo">
        <button class="tskTog" type="button" title="check!" alt="check!" tabindex="0" id="emi">
        </button>
        <button class="tskTog2" type="button" title="check!" alt="check!" tabindex="0" id="emi2">
          <i class="fa-sharp fa-solid fa-square-check"></i>
        </button>
        
        <div class="view">
          <label class="label" tabindex="0" for="${elem.index}">${elem.description}</label>
          <input type="text" class="edit input" maxlength="255" id="${index}" name="${elem.index}" value="${elem.description}" >
        </div>
    
        <div class="ver"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></div>
        <button type="button" class="trash" id="${index}"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </li>
        `;
        doList.innerHTML = li;
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
        obj.forEach((tsk) => {
          tsk.index = obj.indexOf(tsk);
        });
        window.localStorage.setItem('task', JSON.stringify(obj));
        window.location.reload();
        this.showTask();
      }));
    };
    removeTask();
    const removeComplete = () => {
      let obj = JSON.parse(localStorage.getItem('task'));
      listArr = obj;
      listArr = listArr.filter((element) => !element.completed);
      obj = listArr;
      obj.forEach((tsk) => {
        tsk.index = obj.indexOf(tsk);
      });
      window.localStorage.setItem('task', JSON.stringify(obj));
      window.location.reload();
      this.showTask();
    };
    document.querySelector('.clear-completed').addEventListener('click', (e) => {
      e.preventDefault();
      removeComplete();
    });
    const editTask = () => {
      const edit = document.querySelectorAll('.edit');
      edit.forEach((et) => et.addEventListener('dblclick', () => {
        const editId = parseInt(et.id, 10);
        let obj = JSON.parse(localStorage.getItem('task'));
        listArr = obj;
        listArr[editId].description = document.getElementById(editId).value;
        obj = listArr;
        localStorage.setItem('task', JSON.stringify(obj));
        window.location.reload();
        this.showTask();
      }));
    };
    editTask();
  };
}