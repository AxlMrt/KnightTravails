// This const is given by Odin Project
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const Node = (data) => {
  this.data = data;
  this.left = null;
  this.right = null;
};

const Tree = (array) => {
  this.root = buildTree(array, 0, array.length - 1);
  prettyPrint(this.root);
};

const buildTree = (arr, start, end) => {
  if (start > end) return null;

  const mid = parseInt((start + end) / 2);
  const node = new Node(arr[mid]);

  node.left = buildTree(arr, start, mid - 1);
  node.right = buildTree(arr, mid + 1, end);
  return node;
};
