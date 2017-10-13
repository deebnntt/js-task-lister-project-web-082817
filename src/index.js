document.addEventListener('DOMContentLoaded', () => {
	const app = new App();
	const listForm = document.getElementById('create-list-form');
	const taskForm = document.getElementById('create-task-form');
	const parentList = document.getElementById('parent-list');
	const lists = document.getElementById('lists');
	app.render();
	listForm.addEventListener('submit', addList);
	taskForm.addEventListener('submit', addTask);
	lists.addEventListener('click', deleteList);

	function addList() {
		event.preventDefault();
		const listName = this.querySelector('#new-list-title').value;
		const list = new List(listName);
		list.render();
	}

	function addTask() {
		event.preventDefault();
		const description = this.querySelector('#new-task-description').value;
		const priority = this.querySelector('#new-task-priority').value;
		const task = new Task(description, priority);
		task.render();
	}

	function deleteList(e) {
		if (e.target.className === 'close') {
			const id = e.target.parentElement.dataset.id;
			const theLists = [...document.querySelectorAll('#lists div')];
			const list = theLists.find(list => list.dataset.id === id);
			lists.removeChild(list);
		}
	}
});
