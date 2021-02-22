class treeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        //In this case, we are keeping track of how many instances of this value exist.
        this.count = 1;
    }
}