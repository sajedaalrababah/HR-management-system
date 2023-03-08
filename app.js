'use strict';
let employeeArr=[];
function Employee(employeeId,fullName, department, level, img=null) {
    this.employeeId =employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.salary=0;
   
    employeeArr.push(this);
}

Employee.prototype.salaryCla= function(min,max) {
    let rand=Math.floor(Math.random() * (max - min) ) + min;
     this.salary=rand-(rand*0.075);

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
  employeeArr =[
     new Employee (1000,"Ghazi Samer","Administration","Senior"),
      new Employee (1001,"Lana Ali","Finance","Senior"),
      new Employee (1002,"Tamara Ayoub","Marketing","Senior"),
      new Employee (1003,"Safi Walid","Administration","Mid-senior"),
      new Employee (1004,"Omar Zaid","Development","Senior"),
      new Employee (1005,"Rana Saleh","Development","Junior"),
    new Employee (1006,"Hadi Ahmad","Finance","Mid-senior")];
    //   Ghazi.render();
    //   Lana.render();
    //   Tamara.render();
    //   Safi.render();
    //   Omar.render();
    //   Rana.render();
    //   Hadi.render();

    for(i=0;i<employeeArr.length;i++){
        employeeArr[i].salary();
        employeeArr[i].render();
    }