// string, number, boolean, null, undefined
// string type
var myNameTS = "";
// myNameTS = 5; //this is gives error;
myNameTS = 'Saif'; //this doesn't give any error
var myNameTS2 = '';
// myNameTS2 = 5; // this is still give error 
// default Any Type
var myName;
myName = 'Ali'; // this is not give any error
myName = 5; // this is not give any error
// Any Type
var myNameAnyType = '';
myNameAnyType = 5; // this is not give any error
myNameAnyType = 'Saif'; // this is not give any error
// Union Types
var data = null;
data = 'data'; // not giving any error with string value and null
data = null; // not error
// data = true // giving error
// Arrays
var itemsAny = []; //default type is any;
// itemsAny.push('Saif');
// itemsAny.push(21);
// console.log(itemsAny);
var itemsStringValues = ['test', 'luis']; // default type to see the values is string
// itemsStringValues.push(5); // giving error Argument of type 'number' is not assignable to parameter of type 'string'.
var itemsString = [];
// itemsString.push(5); // giving same error Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(itemsString);
var itemsUnionTypes = [];
// itemsUnionTypes.push('Saif');
// itemsUnionTypes.push('Ali');
// itemsUnionTypes.push(21);
// itemsUnionTypes.push(27); // only add one number value
var items = [];
// items.push('saif');
// items.push(4);
// items.push('ali');
// items.push(3);
// Object
var account = {
    name: 'Saif',
    balance: 1000000000,
};
var accounts; // this means it's contains array of objects
;
var accountWithInterface = {
    name: "Saif",
    balance: 9999999999
};
var accountsWithInterface;
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
        //logic
    }
    InvestmentAccount.prototype.withdraw = function () {
        // logics
    };
    return InvestmentAccount;
}());
