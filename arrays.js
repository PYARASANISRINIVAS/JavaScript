//intro to arrays
    //reference type
    // ordered collection of items.
// how to create an array.
// let fruits=["apple","mango","grapes"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(typeof fruits[0]);
// let mixed=["apple",1,null,undefined];   //can store different types of datatypes
// console.log(mixed);
// fruits[1]="banana";
// console.log(fruits);
// //push-----> adds in the last,
// fruits.push("strawberry");
// console.log(fruits);
// //pop---------->
// let x=fruits.pop()
// console.log(fruits);
// console.log(x);


//unshift------------> adds in the begining.
// console.log(fruits);
// fruits.unshift("banana");
// console.log(fruits);

//shift---> removes from the starting.
// fruits.shift();
// console.log(fruits);





//how to clone array
// let array1=["items,items"];
// let array2=array1;
// let array2=array1.slice(0);//
// let array2=[].concat(array1);
//spread operator
// let array2=[...array1];



// let array3=array2.slice(0).concat("item3","item4");
// let array2=[...array1,"items","items"];
// console.log(array1===array2);
// console.log(array2);


//length
// let length=fruits.length;



//using const for creating array

// const fruits=["apple"]; 
// fruits=["grapes"];  error.
// console.log(fruits);




// for of loop
// for( let fruit of fruits){
//     console.log(fruit);
// }

//for in loop
// for( let index in fruits){
//     console.log(index);
// }


// Array destructuring 
const fruits=["apple","mango"];


// let myvar1=fruits[0];
// let myvar2=fruits[1];

// let[myvar1,myvar2,myvar3]=fruits;
// console.log(myvar1,myvar2,myvar3);
// let[myvar1, ,myvar2]=fruits;
let [myvar1,myvar2,...mynewSrray]=fruits;




