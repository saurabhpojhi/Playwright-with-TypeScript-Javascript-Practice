/* // String - text value or combination of characters

1. Single quote - String literal ('singlequote')
2. Double quote - String literal ("Doublequote")
3. backticl(``) - string templet - when we try to use a string variablke inside string value ${`varoable`}

// index in string start with 0 
or "" or ``(backtick)
*/

// Declaration od strings

let str1:string='This is a string with single quote';
let str2:string='This is a string with double quote';
let str3:string=`This is a string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);


// when use to the backl tick 

let num :number =10;

console.log("number is " , num);
console.log(`number is : num`); 

// String method 

let str:string ="Hello, Typescript"

// 1. length - find the length of string(how many numbe of character)

console.log("find the length",str.length);  

//2 toUpperCase and toLowerCase()
 
console.log("to upper case", str.toUpperCase());
console.log("to lower case", str.toLowerCase()); 

// 3. charAt(index) and indexOf(string)

console.log("char at 4th index ",str.charAt(4)); 
console.log("index of type",str.indexOf("Type"));

// 4. substring() -  
// "Hello, Typescript"
console.log("substtring ", str.substring(0,5)); // Hello

// 5. includes() - =return true or false(boolean)  //vvi
// string value is case sensetive
console.log(str.includes("abc")); // false
console.log(str.includes("Typescript")); //true

// 6. startsWith() and endWith()  - return true or false(boolean)  
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("Typescript")); //true

// 7. replace()
// "Hello, Typescript"
console.log("Replacing string:", str.replace("Typescript","World")); // Hello World

// split() - break the string intpo multiple parts based on the delimeter , return an array -- VVI
// ex1 
  let words :string[]=str.split(" ");
  console.log("after spliting the string :" , words); //  [ 'Hello,', 'Typescript' ]
  
  // ex -2 
  let mystring:string="abc@gmail.com, xyzabc";
      let stringToArrayConvert = mystring.split(", ");
  console.log("spliting the string to array:", stringToArrayConvert); // [ 'abc@gmail.com,xyzabc' ]
// or 
   console.log("email",stringToArrayConvert[0]);
   console.log("password",stringToArrayConvert[1] );
   

   // 9. trim() --Removes spaces from both beginning and end of the string.
   //  trimstart(),Removes spaces only from the beginning (left side).
   //  trimend()  -Removes spaces only from the end (right side).

   let strtrim :string="   Hello   world  ";
   console.log("trim ", strtrim.trim());
   console.log("trimend", strtrim.trimEnd());
   console.log("trimstart", strtrim.trimStart());

   // concat() 

    str1="Welcome";
    str2="world";
    console.log("after concatnation", str1.concat(str2));
    console.log("after concatnation", str1+str2);
    
   
  // concept of string immutable
  
  num=10;
  let res1= num+5;
  console.log(res1); //15 
  console.log(num); // 10

  
  


