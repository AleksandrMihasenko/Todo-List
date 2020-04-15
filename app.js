const deleteTodo = document.querySelector('.list-todos');


//delete todos event
deleteTodo.addEventListener('click', event => {

    if (event.target.classList.contains('icon-delete')) {
        event.target.parentElement.remove();
    }

});

