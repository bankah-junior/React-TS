// let age: number = 20
// if (age < 15)
//     age += 10;

// console.log(age);

// Data types
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;      // avoid using the any type variable

function render(document: any) {
    console.log(document);
}

// Arrays
let numbers: number[] = [1, 2, 3];
numbers.forEach(n => n.toLocaleString)  //Auto completion

// Tuples: this is a fixed length array
// Best practise is to use two annotations
let user: [number, string] = [1 ,'5'];
user[0].toLocaleString  // Auto completion
user[1].length  // Auto completion

// ENUMS: represents a list of related constants 
const enum Size {
    Small = 1,
    Medium,
    Large
};
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
// Always annotate functions properly
// taxYear?: means that it is optional
function calculateTax(income:number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
} 
calculateTax(10_000, 2022);

// Objects
// 
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void,
} = {
    id: 1,
    name: '',
    retire(date: Date) {
        console.log(date);
    },
};

// Type Aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void,
}

let employeeModified: Employee = {
    id: 1,
    name: '',
    retire(date: Date) {
        console.log(date);
    },
} 

// Union Types
let money: number | string; // An object that is either a number or a string 
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

// Intersection Types
let weight: number & string;    // An object that is both a number and a string 
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal Types
// Is used to limit the values
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';


// Nullable Types
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase);
    } else {
        console.log('Hola!');
    }
}
greet(null);


// Optional Chaining
type Customer = {
    birthaday: Date,
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthaday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthaday);  // Optional property access operator (not either null | undefined for customer)
console.log(customer?.birthaday?.getFullYear());  // Optional property access operator  (not either null | undefined for customer & birthday)





