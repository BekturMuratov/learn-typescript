"use strict";
let id = 5;
let company = "Bektur Muratov";
let isPublished = true;
let x = 'hello from any';
let idx = [1, 2, 3, 4, 5];
let arr = [1, true, 'Bob'];
console.log('ID: ', id);
console.log('Company: ', company);
console.log('Is Published: ', isPublished);
console.log('X: ', x);
console.log('idx: ', idx);
console.log('arr: ', arr);
let person = [27, 'Bektur', true];
console.log('Person: ', person);
let employee;
employee = [
    [1, 'Bubba'],
    [2, 'Hubba'],
    [3, 'Spark']
];
console.log("Employee: ", employee);
let num = 22;
console.log(num);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
const user = {
    id: 1,
    name: 'John'
};
console.log(user.name);
let cid = 1;
let customerId = cid;
console.log(customerId);
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    return console.log(message);
}
const user1 = {
    id: 1,
    name: 'Bob',
};
console.log(user1);
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');
console.log(brad.id = 5);
console.log(brad, mike);
console.log(brad.register());
class Employee extends Person {
    constructor(id, name, positiion) {
        super(id, name);
        this.positiion = positiion;
    }
}
const emp = new Employee(3, 'Henry Cavil', 'actor');
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'mike', 'shawn']);
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfString = ['Bob', "Sam", "Jack"];
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfString);
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return 'This is info';
    }
}
let key = 'name';
key = 'age';
let u1 = 'name';
