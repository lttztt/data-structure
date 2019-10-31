const createTree = value =>{
  return {
    data: value,
    children: null,
    parent: null
  }
}

const addChild = (tree, value) =>{
  let newNode = {
    data: value,
    children: null,
    parent: tree
  }
  tree.children = tree.children || []
  tree.children.push(newNode)
  return newNode
}

const travel = (tree, fn) =>{
  fn(tree)
  if(!tree.children){
    return 
  }else {
    for(let i = 0; i < tree.children.length; i++){
      travel(tree.children[i], fn)
    }
  }
}


const find = (tree, node) =>{
  if(tree === node) {
    return tree
  }else if(tree.children){
    for(let i = 0; i < tree.children.length; i++){
      const result = find(tree.children[i], node)
      if(result){
        return result
      }
    }
    return undefined
  }else {
    return undefined
  }
}

const removeNode = (tree, node) =>{
  let siblings = node.parent.children;

  let index = 0;
  for (let i = 0; i < siblings.length; i++){
    if(siblings[i] === node){
      index = i
    }
  }
  siblings.splice(index, 1)
}

let tree = createTree(10)
let node1 = addChild(tree, 20)
let node2 = addChild(tree, 30)
let node3 = addChild(tree, 40)

console.log(tree);
setTimeout(() => {
  let remove = removeNode(tree, node2)
  console.log(tree);
}, 3000)
// let res = find(tree, node2)
// console.log(res);


// travel(tree, (item)=>{
//   console.log(item.data)
// })