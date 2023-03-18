'use srtict';



let retreivedArr = localStorage.getItem('employe');
let arrayData = JSON.parse(retreivedArr);

const departments = {};

for (let i = 0; i <arrayData.length; i++) {
  const employee = arrayData[i];
  
  if (!departments[employee.department]) {
    departments[employee.department] = {
      count: 0,
      totalSalary: 0,
      averageSalary: 0
    };
  }

  departments[employee.department].count++;
  departments[employee.department].totalSalary += employee.salary;
}

for (const department in departments) {
  departments[department].averageSalary = departments[department].totalSalary / departments[department].count;
}

for (const department in departments) {


const tableBody = document.getElementById("table-body");  
    if (!department) {
      continue;
    }
  const row = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = department;
  row.appendChild(td1);
  const td2 = document.createElement("td");
  td2.textContent = departments[department].count;
  row.appendChild(td2);
  const td3 = document.createElement("td");
  td3.textContent = departments[department].totalSalary;
  row.appendChild(td3);
  const td4 = document.createElement("td");
  td4.textContent = departments[department].averageSalary;
  row.appendChild(td4);
  tableBody.appendChild(row);
 
}
function totalSalary(){
  let totalSalary = 0;
for (const department in departments) {
  totalSalary += departments[department].totalSalary;
}
return totalSalary;
}

function totalNum(){
  let sum = 0;
for (const department in departments) {
  sum += departments[department].count;
}
return sum;
}

function totalAverage(){
  let avg=0;
for (const department in departments) {
  avg+=departments[department].averageSalary
}
return avg;
}

const tableFooter = document.getElementById("table-footer");

const td5 = document.createElement("td");
td5.textContent = "Total";
tableFooter.appendChild(td5);

const td6 = document.createElement("td");
td6.textContent = totalNum();
tableFooter.appendChild(td6);

const td7 = document.createElement("td");
td7.textContent = totalSalary();
tableFooter.appendChild(td7);

const td8 = document.createElement("td");
td8.textContent = totalAverage();
tableFooter.appendChild(td8);