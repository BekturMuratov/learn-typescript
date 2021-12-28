// Basic Types
let id:number = 5;
let company: string = "Bektur Muratov";
let isPublished:boolean = true;
let x:any = 'hello from any';
let idx:number[] = [1,2,3,4,5];
let arr:any[] = [1,true, 'Bob']


console.log('ID: ', id);
console.log('Company: ', company);
console.log('Is Published: ', isPublished);
console.log('X: ', x);
console.log('idx: ', idx);
console.log('arr: ', arr);


//Tuple
let person:[number,string,boolean] = [27,'Bektur', true];
console.log('Person: ', person)

//Tuple array
let employee:[number,string][]

employee = [
    [1,'Bubba'],
    [2, 'Hubba'],
    [3,'Spark']
]

console.log("Employee: ", employee)

//Union
let num: number | string = 22
console.log(num);

//Enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction.Left);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction2.Right);


//Objects
type User ={
    id:number,
    name:string,
}

const user:User = {
    id:1, 
    name:'John'
}

console.log(user.name)


//Type assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId =cid as number;
console.log(customerId);


//Functions 

function addNum(x:number,y:number){
    return x + y
}

console.log(addNum(1,2))


function log(message: string | number): void{
    return console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id:number,
    name: string ,
    age?:number, 
}


const user1: UserInterface = {
    id: 1,
    name: 'Bob',
}

console.log(user1)

type Point = number | string
const p1:Point = 1

interface MathFunc {
    (x:number, y: number):number
}

const add:MathFunc = (x:number, y: number): number => x + y;
const sub:MathFunc = (x:number, y: number): number => x - y;

interface PersonInterface {
    id:number,
    name: string , 
    register():string
}

//Classes
class Person implements PersonInterface{
    id:number
    name: string

    constructor(id:number, name:string){
       this.id = id,
       this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}


const brad = new Person(1,'Brad Traversy');
const mike = new Person(2,'Mike Jordan');

console.log(brad.id = 5)
console.log(brad, mike)

console.log(brad.register())

//Subclasses
class Employee extends Person{
    positiion:string

    constructor(id:number, name:string, positiion:string){
       super(id,name,)
       this.positiion = positiion
    }
}

const emp = new Employee(3, 'Henry Cavil', 'actor')
console.log(emp.register())


//Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad','mike','shawn'])

