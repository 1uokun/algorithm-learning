/* 汉诺塔（又称河内塔）问题 */

var stack1 = new Stack(),
    stack2 = new Stack(),
    stack3 = new Stack();

var num = 3;    // 汉诺塔的级数

while(num--){
    stack1.push(num)
}

var obj = {
    "A": stack1,
    "B": stack2,
    "C": stack3,
};
function hanoi(disc, a, b, c){
    if(disc > 0){
        hanoi(disc-1, a, c, b);
        console.log(' 移动 '+ disc +  ' 号圆盘 ' + ' 从 ' + a +  ' 移动到 ' +  c);
        obj[c].push(obj[a].pop());
        hanoi(disc-1, b, a, c)
    }
}

hanoi(obj['A'].size(), "A", "B", "C");


/**
 * 解题思路
 *
 * 需要3个栈： A, B, C
 * 移动规律：
 *  将A柱子上的n-1个盘子暂时移到B柱子上
 *  A柱子只剩下最大的盘子，把它移到目标柱子C上
 *  最后再将A柱子上的n-1个盘子移到目标柱子C上
 *
 *  总共需要 2^n - 1 次
 * **/