'use strict'
let retrievedData = localStorage.getItem("employe");
let arrayData = JSON.parse(retrievedData);

let tableEl =document.getElementById("table");


let allDepartments=[];

function Employee(department, employeesNum, totalSalary, avgSalary){
    this.department = department;
    this.employeesNum = employeesNum;
    this.totalSalary = totalSalary;
    this.avgSalary =avgSalary();

    allDepartments.push(this);
    };

Employee.prototype.renderTable=function(){

    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);

    let depName = document.createElement("td");
    depName.textContent = this.department
    tr.appendChild(depName);

    let employeCountEl = document.createElement("td");
    employeCountEl.textContent = this.employeesNum;
    tr.appendChild(employeCountEl);


    let totSalaryEl = document.createElement("td");
    totSalaryEl.textContent = this.totalSalary;
    tr.appendChild(totSalaryEl);

    let avgSalaryEl = document.createElement("td");
    avgSalaryEl.textContent = this.averge;
    tr.appendChild(avgSalaryEl);


    new Employee(depName, employeCountEl, totalSalary, avgSalary);


}


function avgSalary() {
    let newSalary = 0;
    let avg = 0;
    for (let i = 0; i < allDepartments.length; i++) {
        newSalary += this.salary;
    }
    avg = newSalary/allDepartments.length;
    return avg;
    }



    function totalSalary (){
        for(let i=0; i<allDepartments.length;i++); 
    }
   
        
    





function renderall(){
    for( let i=0;i<allDepartments.length;i++){
       
        allDepartments[i].renderTable();
        
    }

}

