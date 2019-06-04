/**
 * 约瑟夫环-循环链表实现
 *
 * @param n 一群人（n个人）围在一起坐成环状
 * @param m 数到某个数（m）的时候，此人出列，下一个人重新报数
 *
 * @return [] 剩下两个人（约瑟夫和他朋友）
 * **/
function JosephusLinkedList(n, m){
    let linkedlist = new LinkedList(),
        eliminated;
    for(let i=0;i<n;i++){
        linkedlist.append(i+1)
    }

    while(linkedlist.size() > 2){
        let _m = m-1;
        while(_m--){
            linkedlist.append(linkedlist.removeAt(0))
        }

        eliminated = linkedlist.removeAt(0);
        console.log(eliminated+'被淘汰了')
    }

    return [linkedlist.removeAt(0),linkedlist.removeAt(0)]
}

console.log(JosephusLinkedList(41,3));