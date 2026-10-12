
//Creattion

let emp = {}
function createEmp(){
    emp.name = document.getElementById("myName").value
    emp.job = document.getElementById("myJob").value
    emp.salary = document.getElementById("mySal").value
    console.log(emp);
    

}

//displaying

function displayDetails(){
    document.getElementById("output").innerHTML = `
    <h1> Employee details </h1> 
<h2> Name : ${emp.name} </h2>
 <h2> salary : ${emp.salary} </h2>
 <h2> job : ${emp.job} </h2>`;

}

//deleting

function deleteDetails() {
    delete emp.name;
    delete emp.salary;
    delete emp.job;

    document.getElementById("output").innerHTML =
        "<h2>Employee details deleted!</h2>";

    console.log(emp);
}


//updatinggg


function updateDetails() {
    emp.name = document.getElementById("myName").value;
    emp.salary = document.getElementById("mySal").value;
    emp.job = document.getElementById("myJob").value;

    document.getElementById("output").innerHTML = `
        <h1>Updated Employee Details</h1>
        <h2>Name: ${emp.name}</h2>
        <h2>Salary: ${emp.salary}</h2>
        <h2>Job: ${emp.job}</h2>
    `;

    console.log(emp);
}


