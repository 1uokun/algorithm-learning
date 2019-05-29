/* 汉诺塔（又称河内塔）问题 */

var stack1 = new Stack(),
    stack2 = new Stack(),
    stack3 = new Stack();

stack1.name = 'A';
stack2.name = 'B';
stack3.name = 'C';

var num = 3;    // 汉诺塔的级数

while(num--){
    stack1.push(num)
}

function hanoi(rank, from, to, helper){
    if(rank > 0){
        hanoi(rank-1, from, helper, to);
        console.log(' 移动 '+ rank +  ' 号圆盘 ' + ' 从 ' + from.name +  ' 移动到 ' +  to.name);
        to.push(from.pop());
        hanoi(rank-1, helper, to, from)
    }
}

hanoi(stack1.size(), stack1, stack2, stack3);


/**
 * 解题思路
 *
 * 需要3个栈： A, B, C
 * 移动规律：
 *  将A柱子上的n-1个盘子暂时移到B柱子上
 *  A柱子只剩下最大的盘子，把它移到目标柱子C上
 *  最后再将B柱子上的n-1个盘子移到目标柱子C上
 *
 *  总共需要 2^n - 1 次
 * **/
