const list = document.querySelector('.list-todos');
const addTodo = document.querySelector('.add');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
        <li class="list-todos-item">
            <span>${todo}</span>
            <img src="/img/trash-bin.svg" class="icon-delete" alt="trash-icon">                
        </li>
    `;
    list.innerHTML += html;
};


const filterTodos = function(term) {

    //add filtered class
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    //remove filtered class
    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

    
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


//filter todos event
search.addEventListener('keyup', event => {
    
    const term = search.value.trim().toLowerCase();
    filterTodos(term);    

});