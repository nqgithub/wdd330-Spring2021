import { Todo } from './todo.js';

let status = "all";
let button = document.querySelector('#add')
    .addEventListener('touchend', addTodo);

let all = document.querySelector("#all");
all.addEventListener('touchend', () => {
    status = 'all';
    print();
});

let active = document.querySelector("#active");
active.addEventListener('touchend', () => {
    status = 'active';
    print(true);
});

let completed = document.querySelector("#completed");
completed.addEventListener('touchend', () => {
    status = 'completed';
    print(false);
});



let countType = document.querySelector("#countType");
let count = document.querySelector("#count");



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
    let todoText = document.querySelector('#myInput');

    let newTodoItem = new Todo(todoText.value);


    //Reset form (Clears out the textbox where you 
    //add new todoText)
    todoText.value = '';


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

    
    

}


//Print function  above "print();"
function print(filterForActive) {
    let table = document.querySelector('#listTable');
    table.innerHTML = ''

    let toDoList = JSON.parse(localStorage.getItem("name"));
    if (toDoList == undefined) {
        toDoList = [];

    }

    let sum = 0

    switch (filterForActive) {
        case undefined:
            countType.innerText = status + ' tasks';
            console.log("undefined"+toDoList);
            break;
            
        case true:
            toDoList = toDoList.filter(toDoItem => !toDoItem.Completed);
            countType.innerText = status + ' tasks';
            console.log("activeTrue"+toDoList);
            
            break;

        case false:
            toDoList = toDoList.filter(toDoItem => toDoItem.Completed);
            countType.innerText = status + ' tasks';
            console.log("activeFalse"+toDoList);
            break;
        
    }

    toDoList.forEach(
        todoItem => {
            table.innerHTML +=

                `<tr>
            <td> <input type="checkbox" data-id="${todoItem.Id}" ${todoItem.Completed ?"checked" :''} > </td>

            <td> <span>${ todoItem.Content }</span> </td>

            <td> <button class="deleted" data-id="${todoItem.Id}"> X </button> </td>
            
            </tr>`;
            
            sum++;

        }


    );

    count.innerText = sum;

    addEventListenersToDeleteButtons();


    let toDoCheckBoxes = document.querySelectorAll('input[type="checkbox"]');

    toDoCheckBoxes.forEach(
        toDoCheckBox => {
            toDoCheckBox.addEventListener('click', event => {
                let checkBoxId = event.target.dataset.id;
                let checkBox = event.target
                let spanParent = checkBox.parentNode.nextElementSibling

                if (checkBox.checked) {
                    spanParent.style.textDecorationLine = "line-though";
                    setCompleted(true, checkBoxId);

                } else {
                    spanParent.style.textDecorationLine = "none";
                    setCompleted(false, checkBoxId);
                }


            })
        }
    );
    toDoCheckBoxes.forEach((checkBox, index) => {
        if (toDoList[index].Completed) {
            checkBox.click();
        }
    });

}




function setCompleted(isCompleted, checkBoxId) {
    let toDoList = JSON.parse(localStorage.getItem("name"));
    let toDoIndex = toDoList.findIndex(todoItem => todoItem.Id == checkBoxId);
    toDoList[toDoIndex].Completed = isCompleted
    localStorage.setItem("name", JSON.stringify(toDoList));

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
    let arrayOfDeleteButtons = document.querySelectorAll(".deleted");

    arrayOfDeleteButtons.forEach(function (button) {
        // console.log(button)
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