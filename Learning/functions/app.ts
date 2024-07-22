function addTwo(num: number): number{
    return num + 2;
    // return "hello";
}

let myValue = addTwo(5);

function signUpUser(name: string, email: string, isPaid: Boolean){

    console.log(name, email, isPaid)
}

signUpUser("Najeeb", "najeeb.nedo5555@gmail.com", true)

let loginUser = (name: string, email: string, isPaid: boolean = false)=> {

    console.log(name, email, isPaid)
}

loginUser("Najeeb", "najeeb.nedo5555@gmail.com")

// function getValue(myVal: number): boolean {
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s: string): string =>{
return ""
} 

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero):string =>{
    return `hero is ${hero}`
})

function consoleError(errorMsg: string): void {
    console.log(errorMsg);
}

function handleError(errorMsg: string): never {
    throw new Error(errorMsg);
}
