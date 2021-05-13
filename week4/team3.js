let table = document.querySelector (".wrapper");
let counter = 0;
table.addEventListener ("touchend",event=>{
   if(!event.target.innerText){
    event.target.innerText = (counter%2 == 0?"X":"O");
    counter++
   } 
}
);

let reset =document.querySelector("button")
reset.addEventListener("click",() => {
    document.querySelectorAll(".wrapper div").forEach(element => {
        element.innerText = ""
        counter = 0
    });

});

