const todoArray = [];
let todoId = 1;

function formSubmission() {
	const todoTextElement = document.getElementById('todoText');

	if (todoTextElement.value.length == 0) {
		// Do not allow empty messages on the todo list.
		return;
	}

	const todoItem = createTodoItem(todoTextElement.value);
	todoArray.push(todoItem);

	displayTodoList();

	todoTextElement.value = '';
}

function displayTodoList() {
	// Get the UL element and clear it.
	const ul = document.querySelector('ul');
	ul.innerHTML = '';

	// Add li elements for each todo item.
	const template = todoArray.map(item => `
		<li>
			<span style="${item.complete ? 'text-decoration: line-through;' : ''}">${item.text}</span> <button onclick="markItemComplete(${item.id})">&#10003;</button> <button onclick="deleteItem(${item.id})">&#10007;</button> 
		</li>
		`);

	ul.innerHTML = template.join('');
}

function createTodoItem(todoText) {
	const todoItem = {id: todoId, text: todoText, complete: false};
	todoId++;

	return todoItem;
}

function markItemComplete(itemId) {
	const indexToUpdate = todoArray.map(item => item.id).indexOf(itemId);
	todoArray[indexToUpdate].complete = true;

	displayTodoList();
}

function deleteItem(itemId) {
	const indexToRemove = todoArray.map(item => item.id).indexOf(itemId);
	todoArray.splice(indexToRemove, 1);

	displayTodoList();
}
