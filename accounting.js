'use strict'

let acc = localStorage.getItem("info");
let tableEl =document.getElementById("table");

let objArr= JSON.parse(acc);

console.log(localStorage);






    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);

    let depName = document.createElement("td");
    depName.textContent = this.department
    trEl.appendChild(depName);

    let employeCountEl = document.createElement("td");
    employeCountEl.textContent = this.employeesNum;
    trEl.appendChild(employeCountEl);


    let totSalaryEl = document.createElement("td");
    totSalaryEl.textContent = this.totalSalary;
    trEl.appendChild(totSalaryEl);

    let avgSalaryEl = document.createElement("td");
    avgSalaryEl.textContent = this.averge;
    trEl.appendChild(avgSalaryEl);


    new Employee(depName, employeCountEl, totalSalary, avgSalary);
 allDepartments.renderTable() ;





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
        let sum=0
        for(let i=0; i<allDepartments.length;i++); {
        sum+=allDepartments[i].totSalaryEl;
    }
    
   
      return sum;  
}





function renderall(){
    for( let i=0;i<allDepartments.length;i++){
       
        allDepartments[i].renderTable();
        
    }

}

