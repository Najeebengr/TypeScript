// tuples is also an array but special type array with some restrictions
// const user: (string | number)[] = [1, "nr"]
const user: [string, number, boolean] = ["hc", 131, true];
// tuple make sures the order of values are correct

type User = [number, string]
const newUser: User = [112, "najeeb.nedo5555@gmail.com"]
newUser[1] = "abc@g.com"
