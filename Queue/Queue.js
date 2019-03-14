 // A queue is a data type FIFO ( first in first out) which means that the first element in has to be the first one out.
 // Just like in a real line.

var Queue = function () {

    //why dont I use " this" here for the collectoin?
    collection = [];
    this.Empty = false

    this.show = function () {
        console.log(collection)
    }

    this.enqueue = function(element){
        collection.push(element)
    }

    this.deQueue = function () {

        this.isEmpty()
        if(this.Empty) return console.log("Empty")
        else return collection.shift()

    }

    this.front = function () {
        console.log(collection[0])
        return collection[0]

    }

    this.size = function () {
        return collection.length;

    }

    this.isEmpty = function () {
        if(collection.length === 0) {
            this.Empty = true
        } else {
            this.Empty = false
        }


    }



}

var q =  new Queue();
q.enqueue(1)
 q.enqueue(5)
q.show()
 q.front()


