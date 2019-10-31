let n = 0
let queue = [];
let screenDiv = document.querySelector('#screen')
getNumber.onclick = ()=>{
  n += 1;
  nowNumber.innerText = n
  queue.push(n)
  myQueue.innerText = JSON.stringify(queue)
}
callNumber.onclick = ()=>{
  if(!queue.length) {return}
  let number = queue.shift();
  nowNumber.innerText = number
  myQueue.innerText = JSON.stringify(queue)
  screenDiv.innerText = `请 ${number} 号顾客就餐`
}