const list = document.querySelector('.list-todos');
const addTodo = document.querySelector('.add');
const search = document.querySelector('.form-search');

const generateTemplate = todo => {
    const html = `
        <li class="list-todos-item">
            <span>${todo}</span>
            <img src="/img/trash-bin.svg" class="icon-delete" alt="trash-icon">                
        </li>
    `;
    list.innerHTML += html;
};


//delete todos event
list.addEventListener('click', event => {

    if (event.target.classList.contains('icon-delete')) {
        event.target.parentElement.remove();
    }

});


//add todos event
addTodo.addEventListener('submit', event => {
    
    event.preventDefault();

    const todo = addTodo.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addTodo.reset();
    }

});