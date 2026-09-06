
// q 1. remove the duplicate number from array  - adobe 
  
// ... spread operator Set ke elements ko wapas array mein convert kar deta hai.

let arr =[1,2,3,4,4,5,6,6,7];

let result = [...new Set(arr)];
console.log("remove dublicate", result);

// way 2   --for Loop — Interview mein Logic Explain Karne ke Liye Best

let arr1 =[1,2,3,4,4,5,6,6,7];
  let res =[];

   for(let i=0; i< arr1.length; i++ ){
       if(!res.includes(arr1[i])){
        res.push(arr1[i]);
       }
   }
console.log("remove dublicate for loop ", res);

// Q2 - Find Duplicate Elements

   let arr5 = [1,2,3,,4,4,3,2,6];
    let dublicate =[];
     
    for(let i =0; i < arr5.length; i++){
        for(let j =i+1; j < arr5.length ; j++  ){
            if(arr5[i] ===arr5[j] && !dublicate.includes(arr5[i])  ){
                 dublicate.push(arr5[i]);
            }
        }
    }  
        console.log("dublicate elemet", dublicate);


// Q3 . find the largest number in the array  - adobe 
 
let arr2 = [12,34,55,66,22,55,2,88,22,99];

let largestNum =[0];

for(let i=0; i < arr2.length; i++){
    if(arr2[i]>largestNum){
        largestNum=arr2[i];
    }
}
   console.log(largestNum);

   // secodn way - math.max() operator

   let largest = Math.max(...arr2);
   console.log(largest);

   // Q4 - Find the largest and smallest element

   let arr3 =[10,30,11,20,55];
     let large = arr3[0];
     let small = arr3[0];

     for(let i=0; i< arr3.length; i++){
          
        if(arr3[i] > large){
            large=arr3[i];
        }
        
        if(arr3[i] < small){
            small=arr3[i]; 
        }
     }
console.log(large);
console.log(small);

// way 2 - max & Min 

      let arr4 =[70,10,30,11,20,55];

      let largestMax = Math.max(...arr4);
      let smallmin = Math.min(...arr4);

      console.log(largestMax); 
      console.log(smallmin);
      console.log(smallmin);
     /// test
// Q5 -  Find Second Largest Element   --- 
