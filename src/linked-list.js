const createNode = value=>{
  return {
    data: value,
    next: null
  }
}

const appendList = (list, value) => {
  const node = createNode(value);
  let x = list;
  // 这一步是为了 遍历 到最后一个next 为 null的节点
  while(x.next){
    x = x.next
  }

  x.next = node
  // 这里返回的是创造的子节点， 为了以后remove 找到它 ， 并不是 添加后的 list
  return node
}

const removeFromList = (list, node) =>{
  let x = list;
  let p = null;
  //  如果当前list是要删除的节点，则把当前list替换为node.next （也就是说把当前的节点删除）
  // if(list === node){
  //   list = node.next
  // }else if(list.next === node){
  //   list.next = node.next
  // }else if(list.next.next === node){
  //   list.next.next = node.next
  // }
  while(x !== node){
    p = x;
    x = x.next;
  }
  if(list !== node){
    p.next = x.next
    return true
  }else {
    console.warn('你不能删除你自己哦!')
    return false
  }
}

let list = createNode(10)
let node2 = appendList(list, 20);
let node3 = appendList(list, 30);
let node4 = appendList(list, 40);
let res = removeFromList(list, node3);
// console.log(res)
console.log(list)