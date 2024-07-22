//interfaces

interface User{
    readonly dbId: number
    email: string,
     userID: number,
     googleId?: string
    //  startTrail: ()=>string
    startTrail(): string
    getCoupon(cuponname: string, value: number):number
}
interface User{
    githubToken: string
}
//reopening of an interface

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const najeebRehman: Admin = {dbId: 22,email: "najeeb.com", userID: 1122, githubToken: "github", role: "admin", startTrail:()=>{
    return "trial started"
},
getCoupon: (name: "najeeb", off: 10)=>{
    return 10;
}
}
najeebRehman.email = "najeeb@najeeb.com"
// najeeb.dbId = 33 