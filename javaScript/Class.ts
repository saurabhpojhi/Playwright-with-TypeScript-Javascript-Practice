

/* 1. class
2. Read only properties
3. optional property
4. static variables and method 
 */

class Student 
{
    readonly  studentId:number; // read only property (can only by assigned once, inside constructor)
      name:string;   // regular property
      email ?:string; // optional property(can be undefined)
   //   schoolName:string;

    // constructor
     constructor(sid:number,sname:string,email?:string){
             this.studentId=sid;
             this.name=sname;
             this.email=email; // if ypou do not pass e,ail then it is undefined
     }

     
// method 
displayInfo():void{
             console.log("Student id",this.studentId);
              console.log("Student name",this.name);
              console.log("email id:", this.email);
               
              if(this.email){
                console.log("email id:", this.email);
              } else{
                console.log("email id is not provided");
              }
             
}

}

// usage 

let s1= new Student(101,"john");
let s2 = new Student(201,"bob","bob@gmail.com");

//  disp[lay stundet info
   s1.displayInfo();
   s2.displayInfo();
   
