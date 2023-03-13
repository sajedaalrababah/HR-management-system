'use strict'
let account=localStorage.getItem('Info');
function readFromLocal() {                         
    let jsonArray = localStorage.getItem('allEmployees');
    let arr = JSON.parse(jsonArray);
    if (arr !== null)
        return arr;
    else
        return [];
}

let tableEl =document.getElementById("table");

let sum ;
let avg;
getData();
avg = sum /length




function Employee(department, employeesNum, totalSalary, averge){
    this.department = department;
    this.employeesNum = employeesNum;
    this.totalSalary = totalSalary;
    this.avgSalary = averge;

    allEmployee.push(this);
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




}



/*function avgSalary() {
    let newSalary = 0;
    let avg = 0;
    for (let i = 0; i < allEmployee.length; i++) {
        newSalary += this.salary;
    }
    avg = newSalary/allEmployee.length;
    return avg;
    }


function renderall(){
    for( let i=0;i<employeeArr.length;i++){
       
        employeeArr[i].renderTable();
        
    }

}

