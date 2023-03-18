'use strict';
let employeeArr=[];
function Employee(fullName, department, level,img) {
    this.employeeId =uniqueId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.salary=0;    
   
    employeeArr.push(this);
    //console.log(fullName, department, level,img) ;
}
    
    
  Employee.prototype.salaryCla= function (level){
    let min;
    let max;
       if ( level=="Senior"){
        min=1500;
        max=2000;
       }
       
       else if(level=="Mid-senior"){
        min=1000;
        max=1500;
       }
      
       else if(level=="Junior"){
        min=500;
        max=1000;
        
       }

       let rand=Math.floor(Math.random() * (max - min) ) + min;
       let sal=rand-(rand*0.075);
       this.salary=sal;
     

      }


    //  Employee.prototype.render= function(){

        //document.write(`employee name:${this.fullName}</br>`)
        //document.write(`employee salary:${this.salary}<br>`);
    
    //}
    
       



      
      employeeArr =[
     new Employee ("Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg"),
      new Employee ("Lana Ali","Finance","Senior","./assets/Lana.jpg"),
      new Employee ("Tamara Ayoub","Marketing","Senior","./assets/Tamara.jpg"),
      new Employee ("Safi Walid","Administration","Mid-senior","./assets/Safi.jpg"),
      new Employee ("Omar Zaid","Development","Senior","./assets/Omar.jpg"),
      new Employee ("Rana Saleh","Development","Junior",'./assets/Rana.jpg'),
      new Employee ("Hadi Ahmad","Finance","Mid-senior",'./assets/Hadi.jpg'),]
    //   Ghazi.render();
    //   Lana.render();
    //   Tamara.render();
    //   Safi.render();
    //   Omar.render();
    //   Rana.render();
    //   Hadi.render();

   // for( let i=0;i<employeeArr.length;i++){
       // employeeArr[i].salaryCla();
        //employeeArr[i].render();
   // };



    let body = document.getElementsByTagName("body");
    let sectionEl =document.getElementById("sec");
    let employeeForm = document.getElementById("employeeForm");

    
    employeeForm.addEventListener('submit', employeeHandler);
    function employeeHandler(event) {
        event.preventDefault();
        let fullname=event.target.fullname.value;
        let departmentSelect=event.target.departmentSelect.value;
        let levelSelect=event.target.levelSelect.value;
        let img=event.target.img.value;
        
        
        let newEmployee = new Employee(fullname, departmentSelect, levelSelect ,img);
        console.log(newEmployee);
        newEmployee.salaryCla();
        console.log(newEmployee.salary);
        newEmployee.render();
        saveData(employeeArr);
        employeeForm.style.border="10px"
        employeeForm.style.position="center"
    }
        
   
     function uniqueId () {
        return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(4).toString().replace(".", ""));

    }
   
        
        Employee.prototype.render= function(){
          this.salaryCla(this.level);
        let container= document.getElementById('card');
        const div= document.createElement("div");
  

        let imgEl = document.createElement('img');
        imgEl.src=this.img;
        div.appendChild(imgEl);
        imgEl.style.width="250px";
       imgEl.style.height="250px"
       

        let nameEl = document.createElement('h3');
        nameEl.textContent = (`Name:${this.fullName}`);
        div.appendChild(nameEl);
        
      
        let idEl =  document.createElement('p');
        idEl.textContent = (`Id:${uniqueId()}`);
       div.appendChild( idEl);



       let departmentEl = document.createElement('p');
        departmentEl.textContent = (`Department:${this.department}-level:${this.level} `);
        div.appendChild(departmentEl);
       let salaryEl = document.createElement('p');
      salaryEl.textContent = (`salary: ${this.salary}`); 
      div.appendChild( salaryEl);
      imgEl.title="dd";
       
        container.appendChild(div)       
       
      
    };
    function renderall(){
    for( let i=0;i<employeeArr.length;i++){
       
        employeeArr[i].render();

        
    }
       
       
    };
    function saveData(data) {

        let stringfiyData = JSON.stringify(data);
        localStorage.setItem("employe", stringfiyData);
      }
      console.log(localStorage);


      function getData() {

        let retrievedData = localStorage.getItem("employe");
        let arrayData = JSON.parse(retrievedData);
        if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {

            new Employee(arrayData[i].employeeId, arrayData[i].fullName, arrayData[i].department, arrayData[i].level, arrayData[i].img, arrayData[i].salary);
      
          }}
         renderall();
      }
      getData();

     
      
