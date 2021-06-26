//Import how to create a "movie"
import { Movie } from './movie.js';

//Default status to "all"
let status = "all";

//Add event listener to the HTML search button
// let button = document.querySelector('#search')
//     .addEventListener('touchend', searchMovie);


// Setting up what the HTML buttons do

//Describing what the All button does
let all = document.querySelector("#all");
all.addEventListener('touchend', () => {
    status = 'all';
    
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
    
});


let filterByButton = document.querySelector("#filterByButton");






// Do this same code for other buttons (you can remove "remove" 
// and replace it with add)
// ---- SEARCH BUTTON -------------------------------------------------
document.querySelector("#search").addEventListener('click', () => {
    document.querySelector("#searchInput").classList.remove("hidden");
    document.querySelector("#displayMovieTable").classList.add("hidden");
    document.querySelector('#streamingServiceInput').classList.add("hidden");
    document.querySelector("#addMovieLayout").classList.add("hidden");
    
    
});


// ---- ADD NEW MOVIE BUTTON -------------------------------------------------
document.querySelector('#addNewMovieButton').addEventListener('click', () => {
    document.querySelector('#addMovieLayout').classList.remove("hidden");
    document.querySelector('#displayMovieTable').classList.add("hidden");
    document.querySelector("#searchInput").classList.add("hidden");
    document.querySelector('#streamingServiceInput').classList.add("hidden");
    //Add document.querySelector("#OTHER BUTTONS").classList.add("hidden");
});



// ---- STREAMING SERVICE BUTTON -------------------------------------------------
document.querySelector('#streamingService').addEventListener('click', () => {
    document.querySelector('#streamingServiceInput').classList.remove("hidden");
    document.querySelector('#displayMovieTable').classList.remove("hidden");
    document.querySelector('#addMovieLayout').classList.add("hidden");
    document.querySelector("#searchInput").classList.add("hidden");
    

});



// ---- ALL BUTTON -------------------------------------------------
document.querySelector('#all').addEventListener('click', () => {
    document.querySelector('#displayMovieTable').classList.remove("hidden");
    document.querySelector("#searchInput").classList.add("hidden");
    document.querySelector('#addMovieLayout').classList.add("hidden");
    document.querySelector('#streamingServiceInput').classList.add("hidden");
});




// ---- SUBMIT BUTTON -------------------------------------------------
let submitButton = document.querySelector("#addSubmitButton");
    submitButton.addEventListener('click', addMovie);
    submitButton.addEventListener('click', confirmSubmit);






// print();


//----------------------------------------------------


//------------------- FUNCTIONS ----------------------


// // FINISH THIS
function confirmSubmit() {

}




//Creating the function "searchMovie" that was used for the "let button" above

function addMovie() {
    let addMovieTitle = document.querySelector('#movieTitleInput');
    let addMovieRating = document.querySelector('#movieRatingInput');
    let addAvalibleAt = document.querySelector('#avalibleAtInput');
    let addDescription = document.querySelector('#descriptionInput');

    let newMoivie = new Movie(
        addMovieTitle.value,
        addMovieRating.value,
        addAvalibleAt.value,
        addDescription.value
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
        localStorage.setItem("update", JSON.stringify(movieList));
    } 
    else {
        movieList = JSON.parse(movieList);
        movieList.push(newMoivie);
        localStorage.setItem("update", JSON.stringify(movieList));
    };

    // ---------- Add display function to show this ---------

}




