import { Todo } from './todo.js';

let button = document.querySelector('#add')
    .addEventListener('touchend', addTodo);


print();


//Notes:
//let button = document.querySelector('#add') is reching out to the HTML file 
//and looking for an id labled "add". Then its assigning that value to a button

//.addEventListener('touchend', addTodo); is adding an event listener that will 
//not run untill the "touchend" event happens. Once "touchend" happens the 
//function "addTodo" will run (which is defined below).

//print(); is running the "print()" function which is defined below
//



//----------------------------------------------------


//------------------- FUNCTIONS ----------------------

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

    // Make sure you alway add a print function to "Save" your changes
    print();

}


//Print function  above "print();"
function print() {
    let table = document.querySelector('tbody');
    table.innerHTML = ''

    let toDoList = JSON.parse(localStorage.getItem("name"));
    if (toDoList == undefined) {
        toDoList = [];

    }
    
    toDoList.forEach(
        todoItem => {
            table.innerHTML +=
            
                `<tr>
            <td> <input type="checkbox" data-id="${todoItem.Id}"> </td>
            <td> <span>${ todoItem.Content }</span> </td>
            <td> <button data-id="${todoItem.Id}"> X </button> </td>
            
            </tr>`;

        }
    );
    addEventListenersToDeleteButtons();
}






//Remove Todo items
function removeTodo(toDoId) {
    let toDoList = JSON.parse(localStorage.getItem("name"));
    let toDoIndex = toDoList.findIndex(todoItem => todoItem.Id == toDoId);
    toDoList.splice(toDoIndex, 1);
    localStorage.setItem("name", JSON.stringify(toDoList));
    print();
}


//Add event listeners to delete items
function addEventListenersToDeleteButtons() {
    let arrayOfDeleteButtons = document.querySelectorAll("button");

    arrayOfDeleteButtons.forEach(function (button) {
        console.log(button)
        button.addEventListener("touchend", function (event) {
                removeTodo(event.target.dataset.id);
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