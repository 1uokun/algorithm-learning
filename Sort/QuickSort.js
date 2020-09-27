/**
 * QuickSort 快速排序
 *
 * <p>左右指针与随机主元
 * <p>当左指针比主元大且右指针比主元小，则交换它们
 * <p>主元的选择：最左的对于已经排好的通常是最差的，一般为中间
 * **/


/**
 * 方式一：【随机主元】
 *
 * 特点：尾递归，"深度遍历"，"动态规划"
 *
 * @step1: 随机选择一个主元
 * @step2: 创建2个数组left、right左右两个子集
 * @step3: 以主元为界，比主元小的放在left中，比主元大的放在right中
 * @step4: 对左右两个子集重复上三步动作，直到所有子集只剩下一个元素为止
 *
 * @return Array
 * **/
function QuickSort(arr){
    const len = arr.length;
    if(len <= 1){
        return arr;
    }

    // 随机主元
    const main = RandomInRange(0,len-1);

    // 创建左右子集
    let left = [], right = [];

    for(let i=0;i<len;i++){
        if(i !== main){
            if(arr[i] < arr[main]){
                left.push(arr[i])
            }else {
                right.push(arr[i])
            }
        }
    }

    // 递归
    return QuickSort(left).concat([arr[main]], QuickSort(right))
}

/**
 * 方式二：Partition模式
 *
 * @step1: 主元先放到最后，遍历一遍后获得左右数组后，再把主元放在左数组最后
 * @step2: 左右数组重复上述动作(递归)
 * @step3: 递归结束条件是分出来的数组长度小于等于1
 *
 * @return undefined 直接修改原数组
 * **/
function QuickSort2(data, len=data.length, start=0, end=data.length-1){
    if(start == end)
        return;

    let index = Partition(data, len, start, end);
    if(index > start)
        QuickSort2(data, len, start, index -1);
    if(index < end)
        QuickSort2(data, len, index + 1, end);
}
/**
 * 辅助函数 - Partition
 *
 * 随机确定一个主元
 * 将这个主元和最后元素互换，方便后面左移分组操作
 *
 * @param data : Array
 * @param len : Number
 * @param start : Number
 * @param end : Number
 *
 * @return number 分割点
 * **/
function Partition(data, len, start, end) {
    if(!Array.isArray(data) || len <= 0 || start < 0 || end >= len) {
        throw new Error("Invalid Parameters")
    }

    // 获取随机主元
    let index = RandomInRange(start, end);

    // 随机主元与最后元素呼唤
    data.Swap(index, end);

    let small = start - 1;

    for(index = start;index<=end;index++){
        // 如果当前比主元小,放到最左边
        if(data[index] < data[end]){
            ++small;
            if(small !== index){
                data.Swap(index, small)
            }
        }
    }

    // 再把主元换回到到左边的最后一位
    ++small;
    data.Swap(small, end);

    return small
}


/**
 * 方式三：【主元为第一个】
 *
 * 实际测试的时候，第二种存在速度慢，数组超过10000条数据还会出现Maximum call stack size exceeded的情况

 *
 * @step1: 将第一个元素设为轴心点,轴线点指数初始值为0
 * @step1: 存储指数 = 轴线点指数+1
 * @step1: 从 (i = 轴线点指数+1 )开始向右遍历
 * @step1: 如果 元素[i] < 元素[轴心点]，交换（i,存储指数），存储指数++
 *
 * @link https://visualgo.net/zh/sorting
 * **/





/**
 * 辅助函数 - 生成[n,m]的随机整数
 * 可以通过在算法中引入随机性，使得算法对所有输入都能获得较好的期望性能
 *
 * @return number
 * **/
function RandomInRange(minNum,maxNum){
    if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10);
    } else if (arguments.length === 2) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    } else {
        return 0;
    }
}


/**
 * 辅助函数 - 交换两个数字
 * **/
Array.prototype.Swap =function(a, b){
    [this[a], this[b]] = [this[b], this[a]];
    return this;
};
