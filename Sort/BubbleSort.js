/**
 * 冒泡排序
 *
 * 比较相邻的两项
 * 如果前面的一项大于后面的一项，则交换它们
 * 使用内循环和外循环
 * **/

function bubbleSort(array){
    const { length } = array;
    for(let i = 0;i < length; i++){
        for(let j = 0;j < length-1; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }

    return array
}
