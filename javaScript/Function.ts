
// named function - a fucntion that is declared with a name

/* Syntax

  function functionname(parameter):return type 
  {
    // block of code
  }
  functionnname();   // declaraing the function  */

  function addNumbers(x:number, y:number):number
  {
      return x+y;
  }
 
  let res:number=addNumbers(2,3);
  console.log(res);

  // annyomous  function
  let msg= function(): string
  {
    return"hello";
  }
msg();