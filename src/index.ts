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
    Up,
    Down,
    Left,
    Right,
}