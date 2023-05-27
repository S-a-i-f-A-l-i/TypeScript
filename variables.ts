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

