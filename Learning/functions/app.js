"use strict";
function addTwo(num) {
    return num + 2;
    // return "hello";
}
let myValue = addTwo(5);
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
signUpUser("Najeeb", "najeeb.nedo5555@gmail.com", true);
let loginUser = (name, email, isPaid = false) => {
    console.log(name, email, isPaid);
};
loginUser("Najeeb", "najeeb.nedo5555@gmail.com");
// function getValue(myVal: number): boolean {
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
