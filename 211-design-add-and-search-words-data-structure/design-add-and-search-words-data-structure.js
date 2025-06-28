var TrieNode = function(){
    this.children = {}
    this.flag = false
}
var WordDictionary = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root

    for(let char of word){
        if(!(char in node.children)){
            node.children[char] = new TrieNode()
        }
        node = node.children[char]
    }
    node.flag = true
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(node, index){
        if(word.length == index) return node.flag
        let char = word[index]

        if(char == "."){
            for(let child of Object.values(node.children)){
                if (dfs(child, index+1)) return true
            }
            return false
        }
        else{
            if(!(char in node.children)) return false
            return dfs(node.children[char], index+1)
            
        }

    }

    return dfs(this.root, 0)
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */