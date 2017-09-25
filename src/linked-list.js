const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if(this.length != 0){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;
            return this;
    }

    head() {
            if (this._head != null){
                return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
            if (this._tail != null){
                return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        var necessaryNode = this._head;

        for (var i = 0; i < this.length; i++){
            if (i == index){
                return necessaryNode.data;
            } else {
                necessaryNode = necessaryNode.next;
            }
        }
        return this;
    }

    insertAt(index, data) {
        var necessaryPlace = this._head;
        
        for (var q = 0; q < this.length; q++){
            if (q == index){
                necessaryPlace.prev = necessaryPlace;
                necessaryPlace.data = data;
                this.length++;
            } else {
                necessaryPlace.prev = necessaryPlace;
                necessaryPlace = necessaryPlace.next;
            }
        }
        return this;
    }
    
    isEmpty() {
        if (this.length == 0){
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        var necessaryNode = this._head;

        for (var j = 0; j < this.length; j++){
            if (j == index){
                if (necessaryNode.prev != null){
                    necessaryNode.prev.next = necessaryNode.next;
                }

                if (necessaryNode.next != null){
                    necessaryNode.prev.prev = necessaryNode.prev;
                }

                necessaryNode = null;
                this.length--;
                break;
            } else {
                necessaryNode = necessaryNode.next;
            }

            
        }
        return this;
    }

    reverse() {
        var reverseNode = this._head;
        var datacash = [];

        for (var k = 0; k < this.length; k++){
            datacash[k] = reverseNode.data;
            reverseNode = reverseNode.next;
            }

            datacash.reverse();
            this.clear();

            for (var n = 0; n < datacash.length; n++){
                this.append(datacash[n]);
                }
                return this;
                    
    }

    indexOf(data) {
        var necessaryData = this._head;
        
        for (var l = 0; l < this.length; l++){
            if (necessaryData.data == data){
                return l;
            } else {
                necessaryData = necessaryData.next;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;


