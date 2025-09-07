class MinStack{
    constructor(){
        this.stack = []
        this.minstack = []
    }

    push(val){
        let minval
        if(this.stack.length){
            minval = Math.min(this.minstack[this.minstack.length-1], val)
        }
        else{
            minval = val
        }

        this.stack.push(val)
        this.minstack.push(minval)
    }

    pop(){
        if(this.stack.length){
            let val = this.stack.pop()
            this.minstack.pop()
            return val
        }
        return null
    }

    top(){
        if(this.stack.length){
            return this.stack[this.stack.length-1]
        }
        return null
    }

    getMin(){
        if(this.minstack.length){
            return this.minstack[this.minstack.length-1]
        }
        return null
    }
}