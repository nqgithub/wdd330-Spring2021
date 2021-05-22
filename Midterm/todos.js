import {
    Todo
} from './todo.js';



document.querySelector('#add').addEventListener('click', addTodo);

let todo1 = new Todo('Mow the lawn');
let todo2 = new Todo('Paint the fence');
let todo3 = new Todo('Walk the dog');

// toDoList.push(todo1);
// toDoList.push(todo2);
// toDoList.push(todo3);

print();

function print() {
    let ul = document.querySelector('ul');
    ul.innerHTML = ''

    let toDoList = JSON.parse(localStorage.getItem("name"));
    if (toDoList == undefined) {
        toDoList = [];

    }
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

    let toDoList = localStorage.getItem("name");
    if (toDoList == undefined) {
        toDoList = [];
        toDoList.push(newTodoItem);
        localStorage.setItem("name", JSON.stringify(toDoList));
    } else {
        toDoList = JSON.parse(toDoList);
        toDoList.push(newTodoItem);
        localStorage.setItem("name", JSON.stringify(toDoList));
    };


    print();

}

function removeTodo() {
    let toDoList = JSON.parse(localStorage.getItem("name"));
    document.querySelectorAll

}

function addEventListenersToDeleteButtons() {
    let eventListeners = document.querySelectorAll("button");
    eventListeners.forEach(function (element) {
        console.log(element)
        element.addEventListener("click", function (event) {
                removeTodo(event.target)
            }

        )
    });

}

// Add a parameter to the removeTodo function
// Remove the item from loacal storage -- 
// Every item and content needs to have an ID in local storage
// Delete the idem and rown in local storage 
// Call print function
// 