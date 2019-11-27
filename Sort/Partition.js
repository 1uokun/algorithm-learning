/**
 * QuickSort、Partition
 *
 * 快速排序
 *
 * <p>左右指针与随机主元
 * <p>当左指针比主元大且右指针比主元小，则交换它们
 * <p>主元的选择：最左的对于已经排好的通常是最差的，一般为中间
 * **/


/**
 * Partition
 *
 * @param data : Array
 * @param len : Number
 * @param start : Number
 * @param end : Number
 * **/
function Partition(data, len, start, end) {
    if(!Array.isArray(data) || len <= 0 || start < 0 || end >= len) {
        throw new Error("Invalid Parameters")
    }

    // 获取随机主元
    let index = RandomInRange(start, end);

    // 随机主元与最后元素呼唤
    data.Swap(index, end);

    // 循环确定最小值
    let small = start - 1;
    for(index = start; index < end; index ++) {
        if( data[index] < data[end] ) {
            ++small;
            if(small != index)
                data.Swap(index, small)
        }
    }

    ++ small;
    data.Swap(small, end);

    return small;
}


/**
 * QuickSort
 *
 * **/
function QuickSort(data, len, start, end){
    if(start == end)
        return;

    let index = Partition(data, len, start, end);
    if(index > start)
        QuickSort(data, len, start, index -1);
    if(index < end)
        QuickSort(data, len, index + 1, end)
}

//辅助函数 - 生成[n,m]的随机整数
function RandomInRange(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}

//辅助函数 - 交换两个数字
Array.prototype.Swap =function(a, b){
    [this[a], this[b]] = [this[b], this[a]];
    return this;
};
