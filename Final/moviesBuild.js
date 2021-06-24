//Import how to create a "movie"
import {
    movie
} from './movie.js';

//Default status to "all"
let status = "all";

//Add event listener to the HTML search button
let button = document.querySelector('#search')
    .addEventListener('touchend', searchMovie);


// Setting up what the HTML buttons do

//Describing what the All button does
let all = document.querySelector("#all");
all.addEventListener('touchend', () => {
    status = 'all';
    print();
});

//Describing what the inTheater button does
let inTheater = document.querySelector("#inTheater");
inTheater.addEventListener('touchend', () => {
    status = 'inTheater';
    print(true);
});

//Describing what the streamingService button does
let streamingService = document.querySelector("#streamingService");
streamingService.addEventListener("touchend", () => {
    status = 'streamingService';
    print();
});


let filterByButton = document.querySelector("#filterByButton");

print();


//----------------------------------------------------


//------------------- FUNCTIONS ----------------------


//Creating the function "searchMovie" that was used for the "let button" above

function addMovie() {
    let addMovieTitle = document.querySelector('#movieTitleInput');
    let addMovieRating = document.querySelector('#movieRatingInput');
    let addAvalibleAt = document.querySelector('#avalibleAtInput');
    let addDescription = document.querySelector('#descriptionInput');

    let newMoivie = new movie(
        movieTitleInput.value,
        movieRatingInput.value,
        avalibleAtInput.value,
        descriptionInput.value
    );

    //Reset the form (Clears out the movie form)
    movieTitleInput.value = '';
    movieRatingInput.value = '';
    avalibleAtInput.value = '';
    descriptionInput.value = '';

    let movieList = localStorage.getItem("update");
    if (movieList == undefined) {
        movieList = [];
        movieList.push(newMoivie);
        localStorage.setItem("update", JSON.stringify(toDoList));
    } 
    else {
        movieList = JSON.parse(movieList);
        movieList.push(newMoivie);
        localStorage.setItem("update", JSON.stringify(movieList));
    };

    // Make sure you always add a print function to "Save" your changes
    print();

}




