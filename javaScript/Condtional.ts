
    // if condition 

    // example 1 - if age is greater than eual to 18 , then message "You are eligible to vote"

    let age :number=20;

    if(age>=18)
    {
        console.log("You are eligible to vote");
    }

    // if else condition 

   /*  if(condition){
        statemets;
    } 
    else
    {
        statemets;
    } */

        // example 2 : if num is divisible by 2 , it is even otherwise it is odd

        let num:number=10;

        if(num%2 ==0){
                 console.log(`${num} Even number`);
        } else{
             console.log(`${num} Odd Number`);
        }

        // suppose we have muitle if cinstion go with nested 

        // Nested if else 
/* 
             if(condition1){
                statements;
            } else if(condition2){
                statements;
            } else if(condition 3){
                statements;
            }  else{
                 statements;
            } */

// Example 3 : depending on the marks , display approriate grade

  /* marks >90 Grade A
  marks >=75 Grade B
  marks >=60 Grade C

  Grade D

 */

  let marks:number=30;
  
  if(marks>90 && marks<=100){    // condition1
    console.log(`${marks} Grade A`);
  } else if(marks>=75 && marks<90){ // condition2
    console.log(`${marks} Grade B`);
  } else if(marks>=60 && marks<90){  // condition3
    console.log(`${marks} Grade C`);
  } else if(marks>=50 && marks<60){ // condition4
    console.log(`${marks} Grade D`);
  } else{
    console.log(`${marks} Fail`);   
  }

// Example 4    : Browser selection

 let browser:String="chrome";

 if(browser =="chrome"){
    console.log("Browser is chrome");
 } else if(browser =="firefox"){
    console.log("Browser is firefox");
 }else if(browser =="safari"){
    console.log("Browser is safari");
 } else{
    console.log("Other Browser");
 }

 // Check if a person is a teenager (age between 13 and 19). 

  let ages: number = 16;
   if(ages >=13 && ages<=19){
       console.log(`${ages} person is a teenager`);
   }

   // Check if a number is positive and even
   let nums:number =10;
   if(num >0)
   {
      if(num % 2 ===0){
        console.log("Number is positive and even");
      } else{
         console.log("Number is positive but odd");
      }
   } else {
     console.log("Number is not positive");
   }

   // Check if a character is a vowel or consonant 
   // way 1 -- if lese -
    let ch : string = "z";
    if(ch==='a'|| ch==='e'|| ch==='i'||ch==='o'||ch==='u'){
        console.log(`${ch} charcter is vowel`);
    } else{
        console.log(`${ch} charcter is constant`);
    }

    // way2 -- include - recomended 
    let char:string ="a";
    if("aeiou".includes(char.toLocaleLowerCase())){
           console.log(`${char} charcter is vowel`);
    }else{
        console.log(`${char} charcter is constant`);
    }
    // way3 -- set - 

    let char1:string="u";

    let vowels = new Set(['a','e','i','o','u']);

    if(vowels.has(ch.toLocaleLowerCase())){
        console.log(`${char1} charcter is vowel`);
    }else{
        console.log("charcter is constant");
    }
    // way4 - ternery operator 

    let char2 :string ="g";
    console.log("aeiou".includes(char2.toLocaleLowerCase()) ? "vowel" : "constant");

        
