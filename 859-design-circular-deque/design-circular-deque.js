/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.q = new Array(k)
    this.front = -1
    this.rear = -1
    this.size = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()) return false
    if(this.isEmpty()){
        this.front = 0
        this.rear = 0
    }
    else{
        this.front = (this.front-1+this.size) % this.size
    }
    this.q[this.front] = value
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()) return false

    if(this.isEmpty()){
        this.front = 0
        this.rear = 0
    }else{
        this.rear = (this.rear+1)%this.size
    }
    this.q[this.rear] = value
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) return false
    
    if(this.front == this.rear){
        this.front = -1
        this.rear = -1
    }else{
        this.front = (this.front+1) % this.size
    }
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) return false

    if(this.rear == this.front){
        this.front = -1
        this.rear = -1
    }else{
        this.rear = (this.rear - 1 + this.size) % this.size
    }
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    return this.isEmpty() ? -1 : this.q[this.front]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    return this.isEmpty() ? -1 : this.q[this.rear]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return (this.front == -1) 
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return ((this.rear+1) % this.size) == this.front
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */