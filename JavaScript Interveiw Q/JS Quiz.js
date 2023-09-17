//Quiz JS

//Q1 
// var obj1 = {
//     address: "Satara",
//     getAddress: function (){
//        return this.address;
//     }
// }

// var obj2 = {
//     address: "Pune"
// }

// console.log(obj2.getAddress()); //Output: Error

//Q2

greeting();

function greeting(){
    setTimeout(()=>{
       console.log("Hello World");
    },3000); //Output: Hello World because of Hoisting
}

//Q3

let arr1 = [1];
let arr2 = [2];

let arr3 = [[...arr1],[...arr2]];
console.log(arr3); // [[1],[2]]

//Q4

let arr=[1,2,3];

const f1 = ()=>{
    arr.push(4);
} //f1() this function is not called that's why 4 is not pushed yet 
console.log(arr); //Output: [1,2,3]

//Q5

let obj = {
    name:"Siddhesh",
    lastName: "Bhosale"
}

delete obj.lastName? console.log(obj.name) : console.log(obj.lastName); //? yes : no lastName has been deleted that why it gives name in Output


//Q6
let arrC = [1,2,3];
console.log(arrC[6]); //undefined

//Q7 
let a = {
    name: "Jhon Cena"
}
let b = a;
b.name = "Jhon Wick";
console.log(b); // Output: { name: 'Jhon Wick' }

//Q8
let userName = "Siddhesh Bhosale";
console.log(userName.split(" ").reverse().join(" ")); //Bhosale Siddhesh

//Q9
const userName2 = "Jhon Wick";

try {
    if(userName2 === "Jhon Wick"){
        userName2 = "Jhon Cena";
        console.log(userName2);
    }
} catch {
    console.log("Some error"); //Output: Some error (because we use const for the username2 so we can't reassign vaule to it)
}

//Q10
console.log("first");
setTimeout(()=>{
    console.log("second");
},0);
console.log("third");
//note:even though you specified a delay of 0 milliseconds for the setTimeout callback, it will still be placed in the event queue and executed after the currently executing code completes, which is why "third" is logged before "second."

//Q11
let a1 = 2;
let arrB = [a1++];
console.log(arrB); //when you create the arrB array, it will contain the value of a1 before the increment operation, which is 2. After the assignment, a1 will be incremented to 3.

//Q12
function pet(){
    return{
      dog: "Rocky"
    };
}
console.log(pet()); //{ dog: 'Rocky' }

//Q13
let object1 = {
    a: 23
}

let object2 = object1;
delete object2.a;
console.log(object1); //Output: {} (empty object)

//Q13

let scope = "Global Scope";
function scoping(){
    console.log(scope);
    scope = "local Scope";
    return function (){
        console.log(scope);
        scope = "inner Scope";
    }
}
const ss = scoping();
ss();

//Q14
let ob1={1:'a',4:'d'};
let ob2={2:'b'};
let ob3={3:'c'};
Object.assign(ob2,ob3,ob1); // all objects methods gets collected (first,second,third,....so on) to first object
console.log(ob2);//Ou{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Q15
const myArr = [1,2];
myArr.push[4];//myArr is const so we cant assign value to it (immutable)
console.log(myArr.length);

//Q16
console.log(0==null); //false

//Q17
let x = 16;
if(x==="16"){ //for === Output: Non-Equal and for == Equal
console.log("Equal");
}else{
console.log("Non-Equal");
}
//it's recommended to use the === operator (strict equality) for most comparisons because it provides more predictable and safer behavior, as it doesn't perform implicit type conversions. Using == (loose equality) can lead to unexpected results due to type coercion, which can be a source of bugs and confusion in your code.

//Q18
//falsy values
//null undefined 0 '' NaN false