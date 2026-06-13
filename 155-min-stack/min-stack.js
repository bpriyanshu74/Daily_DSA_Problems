
var MinStack = function() {
    this.stack = []
    this.minstack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    let minvalue
    if(this.minstack.length != 0){
        minvalue = Math.min(value, this.minstack[this.minstack.length-1])
    }else{
        minvalue = value
    }

    this.stack.push(value)
    this.minstack.push(minvalue)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length){
        this.stack.pop()
        this.minstack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */