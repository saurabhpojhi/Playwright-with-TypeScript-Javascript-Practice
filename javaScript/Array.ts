
 // approach 1 : using litereal 

/*  let names:string[]=[];

 // initialization /assign the values

 names[0]="john";
 names[1]="peter";

console.log(names);
 */
let names:string[] =["john","smith","peter"];

console.log(names);

// emaple 1 - iterating the over an array using a traditiopnal for loop

  let empname:string[]= ["john","smith","peter"];

  console.log("size of an array",empname.length);
 
    for(let i =0; i<empname.length; i++){
          console.log(empname[i]);
    }

// Example 2; iterating  array using a for..in loop

for(let i in empname ){
          console.log(empname[i]);
}
