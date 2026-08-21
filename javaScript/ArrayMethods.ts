
 let numbers:number[] = [1,2,3,4,5,6];
 let fruites:string[]=["apple","banana","orange","mango"];

 console.log("Number of array", numbers);
console.log("fruites array", fruites);

// length - attributes (not method)
console.log("size of number array", numbers.length); //6
console.log("size of string array", fruites.length); // 4

/// 1. push () - adds single/multiple elemets to the end of an array 

// syntex : array.push(elemets, ... elemetN)

numbers.push(7,8);
console.log("Number of array", numbers);

// 2. pop()- removes from the last element from the array

// syntex: array.pop();

let lastnumberremove = numbers.pop();
console.log("remove from the last element", numbers);
console.log("remove from the last element", lastnumberremove);

// 3. Shift() - Removes the first element from A ARRAY
   // syntex - array.shift();

   let firstnumber = numbers.shift();
   console.log("remove from the first element", numbers);
   console.log("remove from the first element", firstnumber);

   // 4. Unshift() - Adds single/multiple elelmts to the beginning of an array

   // syntex - array.unshift(elemet1, ..., elemetN)

   fruites.unshift("kiwi","pear");
   console.log("after unshift", fruites); // [ 'kiwi', 'pear', 'apple', 'banana', 'orange', 'mango' ]

   // 5. concat() - combine two or more array of same type
   // syntex - array.concat(array1, ..., arrayN)

   let combineArray = numbers.concat([9,10],[11,12]);
   console.log("combins array", combineArray);

   // 6. slice ()  - extraxt a section of an array 
   // starting index starts from zero
   // syntex - array.slice(start,end)

   let extractArray = fruites.slice(1,3);
   console.log("after slice", extractArray) ; // [ 'pear', 'apple' ]

   //7indexOf() - finds the index of an element , if element not found then return -1 ;

     // syntex - array.indexOf(searchElement) or array.indexOf(searchelemet, starting index)

     let bananaindex = fruites.indexOf("banana");
     console.log("index of banana ", bananaindex);

     // 8. includes() - check if an elemet exist
     // true or false
     // syntex - array.includes(searchelemet, fromindex)

     let isAppleExist = fruites.includes('apple');
     console.log("Does fruits is exists", isAppleExist);

     // 9. toString() - convert array to string
     // syntex - array.toString()

     console.log(numbers); // [ 2, 3, 4, 5, 6, 7 ]
     let numberString = numbers.toString();
     console.log("number to string",numberString);

let myarray = ['a','b','c','c'];

let  convertArraytostring = myarray.toString();
console.log(convertArraytostring);



