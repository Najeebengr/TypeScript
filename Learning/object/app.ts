let score : number | string = 33

score = 44

score = "55"

type User = {
    name : string;
    id : number
}

type Admin = {
    username : string;
    id : number
}

let najeeb : User | Admin = {name: "najeeb", id: 334}

najeeb = {username : "N", id: 334}

function getDbId(id: number | string){
    if(typeof id === 'string'){
        id.toLowerCase();
    }
    else id +2;
}

const data: number[] = [1,2,3]
const data2 : string[] = ["1", "2", "3"]
const data3 : string[] | number[] = [1,2,3]
const data4 : (string | number) [] = [1,2, "3"]

let seatAllotment: 'asile' | 'middle'  | 'window'

seatAllotment = 'asile'
// seatAllotment = 'crew'  (error)

