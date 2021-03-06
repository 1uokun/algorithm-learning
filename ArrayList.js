"use strict";

/**
 * 排序算法
 * **/

function ArrayList(){

    var array = [];

    this.insert = function(item){
        array.push(item)
    };

    this.toString = function(){
        return array.join()
    };

    /**
     * 冒泡排序
     *
     * 比较两个相邻的项，如果第一个比第二个大，则交换它们
     * 元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名
     *
     * 时间复杂度： O(n^2)
     * **/
    this.bubblesSort = function(){
        var len = array.length;
        for(var i=0;i<len;i++){
            for(var j=0;j<len-1;j++){
                if(array[j] > array[j+1]){
                    var temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;

                    // 增强的对象属性
                    // [array[j], array[j+1]] = [array[j+1], array[j]]
                }
            }
        }
    };

    this.modifieBubbleSort = function(){
        var len = array.length;
        for(var i=0;i<len;i++){
            for(var j=0;j<len-1-i;j++){ // j<len-1-i 已循环过不再循环
                if(array[j] > array[j+1]){
                    [array[j], array[j+1]] = [array[j+1], array[j]]
                }
            }
        }
    };

    /**
     * 选择排序
     *
     * 选择排序算法是一种原址比较排序算法。
     * 选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，
     * 接着找到第二小的值并将其放在第二位，依次类推
     *
     * 时间复杂度： O(n^2)
     * **/
    this.selectionSort = function(){
        var len = array.length,
            indexMin;

        for(var i=0;i<len;i++){
            indexMin = i;
            for(var j=i;j<len;j++){
                if(array[indexMin] > array[j]){
                    indexMin = j;
                }
            }

            if(i!==indexMin){
                [array[i], array[indexMin]] = [array[indexMin], array[i]]
            }
        }
    };

    /**
     * 插入排序
     *
     * 插入排序每次排一个数组项，以此方式构建最后的排序组。
     * 假定第一项已经排序了，接着，它和第二项进行比较，第二项是应该待在原位还是插到第一项之前呢？
     * 这样，头两项就已正确排序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢？），以此类推。
     *
     * 排序小型数组时，此算法比选择排序和冒泡排序性能要好
     * **/
    this.insertionSort = function(){
        var len = array.length,
            j,temp;

        for(var i=1;i<len;i++){
            j=i;
            temp = array[i];
            while(j>0 && array[j-1] > temp){
                array[j] = array[j-1];
                j--
            }
            array[j] = temp;
        }
    };

    /**
     * 归并排序
     *
     * 归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，
     * 直到每个小数组只有一个位置，接着将小数组归并成较大的数组，
     * 直到最后只有一个排序完毕的大数组。
     *
     * 由于是分治法，归并排序也是递归的。
     *
     * 时间复杂度： O(n*log^n)
     * **/
    this.mergeSort = function(array){
        // 辅助函数：merge 负责合并和排序小数组来产生并返回大数组
        var merge = function(left, right){
            var result = [],
                il = 0,
                ir = 0;

            while(il < left.length && ir < right.length){
                if(left[il] < right[ir]){   //左右从第一个索引开始进行对比
                    result.push(left[il++])
                }else {
                    result.push(right[ir++])
                }
            }

            while(il < left.length){
                result.push(left[il++])
            }

            while(ir < right.length){
                result.push(right[ir++])
            }

            return result

        };

        var length = array.length;
        if(length === 1){   //停止递归的条件
            return array
        }

        var mid = Math.floor(length/2),
            left = array.slice(0,mid),
            right = array.slice(mid, length);

        return merge(this.mergeSort(left), this.mergeSort(right))
    };

    /**
     * 快速排序
     *
     * 和归并排序一样，快速排序也使用分治的方法，将原始数组分为较小的数组（但并没有像归并排序那样将它们分割开）
     * 过程：
     * (1)首先，从数组中选择中间一项作为主元
     * (2)创建两个指针，左边一个指向数组第一项，右边一个指向数组最后一个项。
     *    移动左指针直到我们找到一个比主元大的元素
     *    接着，移动右指针直到找到一个比主元小的元素，
     *    然后交换它们，重复这个过程，直到左指针超过了右指针。
     *    (这个过程将使得比主元小的值都排在主元之前，而比主元大的值都排在主元之后。这一步叫作【划分操作】)
     * (3)接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤
     *    直至数组已完全排序。
     *
     * 时间复杂度： O(n*log^n)
     * **/
    this.quickSort = function(){
        // 辅助递归函数：quick 传递非排序数组，以及索引0及其最末的位置（因为我们要排整个数组，而不是一个子数组）作为参数
        var quick = function(array, left, right){

            var index;

            if(array.length > 1){
                index = partition(array, left, right)

                if(left < index - 1){
                    quick(array, left, index-1)
                }

                if(index < right){
                    quick(array, index, right)
                }
            }
        };

        // 辅助函数：partition 划分过程
        var partition = function(array, left, right){

            var pivot = array[Math.floor((right+left)/2)],
                i = left,
                j = right;

            while(i <= j){
                while(array[i] < pivot){
                    i++
                }

                while(array[j] > pivot){
                    j--
                }

                if(i <= j){
                    [array[i], array[j]] = [array[j], array[i]]
                    i++;
                    j--
                }
            }
            return i;
        }
    }

}
