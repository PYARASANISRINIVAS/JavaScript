//objects reference type
//arraya are good but not suffiecient for real world data
//objects are key value pair
//object don't have index.
// how to create object
    // const person={name:"srinivas",age:18};
    // console.log(typeof(person));
    // console.log(person.name);
    // console.log(person.age);
    // console.log(person["name"]);
//property==key
    // const person={
    //     name:"srinivas",
    //     age:18,
    //     Hobbies:["volleyball","basketball"],

    // }
    // console.log(person.Hobbies[1]);
// how to add key value pair
// person.gender="male";
// person["gender"]="male";
// console.log(person);



// dot and bracket difference

// const person={
//     name:"srinivas",
//     age:18,
//     "person hobbies":["volleyball","basketball"],

// }
// console.log(person["person hobbies"]);
// console.log(person."person hobbies"); error


// const key="email";
// person.key="srinivas@gmail.com"; ADDING KEY NOT EMAIIL
// person[key]="srinivas@gmail.com";
// console.log(person);


// how to iterate the object

const person={
    name:"srinivas",
    age:18,
    "person hobbies":["volleyball","basketball"],

}
//for in loop
    // for(let key in person){
    //     console.log(key,":",person[key]); //console.log(person.key);   undefined
    // }
//Object.Keys
// console.log(Object.keys(person));            returns array of the keys
for(let keys of Object.keys(person)){
    console.log(person[keys]);
}