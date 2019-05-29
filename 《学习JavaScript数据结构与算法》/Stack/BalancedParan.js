/* 平衡圆括号 */
var match = function(open, close) {
    var opens = '([{',
        closes = ')]}';

    return opens.indexOf(open) === closes.indexOf(close);
};
var BalancedParan = function(symbols) {
    var stack = new Stack(),
        balanced = true,
        index = 0,
        len = symbols.length,
        symbol, top;

    while (index < len && balanced) {
        symbol = symbols[index];
        if (symbol === '(' || symbol === '[' || symbol === '{') {
            stack.push(symbol); //左括号 入栈
        } else {//右括号
            if (stack.isEmpty()) {
                balanced = false;
            } else {

                //（LIFO）左括号 出栈与 最先出现的 右括号进行匹配
                top = stack.pop();
                if (!match(top, symbol)) {
                    balanced = false;
                }
            }
        }
        index++;
    }

    if (balanced && stack.isEmpty()) {
        return true;
    }
    return false;
};

BalancedParan('{(()())}');


/**
 * 解题思路
 *
 * 从左向右查询 循环
 *
 * 先判断【左括号】，将【左括号】入栈
 * 然后立即查询【右括号】并将【做括号】出栈（后入先出）与之匹配
 * **/
