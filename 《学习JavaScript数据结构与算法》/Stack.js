"use strict";

function Stack() {
    var items = [];

    //push 添加一个（或几个）新元素到栈顶
    this.push = function () {
        Array.prototype.push.apply(items, arguments);
    };

    //pop 移除栈顶的元素，同时返回被移除的元素
    this.pop = function () {
        return items.pop()
    };

    //peek 返回栈顶的元素，不对栈做任何修改
    this.peek = function () {
        return items.slice(-1).join('')
    };

    //isEmpty 如果栈没有任何元素就返回true，否则返回false
    this.isEmpty = function () {
        return items.length === 0
    };

    //clear 移除栈里的所有元素
    this.clear = function () {
        items = []
    };

    //size 返回栈的元素个数。
    this.size = function () {
        return items.length
    }
}