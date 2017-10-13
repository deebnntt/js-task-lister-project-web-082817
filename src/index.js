document.addEventListener("DOMContentLoaded", () => {

  const app        = new App();
  const listForm   = document.getElementById('create-list-form');
  const taskForm   = document.getElementById('create-task-form');
  const parentList = document.getElementById('parent-list');
  app.render();
  listForm.addEventListener('submit', addList);
  taskForm.addEventListener('submit', addTask);

  function addList() {
    event.preventDefault(); 
    const listName = this.querySelector('#new-list-title').value;
    const list = new List(listName);
    list.render();
  };  

  function addTask() {
    event.preventDefault(); 
    const description = this.querySelector('#new-task-description').value; 
    const priority    = this.querySelector('#new-task-priority').value;
    const task        = new Task(description, priority);
    task.render(); 
  };


});