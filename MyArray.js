//external js
//no need to write script tag


console.log("Good Morning");

let a = [] //array 

//no need to provide size 


//n number of elements we can add 
//remove 

//array is an object in javascript 



let arr = [1,2,3,4,5];
console.log(arr);
//single element can be access via index 
//index will start from 0 

console.log(arr[0]);//first element 

//count total elements 
console.log(arr.length);//4 

//print all the elements one by one
console.log("All Data :=> ");
 
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

let sum = 0; 
for(let i=0; i<arr.length; i++){ 
    console.log(arr[i]);
    sum = sum + arr[i];
}

//sum -> a[0] + a[1] + a[2]
console.log("sum -> "+sum);
