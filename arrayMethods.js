let arr = [11, 22, 44, 22, 5, 66, 9, 22, 44];


//search 
//indexOf 
//lastIndexOf 
//includes

console.log(arr.indexOf(66));// will return index of given element if present 
console.log(arr.indexOf(666));// will return -1 if element not present 

console.log(arr.includes(66));//will return true if element present 
console.log(arr.includes(666));//will return false if element not present 

console.log(arr.indexOf(22));//1 
console.log(arr.lastIndexOf(22));//7 


//for 
//array -> all element iteration 

//print all elements from array
// console.log("Elements In the Array : ");
 
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.forEach(x => console.log(x)); // it will not modify original array 
// console.log("Elements In the Array +10 : ");
// arr.forEach(x => console.log(x+10));



//array => sub array -
//array => condition element -> extract 
// array => filter -> data 

//array => odd number 
console.log("original : "+arr);

let oddArr = arr.filter(x => x%2 != 0)
console.log("oddArr => "+oddArr);


let myArr = [23,36,67,89,30,65,43,21,23,45,27,89]
//print all the num which can divide by 3 
//print all the num which can divide by 9
//print all the num which can divide by 3 and 9 


















