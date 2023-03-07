'use strict';
let employeeArr=[];
function Employee(fullName, department, level, img) {
    this.employeeId =this.employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.Salary = 0;
   
    employeeArr.push(this);
}

Employee.prototype.salaryLevel= function() {
       if ( this.level=="senior"){
        min=1500;
        max=2000;
        
       }
       else if(this.level="Mid-senior"){
        min=1000;
        max=1500;
       
       }
    
       else if(this.level="Junior"){
        min=500;
        max=1000;
        
       }
   
     let rand=Math.floor(Math.random() * (max - min) ) + min;
     this.Salary=rand-(rand*.075);
     return this.Salary;

      }


      Employee.prototype.render= function(){

        document.write(`employee name:${this.fullName}<br> employee salary:${this.Salary}`);
       



      }

      let Ghazi =new Employee (1000,"Ghazi Samer","Administration","img","Senior");
      let Lana =new Employee (1001,"Lana Ali","Finance","img","Senior");
      let Tamara=new Employee (1002,"Tamara Ayoub","Marketing","img","Senior");
      let Safi=new Employee (1003,"Safi Walid","Administration","img","Mid-senior");
      let Omar =new Employee (1004,"Omar Zaid","Development","img","Senior");
      let Rana=new Employee (1005,"Rana Saleh","Development","img","Junior");
      let Hadi =new Employee (1006,"Hadi Ahmad","Finance","img","Mid-senior");
      Ghazi.render();
      Lana.render();
      Tamara.render();
      Safi.render();
      Omar.render();
      Rana.render();
      Hadi.render();