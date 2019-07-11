/**
 * Adelson-Velskii-Landi树（AVL树）
 *
 * 自平衡树
 * **/

function AVL(){

    //计算节点高度
    var heightNode = function(node){
        if(node === null){
            return -1
        }else {
            return Math.max( heightNode(node.left), heightNode(node.right) ) + 1
        }
    };

    //辅助函数 - 插入新节点insertNode
    var insertNode = function(node, element) {
        if (node === null) {
            node = new Node(element);
        } else if (element < node.key) {
            node.left = insertNode(node.left, element);
            if (node.left !== null) {
                // 确认是否需要平衡 {1} }
            } else if (element > node.key) {
                node.right = insertNode(node.right, element);
                if (node.right !== null) {
                    // 确认是否需要平衡 {2} }
                }
                return node;
            }
        }
    }

    //向左的单旋转
    this.rotationRR = function(node){
        var tmp = node.right;
        node.right = null;
        tmp.left = node;
        return tmp
    }

}

AVL.prototype = new BinarySearchTree();
