
import Auth from "./auth.js"

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();

    let auth = new Auth();
    auth.login();
});



    

