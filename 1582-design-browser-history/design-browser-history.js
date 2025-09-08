/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.stack = [homepage]
    this.cur_index = 0
    
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.stack = this.stack.slice(0, this.cur_index+1)

    this.stack.push(url)
    this.cur_index++
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.cur_index = Math.max(0, this.cur_index-steps)

    return this.stack[this.cur_index]
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {

    this.cur_index = Math.min(this.stack.length-1, this.cur_index+steps)
    return this.stack[this.cur_index]
    
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */