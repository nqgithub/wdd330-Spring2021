let firstname = "Nick";
let lastname = "Quast" 
let iNumber = "1122334455";


let student 1= {
    firstName: 'Nick'
    lastNaem: 'Quast'
    iNumber: '1122334455'
}

let student 2= {
    firstName: 'Tim'
    lastNaem: 'Thanyn'
    iNumber: '1122334455'
}



let students = localStorage.getItem("students");

students.push(student1);
students.push(student2);


localStorage.setItem("students", JASON.stringify(students));


//function declaration (hoisted)
function log(variableName) {
    console.log(variableName);
}

log(firstName);

