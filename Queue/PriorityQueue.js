
//this Queue will recive a priority with the element, kind of like an elderly that can skip to the front of the line.
//So this way,we do not just add the element to the queue, we have to add it acoording to its priority.

var PriorityQueue = function () {


    this.collection = [];
    this.Empty = false

    this.show = function ()
        {
            console.log(collection)
        }

            this.enqueue = function (element) {
                if (this.Empty) {
                    return collection.push(element);
                } else if (!this.belongs(element)) {
                    for (i = 0; i <= this.collection.length; i++) {
                        if (element[1] < this.collection[i][1]) {
                            this.collection.splice(i, 0 , element)
                            break;
                        }
                    }

                } else {
                    return console.log("Element already inside the queue.")

                }
            }


            this.deQueue = function () {

                this.isEmpty()
                if (this.Empty) return console.log("Empty")
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
                if (collection.length === 0) {
                    this.Empty = true
                } else {
                    this.Empty = false
                }


            }

            // finds if a given element is inside the queue.
            this.belongs = function (element) {
                var found = false;
                for (i = 0; i <= this.collection.length; i++) {
                    if (element == this.collection[i]) {
                        found = true
                        break;
                    }
                }

                return found;

            }


        }


var pq = new PriorityQueue();

pq.enqueue(['dog',1]);
pq.enqueue(['cat',2]);
pq.enqueue(['duck',5]);
pq.enqueue(['horse',4]);
pq.show();


