//  Why we are using typeScript, because some quirky behaviour of JS, For Example: 
//  2 + "2" = '22'
//  null + 2 = 2
//  undefined + 2 = NaN


// What TypeScript Does:
// Only: Static Checking -> Analyze the code as we type


// TypeScript is a development tool, your project still runs JS 


let greetings: string = "Hello World";

console.log(greetings);

// Primitives types in TypeScript 

// 1. null
// 2. undefined
// 3. boolean // true or false
// 4. string // "", "Hello World"
// 5. number // 0, 5.1, -9
// 6. bigint // 0n, 5n, -10n
// 7. symbol // Symbol(), Symbol("hi"),

// all types (lowercase)

// type interference let userId: number = 2321 (No need to put colon and type)