
/*  Type/DataType
 Annotation 
 Type Infrerence

 let age :number = 30;

 number -> data type
 annotation ->> :number

 Type Infrerence
 ->> 
 let age = 30 
  */


   // Type Script data type 

    /*  1) Premitive data Type (built in )
        Number 
    String
    Boolean
    null
    undefined
    any 
    union type
    void

    2) Non-Premitive data Type (objects)

     Array
     class
     Function
     Interface
     Touple   // etcs

 */

     // 1. Number type   -- represent both integer & float point number 

     let age :number =30;
     let price = 200.5;
     let big= 3333333.555;

     console.log("age",age);
     console.log("price", price);
     console.log("Big number", big);

     console.log(typeof(age));
     console.log(typeof age); 

     //String Type -- represent textual data  

    /*  String represent with 3 way 
     1. SingleQuote('')
     2. DoubleQuote(" ")
     3. BackTick(``)
 */

      let firstName:String="Saurabh";
      let lastName:String='kumar';
      
      console.log("Hello", firstName,lastName); // Hello Saurabh kumar
     
      let greeting:String=`Hello ${firstName} ${lastName}`; 
      console.log(greeting);// Hello Saurabh kumar

// Boolean -- true or false 

    let isStudent:Boolean=true;
    let hasJob:Boolean=false;
    
    console.log("isStudent",isStudent); // isStudent true
    console.log("hasJob",hasJob);   // hasJob false


// 4  Null & undefind  -- special type for absence oif value

  let emptyValue:null=null;
  let notAssigend:undefined=undefined;

  console.log(emptyValue) // null
  console.log(notAssigend) // undefined

  // void type - used for function taht do not have return anything 

   function show():void
   {
    console.log("Welcome");
   }
   show()


