
// 1 scope - asseable are  (functional scope(var), block scope (let and const))

import { BlockList } from "node:net";
import test from "node:test";

// example 1 : var (functional scope)
 
  /* function varScope()
  {
         if (true)
         {
             var msg = "HEllo";
              const testconst = "test const";
               console.log(msg)
         
         }
              console.log(msg) // access
        
            

  }
    varScope(); */

    // block scope 

// Example 2 : let and const (block scope)

 /*  function blockScope(){
            if(true)
            {
                let msg = "testlet"
            const greet = " test const"
            console.log(msg)
            console.log(greet)
            }
       //  console.log(msg) // cannot access
       //  console.log(greet) // cannot access

  }
    blockScope();
 */
    // Example 3  

   /*  function scopediff(){
          if(true){
             var num1 =1;
             let num2 = 2;
             const num3 = 3;
             console.log(num1);
             console.log(num2);
             console.log(num3);

          }
            console.log(num1);  // access - functional scope 
             console.log(num2); // cannnot access - block scope
             console.log(num3); // cannot access - block scope
    }
     scopediff(); */

     // 2 Declaration/value assighment 

     // Example 1: var can be declared without initialization

      /*  var x;  // declared 
       console.log(x); // undefined
       x=30;    // initilization
        console.log(x);

        //Example 2: let can be declared without initialization
          let y;// declared
          console.log(y); // undefined
        y=40;  // initilization
 */
        // Example 3: const mujst be initialised at the time of declaration 

      //const z;
      //console.log(z);


      // Redecalration 
      // var - allow the re-declartion \
      // let and const - nopt allow the re-declaration(making code safer)

      // Example 1 -  allow the re-declartion 
       
   /*    var city = "Delhi"
      var city ="Noida"
       console.log(city);
 */

         // let  - not allow the re-declaration(making code safer)
         /* let country = "India"
         let country ="Aus"
         console.log(country);
 */
         //const allow the re-declaration(making code safer)
        /*  const car="bmw";
         const car ="tesla"

         console.log(car); */

         // 4 Re-initialization /re-assignment
         // var and let - - re-aasignment allowed 
         // const - re-assigjnrmrnt not allowed (only constants allowed - cannot changed the value)

         // example 1 : var allow re-assignment
            /*  var x=10;
             x=30;
             console.log(x); */
 // example 2 :let  allowed re-assginemnt
          let age=20;
          age=30; // allo0wed
        console.log(age);

      // example 2 :const not allowed re-assginemnt
             /*  const age=25;
              age=36; // not allowed
              console.log(age); */

              // Hoisting  // when deaclred the var with undefined so cslled hoisting 

              /* console.log(a); // undefined
              var a =10;
              console.log(a); */

              // with let 
               /* console.log(a);// undefined
              let a= 20;
              console.log(a); */

              
 