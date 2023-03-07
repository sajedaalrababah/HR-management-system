'use strict';
let employeeArr=[];
function Employee(employeeId,fullName, department, level, img=null) {
    this.employeeId =employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    
   
    employeeArr.push(this);
}

Employee.prototype.salary= function() {
    let rand=Math.floor(Math.random() * (max - min) ) + min;
     this.salary=rand-(rand*.075);

       if ( this.level=="senior"){
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
   
     
     return this.salary;

      }


      Employee.prototype.render= function(){

        document.write(`employee name:${this.fullName}`)
      document.write(`employee salary:${this.salary}`);
       



      }

      let Ghazi =new Employee (1000,"Ghazi Samer","Administration","Senior");
      let Lana =new Employee (1001,"Lana Ali","Finance","Senior");
      let Tamara=new Employee (1002,"Tamara Ayoub","Marketing","Senior");
      let Safi=new Employee (1003,"Safi Walid","Administration","Mid-senior");
      let Omar =new Employee (1004,"Omar Zaid","Development","Senior");
      let Rana=new Employee (1005,"Rana Saleh","Development","Junior");
      let Hadi =new Employee (1006,"Hadi Ahmad","Finance","Mid-senior");
      Ghazi.render();
      Lana.render();
      Tamara.render();
      Safi.render();
      Omar.render();
      Rana.render();
      Hadi.render();