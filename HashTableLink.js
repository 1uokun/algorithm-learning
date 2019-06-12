"use strict";

/**
 * HashTable 散列表
 * 使用【分离链接】解决散列值冲突
 *
 * @hash loseloseHashCode(key)
 * @value ValuePair(key, value)
 * **/
function HashTable() {
    var table = [];

    function loseloseHashCode(key){
        var hash;
        for(var i=0;i<key.length;i++){
            hash += key.charCodeAt(i)   //将key的每个字符传成hash值并合并
        }

        return hash % 37;   //返回余数(mod)
    }

    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;

        this.toString = function(){
            return '[' + this.key + '-' + this.value + ']'
        }
    };

    this.put = function(key, value){
        var position = loseloseHashCode(key);

        if(table[position] == undefined){
            //分离链接法时得散列表的每一个键对应的值都是一个链表
            table[position] = new LinkedList()
        }

        //该position下不管有无都可以append
        table[position].append(new ValuePair(key, value))

    };

    this.get = function(key){
        var position = loseloseHashCode(key);

        if(table[position] !== undefined){

            //遍历链表来寻找键/值
            var current = table[position].getHead();

            while(current.next){
                if(current.element.key === key){
                    return current.element.value
                }
                //重置current以便继续向下寻找
                current = current.next
            }

            //检查元素在链表第一个或最后一个节点的情况
            if(current.element.key === key){
                return current.element.value
            }
        }
    };

    this.remove = function(key){
        var position = loseloseHashCode(key);

        if(table[position] !== undefined){

            var current = table[position].getHead();

            while(current.next){
                if(current.element.key === key){
                    table[position].remove(current.element);
                    if(table[position].isEmpty()){
                        table[position] = undefined;    //清除空链表
                    }

                    return true
                }
                current = current.next;
            }

            //检查是否为第一个或最后一个元素
            if(current.element.key === key){
                table[position].remove(current.element);
                if(table[position].isEmpty()){
                    table[position] = undefined;    //清除空链表
                }

                return true
            }
        }

        return false
    }
}