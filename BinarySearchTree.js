"use strict";

function BinarySearchTree() {

    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    //向树中插入一个新的键
    this.insert = function(key){

        var newNode = new Node(key);

        if(root === null){
            root = newNode
        }else {
            insertNode(root, newNode)
        }
    };

    //在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
    this.search = function(key){
        return searchNode(root, key)
    };
    //移除一个节点
    this.remove = function(key){
        root = removeNode(root, key)
    };

    /**
     * 先序遍历 - 父节点->子节点左->子节点右
     * **/
    this.preOrderTraverse = function(callback){
        //辅助函数 - 父节点->子节点左->子节点右
        var preOrderTraverseNode = function(node, callback){
            if(node !== null){
                callback(node.key);
                preOrderTraverseNode(node.left, callback);
                preOrderTraverseNode(node.right, callback);
            }
        };
        preOrderTraverseNode(root, callback)
    };

    /**
     * 中序遍历 - 子节点左->父节点->子节点右（从小到大的顺序访问所有节点）
     * **/
    this.inOrderTraverse = function(callback){
        //辅助函数 - 子节点左->父节点->子节点右
        var inOrderTraverseNode = function(node, callback, index = 0){
            if(node !== null){
                inOrderTraverseNode(node.left, callback, index);    //优先访问左侧子节点
                callback(node.key,index);   //在递归函数之后执行 为倒叙执行 即从最底层开始执行
                inOrderTraverseNode(node.right, callback, index);   //再访问右侧子节点
            }
        };
        inOrderTraverseNode(root, callback) //callback访问者模式
    };

    /**
     * 后序遍历 - 子节点左->子节点右->父节点
     * **/
    this.postOrderTraverse = function(callback){
        //辅助函数 - 子节点左->子节点右->父节点
        var postOrderTraverseNode = function(node, callback){
            if(node !== null){
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                callback(node.key)
            }
        };
        postOrderTraverseNode(root, callback)
    };

    /**
     * 宽度优先遍历 - 也称从上到下遍历二叉树
     *
     * 先访问第一层节点
     * 再访问第二层的左节点
     * 再访问第二层的右节点
     * 第二层全部访问完毕之后再优先访问第二层左节点的第三层节点
     *
     * 利用队列的先进先出特点来循环打印
     * **/
    //breath-first traversal
    this.BFS = function(){
        var queue = new Queue();

        if(root) queue.enqueue(root);

        while(!queue.isEmpty()){

            var currentTree = queue.dequeue();
            console.log('print:'+currentTree.key);

            if(currentTree.left) queue.enqueue(currentTree.left);
            if(currentTree.right) queue.enqueue(currentTree.right)
        }
    };

    //辅助函数 - 向树中插入一个键
    var insertNode = function(node, newNode){
        if(newNode.key < node.key){ //如果新节点值小于父节点
            if(node.left === null){
                node.left = newNode
            }else {
                insertNode(node.left, newNode)
            }
        }else {
            if(node.right === null){
                node.right = newNode
            }else {
                insertNode(node.right, newNode)
            }
        }
    };

    //辅助函数 - 寻找一棵树或它的任意子树中的一个特定值
    var searchNode = function(node, key){
        if(node === null){
            return false
        }
        if(key < node.key){
            return searchNode(node.left, key)
        }else if(key > node.key){
            return searchNode(node.right, key)
        }else {
            return true
        }
    };

    //辅助函数 - 移除指定节点并更新移除之后的树
    var removeNode = function(node, key){

        if(node === null){
            return null
        }
        if(key < node.key){
            node.left = removeNode(node.left, key);
            return node
        }else if(key > node.key){
            node.right = removeNode(node.right, key)
            return node
        //⬆️以上为向下寻找直到定位到被删除的节点
        }else { //键等于node.key

            //第一种情况——一个叶节点
            if(node.left === null && node.right === null){
                node = null;
                return node
            }

            //第二种情况——一个只有一个子节点的节点
            if(node.left == null){//只有右侧节点
                node = node.right;
                return node
            }else if(node.right === null){//只有左侧节点
                node = node.right;
                return node
            }

            //第三种情况——一个有两个子节点的节点
            var aux = findMinNode(node.right);
            node.key = aux.key;  //替换节点
            node.right = removeNode(node.right, aux.key);   //删除最小节点并更新右侧树枝
            return node
        }
    };

    /**
     * 辅助函数 - 搜索当前节点之后的最小的节点
     * 与min方法不同的是，min只返回键，而findMinNode返回节点node
     *
     * @params node 需要被替换的节点的右侧树枝
     * @return node 最小值节点
     * **/
    var findMinNode = function(node){
        while(node && node.left !== null){
            node = node.left;
        }

        return node;
    };

    this.print = function(){
        return root
    }

}
