'use strict';
let employeeArr=[];
function Employee(fullName, department, level, img) {
    this.employeeId = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.netSalary = 0;
   
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
     this.netSalary=rand-(rand*.075);
     return this.netSalary;

      }


      Employee.prototype.render= function(){

        document.write(`${this.fullName}&&${this.netSalary}`)





      }


