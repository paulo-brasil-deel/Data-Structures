class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = null

    }


    add(value){

    const node =  this.root
        if(node === null){
            this.root = new TreeNode(value)
            return
        }else{

            // the root is the node passed in the first call of the function.
            const searchTree = function(node){

                if(value > node.value){
                    if( node.right === null){
                        node.right = new TreeNode(value)
                        return;

                    }else if(node.right !== null){
                        return searchTree( node.right);
                    }

                }else if(value< node.value) {
                    if(node.left === null){
                        node.left = new TreeNode(value)
                        return
                    }else if(node.value !== null){
                        return searchTree(node.left)
                    }
                }

            };

            return  searchTree(node)



        }
    }

    //this function moves to the left of the tree.
    // walkToLeft(node){
    //         if(node.left === null){
    //             return node.value
    //         } else {
    //
    //            return this.walkToLeft(node.left)
    //         }
    //
    // }



    findMin(){
        let current = this.root
        while(current.left != null)
           { current = current.left;}

           return current.value;

        // let current = this.root;
        // if(current.left == null){
        //     return current.value;
        // }else{
        //     return this.walkToLeft(current.left)
        // }
    }

    findMax(){
        let current = this.root

        while (current.right != null){
            current = current.right
        }
        return current.value

    }

    contains(value){
        let current = this.root
        while (current){
            if(value === current.value){
                return true
            }
            if(value > current.value){
                current = current.right
            }else{
                current = current.left
            }
        }
        return false

    }

    // remove(value){
    //
    //     const removeNode = function (node,value) {
    //
    //         if(node == null){
    //             return null
    //         }
    //         // node has no children
    //         if(value == node.value) {
    //             if (node.right == null && node.left == null) {
    //                 return null
    //             }
    //
    //             //node has no right children
    //             if (node.right == null) {
    //                 return node.left
    //             }
    //
    //             //node has no left children
    //             if (node.left == null) {
    //                 return node.right
    //             }
    //
    //             //node has both children is a bit more complex
    //
    //             var tempoNode = node.right
    //             while (tempoNode.left != null) {
    //                 tempoNode = tempoNode.left
    //             }
    //             else if (value < node.value){
    //                 node.value = tempoNode.value
    //                 node.right = removeNode(node.left,value)
    //                 return node
    //             }else {
    //                 node.right = removeNode(node.left, value)
    //                 return node
    //
    //             }
    //
    //         }
    //
    //         this.root = removeNode(this.root,value)
    //     }
    //
    // }



    remove(value){

        var removeNode = function (node,value) {

            if(node == null){
                return null
            }
            if(value > node.value){
                    console.log("i am bigger then the root")
                return removeNode(node.right,value)

            }else if( value < node.value){
                console.log("i am smaller then the root")
                return removeNode(node.left, value)

            } else if( value == node.value ){

                if(node.right == null && node.left == null){

                    return null

                }else if(node.right == null){

                    return node.left

                }else if (node.left == null){

                    return node.right

                }else{
                    let temp = node.right
                    while (temp.left != null){
                            temp = temp.left
                    }
                    node.value = temp.value
                    return node


                }

            }

        }

      this.root= removeNode(this.root,value)





        }



}

t = new BinaryTree();
t.add(40)
t.add(50)
t.add(60)
t.add(25)
t.add(30)
t.add(15)
t.add(82)

