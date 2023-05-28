// string, number, boolean, null, undefined

// string type
let myNameTS:string = "";

// myNameTS = 5; //this is gives error;
myNameTS = 'Saif' //this doesn't give any error

let myNameTS2 = '';

// myNameTS2 = 5; // this is still give error 

// default Any Type
let myName;

myName = 'Ali'; // this is not give any error

myName = 5; // this is not give any error

// Any Type
let myNameAnyType:any = '';

myNameAnyType = 5; // this is not give any error
myNameAnyType = 'Saif'; // this is not give any error



// Union Types

let data:string | null = null;

data = 'data'; // not giving any error with string value and null
data = null; // not error

// data = true // giving error


// Arrays

let itemsAny = []; //default type is any;
// itemsAny.push('Saif');
// itemsAny.push(21);
// console.log(itemsAny);

let itemsStringValues = ['test','luis'] // default type to see the values is string
// itemsStringValues.push(5); // giving error Argument of type 'number' is not assignable to parameter of type 'string'.


let itemsString:string[] = [];
// itemsString.push(5); // giving same error Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(itemsString);

let itemsUnionTypes:string[] | number = [];

// itemsUnionTypes.push('Saif');
// itemsUnionTypes.push('Ali');
// itemsUnionTypes.push(21);
// itemsUnionTypes.push(27); // only add one number value

let items: string[]|number[] = [];
// items.push('saif');
// items.push(4);
// items.push('ali');
// items.push(3);


// Object

const account:{
    name:string,
    balance:number,
    status?:string // optional property
} = {
    name:'Saif',
    balance:1000000000,
}

let accounts:{}[]; // this means it's contains array of objects




// interface

interface IAccount {
    name:string,
    balance:number,
    status?:string,
    deposit?:()=>void
};

const accountWithInterface = {
    name:"Saif",
    balance:9999999999
}

let accountsWithInterface: IAccount[];