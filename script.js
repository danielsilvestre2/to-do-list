const addTask = document.querySelector('#add-task')
const taskName = document.querySelector('#task-name')
const taskDescription = document.querySelector('#task-desc')

const createdListsSection = document.querySelector('#to-do-lists')

addTask.addEventListener('click', () => {
	if (taskName.value === '' && taskDescription.value === '') window.alert('Please fill the text box to create a task')
	else createdListsSection.innerHTML(`
			<div class="list">
				<div class="text">
					<h2>${taskName.value}</h2>
					<p>${taskDescription}</p>
				</div>
				<div class="buttons">
					<abbr title="Remover Tarefa">
						<button id="remove">X</button>
					</abbr>
					<input class="check" type="checkbox" name="checkmark" id="check">
				</div>
			</div>
		`)
})
