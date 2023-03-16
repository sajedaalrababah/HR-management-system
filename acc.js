
let acc = localStorage.getItem("info");


let objArr= JSON.parse(acc);

console.log();


depAllinfo = {
    "Marketing": {
        empCount: 0,
        totSalary: 0,
        avgSalary: 0,
    },
    "Finance": {
        empCount: 0,
        totSalary: 0,
        avgSalary: 0,
    },
    "Development": {
        empCount: 0,
        totSalary: 0,
        avgSalary: 0,
    },
    "Administration": {
        empCount: 0,
        totSalary: 0,
        avgSalary: 0,
    }
}

let allEmp=[];


let tableEl =document.getElementById("table");


function addRow(p1, p2, p3, p4,){
    let tr = document.createElement("tr");
   

    let depName = document.createElement("td");
    depName.textContent = p1
    tr.appendChild(depName);

    let empCountEl = document.createElement("td");
    empCountEl.textContent = p2;
    tr.appendChild(empCountEl);



    let avgSalaryEl = document.createElement("td");
    avgSalaryEl.textContent = p3;
    tr.appendChild(avgSalaryEl);


    let totSalaryEl = document.createElement("td");
    totSalaryEl.textContent = p4;
    tr.appendChild(totSalaryEl);

    tableEl.appendChild(tr);
}
for (let i = 0; i <allEmp.length; i++) {
    let emp = allEmp[i];
    emp.salary()
    depAllinfo[emp.department].empCount += 1
    depAllinfo[emp.department].totSalary += emp.salary
    depAllinfo[emp.department].avgSalary = (depAllinfo[emp.department].totSalary / depAllinfo[emp.department].empCount)
    console.log(table(emp))
    console.log(table(depAllinfo[emp.department]))
}
let totSum = 0;
let avgSum = 0;
for (key in depAllinfo) {
    dept = depAllinfo[key];

    avgSum += dept.avgSalary;
    totSum += dept.totSalary;

    addRow(key,  dept.empCount, dept.avgSalary, dept.totSalary);
}

addRow("", "", avgSum, totSum, );