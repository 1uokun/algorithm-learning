/**
 * 约瑟夫环-循环队列实现
 *
 * @param n 一群人（n个人）围在一起坐成环状
 * @param m 数到某个数（m）的时候，此人出列，下一个人重新报数
 *
 * @return [] 剩下两个人（约瑟夫和他朋友）
 * **/
function JosephusQueue(n, m){
    var queue = new Queue();
    for(var i=0;i<n;i++){
        queue.enqueue(i+1)
    }

    var eliminated;
    while(queue.size() > 2){
        var _m = m-1;
        while(_m--){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue();
        console.log(eliminated+'被淘汰')
    }

    return [queue.dequeue(),queue.front()];
}

console.log(JosephusQueue(41,3));