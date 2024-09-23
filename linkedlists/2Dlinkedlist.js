// 2D Linked List
// Unlike 1D Linked Lists they are bi-bidirectional in nature .i.e traversion can also be done from current node to prev node.
// A node has three values i.e. data, pointer to previous node and a pointer to next node.
// Head is initialized with both prev and next pointer set to be null, making the list to be starting and ending with null pointers.

class Node {
    constructor(data, next=null, prev=null){
        this.data = data,
        this.next = next,
        this.prev = prev
    }
}

const getEntireList = (LiList) => {
    let textResult = ''
    const finalArray = []

    let currentNode = LiList
    while(currentNode !== null){
        finalArray.push(currentNode.data)
        textResult += currentNode.data + '<->'
        currentNode = currentNode.next
    }
    return {
        textResult,
        finalArray
    }
}

const initDllByArray = (arr) => {
    if(arr.length === 0){
        return null
    }
    const linkList = new Node(arr[0])
    let currentNode = linkList
    arr.slice(1).forEach((data, index) => {
        currentNode.next = new Node(data, null, currentNode)
        currentNode = currentNode.next
    });
    return linkList
}

const deleteLastNode = (liList) => {
    if(liList === null || liList.next === null){
        return null
    }
    let lastNode = liList
    while(lastNode.next !== null){
        lastNode = lastNode.next
    }

    lastNode.prev.next = null
    lastNode.prev = null
    delete lastNode
}

const reverseDllBrute  = (liList) => {
    const reversed = new Node(0)

    let currentReversed = reversed
    let tailNode = liList
    while(tailNode.next !== null){
        tailNode = tailNode.next
    }

    while(tailNode !== null){
        currentReversed.next = new Node(tailNode.data, null, currentReversed)
        currentReversed = currentReversed.next
        tailNode = tailNode.prev
    }
    return reversed
}

const reversedDllOpt = (liList) => {
    if (liList === null) return null;

    let currentNode = liList;
    let newHead = null;

    // Traverse the original list and create new nodes for the reversed list
    while (currentNode !== null) {
        const newNode = new Node(currentNode.data);
        newNode.next = newHead;
        if (newHead !== null) {
            newHead.prev = newNode;
        }
        newHead = newNode;
        currentNode = currentNode.next;
    }

    return newHead;
}

const arr = [12, 8, 5, 7, 10];

const newDll = initDllByArray(arr)
const {textResult} = getEntireList(newDll)
console.log(newDll)
console.log(textResult)
deleteLastNode(newDll)
const {textResult: t2} = getEntireList(newDll)
console.log(t2)
const reversed = reversedDllOpt(newDll)
const {textResult: t3} = getEntireList(reversed)
console.log(t3)