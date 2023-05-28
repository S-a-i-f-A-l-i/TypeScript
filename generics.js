/*

// there is problem with different different Queue data Types
class Queue{
    private data = [];
    add(item){
        this.data.push(item);
    }
    remove(){
        this.data.shift();
    }
}

const nameQueue = new Queue();

nameQueue.add("Saif");
nameQueue.add("Ali");

const numberQueue = new Queue();

numberQueue.add(10);

*/
//generics
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add("Saif");
nameQueue.add("Ali");
var numberQueue = new Queue();
numberQueue.add(10);
