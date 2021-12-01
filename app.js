// Seletores

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


// Funções

function addTodo(event){
    
    // Prevenir o form 
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // criar listas
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);

   // check mark button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

     // check mark button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // juntar a lista
    todoList.appendChild(todoDiv);

    // limpar o input
    todoInput.value = null;
}

function deleteCheck