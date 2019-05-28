/* Stack es6写法 */

let Stack = (function(){
    //声明一个WeakMap类型的变量items
    const items = new WeakMap();
    class Stack {
        constructor(){
            //在constructor中，以this（Stack类自己的引用）为键，把代表栈的数组存入items
            items.set(this, []);
        }

        push = function(){
            //从WeakMap中取出值，即以this为键（行{2}设置的）从items中取值
            let s = items.get(this);
            s.push(...arguments)
        };

        pop = function(){
            let s = items.get(this);
            let r = s.pop();
            return r
        };

        peek = function(){
            let s = items.get(this);
            return s.slice(-1).join('')
        };

        isEmpty = function () {
            let s = items.get(this);
            return s.length === 0
        };

        clear = function () {
            items.set(this, [])
        };

        size = function () {
            let s = items.get(this);
            return s.length
        }
    }

    return Stack;
})();