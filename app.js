'use strict';
let employeeArr=[];
function Employee(employeeId,fullName, department, level, img,salary) {
    this.employeeId =employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.salary=salary;
    
   
    employeeArr.push(this);
}
    
    
   function salaryCla(level){
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
       let salary=rand-(rand*0.075);
       return salary;
     

      }


    //  Employee.prototype.render= function(){

        //document.write(`employee name:${this.fullName}</br>`)
        //document.write(`employee salary:${this.salary}<br>`);
    
    //}
    
       



      
      employeeArr =[
     new Employee (1000,"Ghazi Samer","Administration","Senior","https://raw.githubusercontent.com/LTUC/amman-prep-d10/main/Class-08/lab/assets/Ghazi.jpg" ),
      new Employee (1001,"Lana Ali","Finance","Senior","https://raw.githubusercontent.com/LTUC/amman-prep-d10/main/Class-08/lab/assets/Lana.jpg"),
      new Employee (1002,"Tamara Ayoub","Marketing","Senior","https://raw.githubusercontent.com/LTUC/amman-prep-d10/main/Class-08/lab/assets/Tamara.jpg"),
      new Employee (1003,"Safi Walid","Administration","Mid-senior","https://raw.githubusercontent.com/LTUC/amman-prep-d10/main/Class-08/lab/assets/Safi.jpg"),
      new Employee (1004,"Omar Zaid","Development","Senior","https://raw.githubusercontent.com/LTUC/amman-prep-d10/main/Class-08/lab/assets/Omar.jpg"),
      new Employee (1005,"Rana Saleh","Development","Junior",'https://raw.githubusercontent.com/LTUC/amman-prep-d10/main/Class-08/lab/assets/Rana.jpg'),
      new Employee (1006,"Hadi Ahmad","Finance","Mid-senior","https://raw.githubusercontent.com/LTC/amman-prep-d10/main/Class-08/lab/assets/Hadi.jpg")];
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
        let fullname = event.target.fullname.value;
        let departmentSelect = event.target.departmentSelect.value;
        let levelSelect = event.target.levelSelect.value;
        let imgPath = event.target.imgUrl.value;
        let salary=salaryCla(levelSelect);
        
        let newEmployee = new Employee(uniqueId(),fullname, departmentSelect, levelSelect, imgPath,salary);
        console.log(newEmployee);
        
        newEmployee.render();
        saveData(employeeArr);
        employeeForm.style.border="10px"
        employeeForm.style.position="center"
    }
        
   
     function uniqueId () {
        return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(4).toString().replace(".", ""));

    }; 
   
        
        Employee.prototype.render= function(){
        let container= document.getElementById('card');
        const div= document.createElement("div");
  


        let imgEl = document.createElement('img');
        imgEl.src=this.img;
        div.appendChild(imgEl);
        
       

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
      salaryEl.textContent = (`salary: ${salaryCla(this.level)}`); 
      div.appendChild( salaryEl);
        
        imgEl.width = "10px";
        imgEl.height = "15px";

        container.appendChild(div)
       
       
      
    }
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