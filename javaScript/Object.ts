
// object - object contains properties and behaviour 

// object contains variable & methods 
// object is collection of key and value pairs

// EX 
// employee --name , desg, sal , dep 

/* // Diffrent ways to create an object in js/ts 
1. using 'object' type - directly define yhe values for variables(js/ts)
2. inline type Object - we alos define datatype of the key (ts)
3. using aliases(js/ts)
4. using the classes(js es16/ts) */

// 1. using 'object' type - directly define the value for variable
// the typscript object type represent all values that are not in premitve types
/* 
let employee:object={
      name:"john",
      age:30,
      salary:50000,
      job:"QA"

}
 */

let employee={
      name:"john",
      age:30,
      salary:50000,
      job:"QA",
      getDetails:function(){
            // console.log(this.name,this.age,this.salary,this.job);
             
             return `${this.name} is a ${this.age} ${this.job} earning ${this.salary}`; // this is mostlu used
      }
}
    console.log(typeof employee);

// Accessing object - Approach 1 (using dot . notation)
  console.log(employee.name,employee.age,employee.salary,employee.job); // john 30 50000 QA
  console.log(employee.getDetails());//john is a 30 QA earning 50000

  // Accessing object - Approach 2 (using braket notation)
      console.log(employee["name"],employee["age"],employee["salary"], employee["job"]);
      console.log(employee["getDetails"]());

      // Modify the value 
      employee.job="Dev";
      console.log("modified job is :", employee.job);

      //==============================================================================
      // 2. inline type Object - we alos define datatype of the key (ts)

      // p[roblem with inline type object - need to repeat strurure for ervery object 
      let student:{
            name:string,
            age:number,
            grade:string,
            getSummary: ()=>string
      }=
      {
            name:"scott",
            age:14,
            grade:"A",
            getSummary: function(){
                  return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
            }


      }

      console.log(student.getSummary()); // scott is 14 years old and scored grade A
     
 // ===================================================================

 // 3. using type  alliases(js/ts)  - allow creating the new name for an extisting type
 
 // example 1 - 

  type Product={
      name:string,
      price:number,
      getInfo: ()=>string
  };

  let book1:Product=
  {
       name:"Learn java",
       price:1200,
       getInfo: function(){
            return `${this.name} costs ${this.price}`;
       }
  }

let book2:Product=
  {
       name:"Learn python",
       price:1100,
       getInfo: function(){
            return `${this.name} costs ${this.price}`;
       }
  }

let book3:Product=
  {
       name:"Learn javaScript",
       price:1300,
       getInfo: function(){
            return `${this.name} costs ${this.price}`;
       }
  }
console.log(book1.getInfo()); // Learn java costs 1200
console.log(book2.getInfo()); // Learn python costs 1100
console.log(book3.getInfo()); // Learn javaScript costs 1300

for(let i in book3){
      console.log(book3.name);
      console.log(book3.price);
      
      
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. using the classes(js es16/ts) */ this is most vvi - this is recomenedble 

 class Person{
       ssn:number;
       firstName:string;
       lastName:string;

         constructor(ssn:number,firstName:string,lastName:string){
            this.ssn=ssn;
            this.firstName=firstName;
            this.lastName=lastName;
         }
        getFullName():string{
            return `${this.firstName} ${this.lastName}`;
        }
        getDetails():string{
            return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
        }

 }

 // object creation 

 let person1=new Person(12111,'john','kendy');
   person1.getDetails();
console.log(person1.getDetails());


   let person2=new Person(2222,'David','D');
   person2.getDetails();
console.log(person2.getDetails());

   let person3=new Person(3333,'Three','T');
   person2.getDetails();
console.log(person3.getDetails());
