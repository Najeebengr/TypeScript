// class User {
//     public email: string
//     private name: string
//     private city: string = "Lahore"
//     constructor(email : string, name: string){
//         this.email = email;
//         this.name = name;
//         this.city
//     }
// }

class User {

    protected _courseCount =1

    readonly city: string = "Lahore"
    constructor(
        public email: string,
        public name: string,
        private userId: string
    ){

    }

    private deleteToken(){
         console.log("Token deleted");
         
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this.courseCount;
    }
    set courseCount(courseNum) {
        if(courseNum <=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount =4;
    }
}

const najeeb = new User( "najeeb.com","Najeeb","233")