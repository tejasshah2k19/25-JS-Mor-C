let a = []


let names = ["ram", "shyam", "ganshyam", "radheshyam", "ravan", "laxman"];

console.log(names);
console.log(names[2]);
console.log(names.at(2));




let arr = [11, 22, 33, 44, 5, 66, 9, 22, 44];
console.log("arr length =>" + arr.length);

console.log("original : " + arr);
// arr.reverse()
let revArr = arr.toReversed();//array will be reverse but original array will remain same 

console.log("revArr : " + revArr);
console.log("original : " + arr);


// arr.sort(mySort);

let arrSort = arr.toSorted(mySort);
console.log("sorted :"+arrSort);
console.log("original : " + arr);



function mySort(x, y) {

    if (x > y) {
        return 1;//
    } else if (x < y) {
        return -1;//
    } else {
        return 0; //
    }
}


//-------------------------------------------------------------

