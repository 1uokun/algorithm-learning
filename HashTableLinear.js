"use strict";

/**
 * HashTable 散列表
 * 使用【线性探查】解决散列值冲突
 *
 * @hash djb2HashCode(key)
 * @value ValuePair(key, value)
 * **/

function HashTable(){
    var table = [];

    var djb2HashCode = function(key){
        var hash = 5381;    //究极质数
        for(var i=0;i<key.length;i++){
            hash = hash * 33 + key.charCodeAt(i);   //hash*33 魔力数
        }

        return hash % 1013
    };

    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;

        this.toString = function(){
            return '[' + this.key + '-' + this.value + ']'
        }
    };

    this.put = function(key, value){
        var position = djb2HashCode(key);

        if(table[position] === undefined){
            table[position] = new ValuePair(key, value)
        }else {
            var index = ++position; //position = position + 1;var index = position;
            while(table[index] !== undefined){
                index++;    //index = index + 1
            }
            table[index] = new ValuePair(key, value)
        }
    };

    this.get = function(key){
        var position = djb2HashCode(key);

        if(table[position] !== undefined){
            if(table[position].key === key){
                return table[position].value
            }else {
                var index = ++position;
                while(table[index] === undefined
                || table[index].key !== key){
                    index++;
                }
                if(table[index].key === key){
                    return table[index].value
                }
            }
        }

        return undefined
    };

    this.remove = function(key){
        var position = djb2HashCode(key);

        if(table[position] !== undefined){
            if(table[position].key === key){
                table[position] = undefined;
                return true
            }else {
                var index = ++position;
                while(table[index] === undefined
                || table[index].key !== key){
                    index++;
                }
                if(table[index].key === key){
                    table[index] = undefined
                }
                return true
            }
        }

        return false
    };

    this.print = function() {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            } }
    };

}
