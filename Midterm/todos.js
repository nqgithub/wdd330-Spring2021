import {Todo} from './todo.js';

let toDoList = [];

let todo1 = new Todo('Mow the lawn');
let todo2 = new Todo('Paint the fence');
let todo3 = new Todo('Walk the dog');

toDoList.push(todo1);
toDoList.push(todo2);
toDoList.push(todo3);

let ul = document.querySelector('ul');

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