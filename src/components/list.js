/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 0;
  return class List {
    constructor(title) {
      this.id    = ++id; 
      this.title = title;
    };

    render() {
      const option     = document.createElement('option');
      option.value     = this.id; 
      option.innerHTML = this.title; 
      const div = document.createElement('div');
      div.dataset.id = `${this.id}`;
      div.innerHTML = `
        <h2>${this.title}</h2>
        <p></p>
        <p></p> 
      `;
      document.querySelector('#lists').appendChild(div);
      document.querySelector('#parent-list').appendChild(option); 
    };
  };

})();
