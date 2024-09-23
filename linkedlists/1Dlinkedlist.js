// linked list is a linear data structure that can be visualized as two nodes connected to each other making a chain.
// the first node is called 'Head node' and last node is called 'Tail node'.
// A traditional linked list node holds two values i.e. data and pointer towards the next node.
// Data Storage - unlike arrays, linked list also stores pointer towards the next node which takes
//                 4 bytes - 32 bit system
//                 8 bytes - 64 bit system
// 1D Linked List - In this type, each node points towards the next node, limited to only one direction going from head to tail.
//                  the constructor takes two params .i.e data and nextNode pointer which is set to be null by default.



// Problem Statement - Given a linked list and integer value, insert the updated value at the head of the list and return the updated list.

const getEntireList = (LiList) => {
    let textResult = ''
    const finalArray = []

    let currentNode = LiList
    while(currentNode !== null){
        finalArray.push(currentNode.data)
        textResult += currentNode.data + '->'
        currentNode = currentNode.node
    }
    return {
        textResult,
        finalArray
    }
}

const initLLByArray = (arr) => {
    if(arr.length === 0){
        return null
    }
    const linkList = new Node(arr[0])
    let currentNode = linkList
    arr.slice(1).forEach((data, index) => {
        currentNode.node = new Node(data)
        currentNode = currentNode.node
    })
    return linkList
}

// delete tail of node
const deleteTail = (liList) => {
    let currentNode = liList

    while(true){
        if(currentNode.node.node === null){
            currentNode.node = null
            break
        }
        currentNode = currentNode.node
    }
}

// evalute length of linked list
const getLengthOfLLBasic = (liList) => {
    let len = 0
    let currentNode = liList

    while(currentNode !== null){
        len += 1
        currentNode = currentNode.node
    }
    return len
}

// check if element exists in linked list or not
const doesElementExists = (liList, element) => {
    let currentNode = liList
    while (currentNode !== null){
        if(currentNode.data === element){
            return true
        } 
        currentNode = currentNode.node
    }
    return false
}

class Node {
  constructor(data1, node1 = null) {
    (this.data = data1), (this.node = node1);
  }
}

const arr = [12, 8, 5, 7, 10];
const val = 100;

const tempNode = initLLByArray(arr)
const finalNode = new Node(val, tempNode)

// prints entire node
const result = getEntireList(finalNode)
console.log(result.textResult)


deleteTail(finalNode)
const delResult = getEntireList(finalNode)
console.log(delResult.textResult)


