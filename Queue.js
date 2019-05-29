"use strict";

function Queue() {
    var items = [];

    //向队列尾部添加一个（或多个）新的项
    this.enqueue = function(){
        Array.prototype.push.apply(items, arguments);
    };

    //移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
    this.dequeue = function(){
        return items.shift()
    };

    //返回队列中第一个元素——也就是最先被移除的元素，但队列不做任何变化
    this.front = function(){
        return items[0]
    };

    //如果队列中不包含任何元素，返回true，否则返回false
    this.isEmpty = function(){
        return items.length === 0
    };

    //返回队列包含的元素个数
    this.size = function(){
        return items.length
    }
}