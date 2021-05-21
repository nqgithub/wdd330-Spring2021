import {
    Todo
} from './todo.js';

let toDoList = [];

document.querySelector('#add').addEventListener('click', addTodo);

let todo1 = new Todo('Mow the lawn');
let todo2 = new Todo('Paint the fence');
let todo3 = new Todo('Walk the dog');

toDoList.push(todo1);
toDoList.push(todo2);
toDoList.push(todo3);

print();

function print() {
    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    toDoList.forEach(
        todoItem => {
            ul.innerHTML +=
                `<li>

            <input type="checkbox">
            <span>${ todoItem.Content }</span>
            <button>X</button>
            </li>`;

        }
    );
}

function addTodo() {
    let todoText = document.querySelector('#myInput').value;
    let newTodoItem = new Todo(todoText);
    toDoList.push(newTodoItem);

    print();

}