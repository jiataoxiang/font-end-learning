class TrieNode {
    constructor(val) {
        this.val = val;
        this.children = new Map();
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode("*");
    }
    
    addWord(word) {
        let cur = this.root;
        for (let letter of word) {
            let curNode = cur.children.get(letter);
            if (curNode === undefined) {
                let newTrieNode = new TrieNode(letter);
                cur.children.set(letter, newTrieNode);
                cur = newTrieNode;
            } else {
                cur = curNode;
            }
        }
        cur.end = true;
    }
    
    hasWord(word) {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            cur = cur.children.get(word[i]);
            if (cur === undefined) {
                return false;
            }
        }
        return cur.end;
    }
}

let a = new Trie();

let word = "abc";

a.addWord(word);

let cur = a.root;

for (let i = 0; i < word.length; i++) {
    cur = cur.children.get(word[i]);
    if (cur === undefined) {
        console.log("what!!!");
        break;
    }else {
        console.log(word[i]);
    }

}


console.log(a.hasWord("abc"));
