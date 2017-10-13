/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 0;
  return class Task {
    constructor(description, priority) {
      this.id          = ++id; 
      this.description = description; 
      this.priority    = priority; 
    };

    render() {
      const lists    = [...document.querySelectorAll('#lists div')];
      const parent   = lists.find(list => list.dataset.id === `${this.id}`);
      const desc     = document.createElement('p');
      const prio     = document.createElement('p');
      desc.innerText = this.description;
      prio.innerText = this.priority; 
      parent.append(desc);
      parent.append(prio);
    }
  };

})();
