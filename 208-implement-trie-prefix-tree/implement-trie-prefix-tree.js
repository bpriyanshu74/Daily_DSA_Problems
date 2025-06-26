var TrieNode = function() {
    
        this.children = {}
        this.flag = false
    
}


var Trie = function() {
    
        this.root = new TrieNode()
    
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root

    for(let char of word){
        if(!(char in node.children)){
            node.children[char] = new TrieNode
        }
        node = node.children[char]
    }
    node.flag = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this._traverse(word)

    return node!==null && node.flag
    
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this._traverse(prefix)

    return node !== null
    
};

Trie.prototype._traverse = function(string){
    let node = this.root

    for(let char of string){
        if(!(char in node.children)) return null

        node = node.children[char]
    }

    return node
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */