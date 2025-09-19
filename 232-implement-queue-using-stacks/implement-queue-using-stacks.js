
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
    this.size = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.size == 0){
        this.stack1.push(x)
    }
    else{
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(x)
        while(this.stack2.length){
            this.stack1.push(this.stack2.pop())
        } 
    }
    this.size += 1
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.size > 0){
        this.size -= 1
        return this.stack1.pop()
        
    }
    else{
        return null
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.size > 0){
        return this.stack1[this.size-1]
    }else{
        return null
    }

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.size == 0 ? true : false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */