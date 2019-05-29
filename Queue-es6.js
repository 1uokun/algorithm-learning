/* Queue es6写法 */

let Queue = (function(){
    // 使用弱引用实现私有属性，详细说明见Stack-es6.js
    const items = new WeakMap();
    class Queue {
        constructor(){
            items.set(this, []);
        }

        enqueue = function(){
            let q = items.get(this);
            q.push(...arguments)
        };

        dequeue = function(){
            let q = items.get(this);
            let r = q.shift();
            return r
        };

        front = function(){
            let q = items.get(this);
            return q[0]
        };

        isEmpty = function () {
            let q = items.get(this);
            return q.length === 0
        };

        size = function () {
            let q = items.get(this);
            return q.length
        }
    }

    return Queue;
})();