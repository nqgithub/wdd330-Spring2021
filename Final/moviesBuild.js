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
all.addEventListener('click', () => {
    status = 'all';
    
});

//Describing what the inTheater button does
let inTheater = document.querySelector("#inTheater");
inTheater.addEventListener('click', () => {
    status = 'inTheater';
    loadMovies({'searchMode': 'service', 'searchQuery': 'In Theater'})
});

//Describing what the streamingService button does
let streamingService = document.querySelector("#streamingService");
streamingService.addEventListener("click", () => {
    status = 'streamingService';
    
});


let filterByButton = document.querySelector("#filterByButton");






// Do this same code for other buttons (you can remove "remove" 
// and replace it with add)
// ---- SEARCH BUTTON -------------------------------------------------
document.querySelector("#search").addEventListener('click', () => {
    document.querySelector("#searchInput").classList.remove("hidden");
    document.querySelector("#displayMovieTable").classList.remove("hidden");
    document.querySelector("#addMovieLayout").classList.add("hidden");
    document.querySelector('#streamingServiceInput').classList.add("hidden");
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

    loadMovies(); 

});




// ---- SUBMIT BUTTON -------------------------------------------------
let submitButton = document.querySelector("#submitButton");
    submitButton.addEventListener('click', addMovie);
    submitButton.addEventListener('click', confirmSubmit);



// ---- FILTER BUTTONS -------------------------------------------------
document.querySelector('#disneyPlusButton').addEventListener('click', () => {
    loadMovies({'searchMode': 'service', 'searchQuery': 'Disney+'})
})
document.querySelector('#netflixButton').addEventListener('click', () => {
    loadMovies({'searchMode': 'service', 'searchQuery': 'Netflix'})
})
document.querySelector('#primeVideoButton').addEventListener('click', () => {
    loadMovies({'searchMode': 'service', 'searchQuery': 'Prime Video'})
})


// ---- SEARCH FILTER -------------------------------------------------
document.querySelector('#myInput').addEventListener('input', (e) => {
    loadMovies({'searchMode': 'title', 'searchQuery': e.target.value})
})

    
loadMovies();

// print();


//----------------------------------------------------


//------------------- FUNCTIONS ----------------------


// // FINISH THIS
function confirmSubmit() {

}




//Creating the function "searchMovie" that was used for the "let button" above

function addMovie() {
    let addMovieTitle = document.querySelector('#movieTitleInput');
    let addMovieRating = document.querySelector('#ratingOptions');
    let addAvalibleAt = document.querySelector('#avalibleAtOptions');
    let addDescription = document.querySelector('#descriptionInput');

    if (addMovieTitle.value !== "" && addMovieRating.value !== "" && addAvalibleAt.value !== "") {
        let newMoivie = new Movie(
            addMovieTitle.value,
            addMovieRating.value,
            addAvalibleAt.value,
            addDescription.value
        );

        //Reset the form (Clears out the movie form)
        addMovieTitle.value = '';
        addMovieRating.value = '';
        addAvalibleAt.value = '';
        addDescription.value = '';

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

        let checkedSubmitButton = document.createElement("p")
        checkedSubmitButton.style.color = "green"
        checkedSubmitButton.textContent = "Movie has been added!"
        
        document.querySelector("#addMovieLayout").appendChild(checkedSubmitButton)
        setTimeout(() => {
            checkedSubmitButton.remove();
        }, 5000 );
    }
    else {
        let submitError = document.createElement("p")
        submitError.style.color = "red"
        submitError.textContent = "!!! Title, Rating, Avalible At fields are required. !!!"
        
        document.querySelector("#addMovieLayout").appendChild(submitError)
        setTimeout(() => {
            submitError.remove();
        }, 10000 );
    }

}


function loadMovies(movieFilter) {
    let movieList = document.querySelector("#movieList")
    movieList.innerHTML = ""
    if (localStorage.getItem("update")) {
        const movies = JSON.parse(localStorage.getItem("update"))
            .filter(movie => {
                if (movieFilter) {
                    if (movieFilter.searchMode === "service") {
                        return movie.AvailableAt === movieFilter.searchQuery
                    }
                    else if (movieFilter.searchMode === "title") {
                        return movie.Title.includes(movieFilter.searchQuery)
                    }
                }
                else {
                    return true
                }
            })
        
        if (movies.length > 0) {
            movies.map(movie => {
                movieList.innerHTML+= 
                    `
                    <div class="addBoarder" id="movieContainer${movie.Id}">
                        <h3> ${movie.Title} </h3>

                        <p> ${movie.Rating} </p>
                        
                        <p><b>Available at:</b> ${movie.AvailableAt} </p>
                        
                        <p><b>Description:</b> ${movie.Description} </p>

                        <div>
                            <button id="update${movie.Id}"> Update </button>
                            <button id="delete${movie.Id}"> Delete </button>
                        </div>

                    </div>
                    `

                    document.querySelector(`#delete${movie.Id}`).addEventListener('click', () => {
                        deleteMovie(movie.Id)
                    })
                    document.querySelector(`#update${movie.Id}`).addEventListener('click', () => {
                        const container = document.querySelector(`#movieContainer${movie.Id}`)
                        container.innerHTML = `
                            <input type="text" id="updateMovieTitleInput" class="addBoarder" value="${movie.Title}" placeholder="Movie Title..."><br>
                            <select id="updateRatingOptions">
                                <option value="" disabled>Choose Rating</option>
                                <option ${(movie.Rating === "PG-13" ? "selected" : "")}>PG-13</option>
                                <option ${(movie.Rating === "PG" ? "selected" : "")}>PG</option>
                                <option ${(movie.Rating === "G" ? "selected" : "")}>G</option>
                                <option ${(movie.Rating === "Other" ? "selected" : "")}>Other</option>
                            </select><br>
                            <select id="updateAvalibleAtOptions">
                                <option value="" disabled>Choose Avalibility</option>
                                <option ${(movie.AvailableAt === "In Theater" ? "selected" : "")}>In Theater</option>
                                <option ${(movie.AvailableAt === "Disney+" ? "selected" : "")}>Disney+</option>
                                <option ${(movie.AvailableAt === "Netflix" ? "selected" : "")}>Netflix</option>
                                <option ${(movie.AvailableAt === "Prime Video" ? "selected" : "")}>Prime Video</option>
                            </select><br>
                            <input type="text" id="updateDescriptionInput" class="addBoarder" value="${movie.Description}" placeholder="Description..."><br>
                            <button id="save${movie.Id}"> Save Movie </button>
                            `
                        document.querySelector(`#save${movie.Id}`).addEventListener('click', () => {
                            const updatedMovie = new Movie(
                                document.querySelector('#updateMovieTitleInput').value,
                                document.querySelector('#updateRatingOptions').value,
                                document.querySelector('#updateAvalibleAtOptions').value,
                                document.querySelector('#updateDescriptionInput').value,
                                movie.Id
                            )

                            saveUpdatedChanges(movie.Id, updatedMovie, movieFilter);
                        })
                    })
                })
        }
        else {
            movieList.innerHTML = "<p>No movies found</p>"
        }
    }
}


function deleteMovie(movieId) {
    const newMovieList = JSON.parse(localStorage.getItem("update")).filter(movie => movie.Id !== movieId);
    localStorage.setItem("update", JSON.stringify(newMovieList));
    loadMovies()
}


function saveUpdatedChanges(movieId, updatedMovie, movieFilter) {
    const updatedMovieList = JSON.parse(localStorage.getItem("update"));
    const indexToUpdate = updatedMovieList.findIndex((movie) => movie.Id === movieId)
    
    updatedMovieList[indexToUpdate] = updatedMovie;

    localStorage.setItem("update", JSON.stringify(updatedMovieList));
    loadMovies(movieFilter)
}


