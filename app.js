'use strict';
let employeeArr=[];
function Employee(employeeId,fullName, department, level, img) {
    this.employeeId =employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    
   
    employeeArr.push(this);
}
    
    
  Employee.prototype.salaryCla=function(){
    let min;
    let max;
       if ( this.level=="Senior"){
        min=1500;
        max=2000;
       }
       
       else if(this.level=="Mid-senior"){
        min=1000;
        max=1500;
       }
      
       else if(this.level=="Junior"){
        min=500;
        max=1000;
        
       }

       let rand=Math.floor(Math.random() * (max - min) ) + min;
       this.salary=rand-(rand*0.075);
       return this.salary;
     

      }


    //  Employee.prototype.render= function(){

        //document.write(`employee name:${this.fullName}</br>`)
        //document.write(`employee salary:${this.salary}<br>`);
    
    //}
    
       



      
      employeeArr =[
     new Employee (1000,"Ghazi Samer","Administration","Senior","../assets/Ghazi.jpg"),
      new Employee (1001,"Lana Ali","Finance","Senior","../assets/Lana.jpg"),
      new Employee (1002,"Tamara Ayoub","Marketing","Senior","../assets/Tamara.jpg"),
      new Employee (1003,"Safi Walid","Administration","Mid-senior","../assets/Safi.jpg"),
      new Employee (1004,"Omar Zaid","Development","Senior","../assets/Omar.jpg"),
      new Employee (1005,"Rana Saleh","Development","Junior",'../assets/Rana.jpg'),
      new Employee (1006,"Hadi Ahmad","Finance","Mid-senior","../assets/Hadi.jpg")];
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
        let levelselect = event.target.levelselect.value;
        let imgPath = event.target.imgUrl.value;
        let newEmployee = new Employee(fullname, departmentSelect, levelselect, imgPath);
        console.log(newEmployee);
    }


        let id = 1000;
        Employee.prototype.uniqueId = function () {
            this.employeeId = id++;
            return this.employeeId ;
        }
        
        Employee.prototype.render= function(){
        let divEl = document.getElementById('cards');
       
        let imgEl = document.createElement('img');
        imgEl.src=this.img;
        sectionEl.appendChild(imgEl);
       

        let nameEl = document.createElement('h3');
        nameEl.textContent = (`Name:${this.fullName}`);
        sectionEl.appendChild(nameEl);
        
      
        let idEl =  document.createElement('p');
        idEl.textContent = (`Id:${this.employeeId}`);
        sectionEl.appendChild( idEl);



       let departmentEl = document.createElement('p');
        departmentEl.textContent = (`Department:${this.department}-level:${this.level} `);
        sectionEl.appendChild(departmentEl);
    
       
       
        
        
        imgEl.width = "150";
        imgEl.height = "150";
     
        
    
       
        
    
    }
    for( let i=0;i<employeeArr.length;i++){
        employeeArr[i].salaryCla();
        employeeArr[i].render();
        employeeArr[i].uniqueId();
    };