//create an obj for the stack
//main funtions: push,pop,peek,lenght

     var stack = function (){
    this.count = 0,
    this.storage = [],

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

         this.pop = function() {
        if(this.count==0){
            return undefined;

        }else {
            result = this.storage[this.count];
            this.count--;
            delete this.storage[this.count];
            return result;
        }
    }

         this.peek = function() {
        return this.storage[this.count-1];
    }

         this.size = function() {
        return this.count;

    }

         this.show = function(){
       console.log(this.storage)
    }



}

var s =  new stack();

s.push(1);
s.push(4);
s.push(10);
s.pop();
s.push(200)
 s.size()

s.show()
