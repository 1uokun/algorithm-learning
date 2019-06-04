/* 引用传递 */

var a = {data:0};

var b = {data:1};
a.next = b;

var c = {data:2};
b.next = c;

var d = {data:3};
c.next = b;

//打印表头
console.log(a);

//从链表移除元素
b.next = d;

//链表插入元素
var c2 = {data:'2c'};
b.next = c2;
c2.next = d;

//双向链表
b.prev = a;
c2.prev = b;
d.prev = c2;

//循环链表
//⚠循环链表不能使用append插入链表
//这样会引起无限循环
a.prev = d;
d.next = a;