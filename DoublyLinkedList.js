"use strict";

var Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;   //新增的
};
class DoublyLinkedList extends LinkedList{
    constructor(props){
        super(props);
        this.tail = null;
    }

    append(element){
        let node = new Node(element),
            current;

        if(this.head === null){
            this.head = node;
            this.tail = node;    //新增的
        }else {
            current = this.head;

            while(current.next){
                current = current.next
            }

            current.next = node;
            node.prev = current; //新增的
            this.tail = node;    //新增的
        }

        this.length++;
    };

    insert(element, position){
        if(position >= 0 && position <= this.length){
            let node = new Node(element),
                current = this.head,
                previous;

            if(position === 0) {

                if (this.head === null) {  //新增的
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;  //新增的
                    this.head = node;
                }
            }else if(position === this.length){  //新增的
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;

            }else {
                while(position--){
                    previous = current;
                    current = current.next
                }

                previous.next = node;
                node.next = current;

                current.prev = node; //新增的
                node.prev = previous; //新增的
            }

            this.length++;

            return true
        }else {
            return false
        }
    };

    removeAt(position){
        if(position > -1 && position < this.length){
            let current = this.head,
                previous;

            if(position === 0) {
                this.head = current.next;

                //如果只有一项，更新tail //新增的
                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            }else if(position === this.length-1){ //最后一项 //新增的
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;

            }else {
                while(position--){
                    previous = current;
                    current = current.next
                }
                previous.next = current.next;

                current.next.prev = previous; //新增的
            }

            this.length--;

            return current.element
        }
    }
}