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
class Queue<T>{
    private data:T[] = [];
    add(item:T){
        this.data.push(item);
    }
    remove(){
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();

nameQueue.add("Saif");
nameQueue.add("Ali");

const numberQueue = new Queue<number>();

numberQueue.add(10);
