/*
task is responsible for creating a single task object
*/
const Task = (() => {
	let id = 0;
	return class Task {
		constructor(description, priority) {
			this.id = ++id;
			this.description = description;
			this.priority = priority;
		}

		render() {
			const lists = [...document.querySelectorAll('#lists div')];
			const parentId = document.querySelector('#parent-list').value;
			const parent = lists.find(list => list.dataset.id === parentId);
			const desc = document.createElement('p');
			const prio = document.createElement('p');
			desc.innerText = `Task: ${this.description}`;
			prio.innerText = `Priority: ${this.priority}`;
			parent.append(desc);
			parent.append(prio);
		}
	};
})();
