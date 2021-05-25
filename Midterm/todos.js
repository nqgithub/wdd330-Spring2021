import { Todo } from './todo.js';



let button = document.querySelector('#add')
    .addEventListener('click', addTodo);


print();

function print() {
    let table = document.querySelector('table');
    table.innerHTML = ''

    let toDoList = JSON.parse(localStorage.getItem("name"));
    if (toDoList == undefined) {
        toDoList = [];

    }
    toDoList.forEach(
        todoItem => {
            table.innerHTML +=
            
                `<tr>
            <td class="${todoItem.Id} checkbox" > <input type="checkbox"> </td>
            <td class="${todoItem.Id} content" > <span>${ todoItem.Content }</span> </td>
            <td class="${todoItem.Id} delete" > <button>X</button> </td>
            
            </tr>`;

        }
    );
    addEventListenersToDeleteButtons();
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

function removeTodo(button) {
    let toDoList = JSON.parse(localStorage.getItem("name"));
    let currentCell = button.parentNode;
    toDoList.some( (todoItem, index) => {
      if(todoItem.Id = currentCell.classList[0]) {
        toDoList.splice(index, 1);
      }
    });
    localStorage.setItem("name", JSON.stringify(toDoList));
    
}


//Add event listeners to delete items
function addEventListenersToDeleteButtons() {
    let arrayOfDeleteButtons = document.querySelectorAll("button");

    arrayOfDeleteButtons.forEach(function (button) {
        console.log(button)
        button.addEventListener("touchend", function (event) {
                removeTodo(event.target);
                print();
            }

        )
    });

}




//create function adds the listeners to the deleted buttons
// forech loop on the node list
//define listener to call remove todo item functions




//Get the ID of the Node (Button ellement/ remove to do "button.parrentnode.classlist[0]")
//Use a foreach to match the ID from the node to match to the object. Then splice it from the array
//Set the new array to local storage.


// Add a parameter to the removeTodo function
// Remove the item from loacal storage -- 
// Every item and content needs to have an ID in local storage
// Delete the idem and rown in local storage 
// Call print function