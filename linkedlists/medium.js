const initllByArray = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  const linkList = new Node(arr[0]);
  let currentNode = linkList;
  arr.slice(1).forEach((data, index) => {
    currentNode.next = new Node(data, null);
    currentNode = currentNode.next;
  });
  return linkList;
};

const getEntireList = (LiList) => {
  let textResult = "";
  const finalArray = [];

  let currentNode = LiList;
  while (currentNode !== null) {
    finalArray.push(currentNode.data);
    textResult += currentNode.data + "->";
    currentNode = currentNode.next;
  }
  return {
    textResult,
    finalArray,
  };
};

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

const arr = [12, 8, 5, 8, 7, 10];

const newll = initllByArray(arr);

// problem - find the middle element in a linked list.

const bruteMiddle = (linkList) => {
  if (linkList === null) return null;
  if (linkList.next === null) return linkList.data;

  const tempArray = [];
  let currentNode = linkList;

  while (currentNode !== null) {
    tempArray.push(currentNode.data);
    currentNode = currentNode.next;
  }

  return tempArray[parseInt(tempArray.length / 2)];
  // time complexity = O(N) cause an entire iteration is traversed through LL.
};

const optMiddle = (linkList) => {
  if (linkList === null) return null;
  if (linkList.next === null) return linkList.data;

  let tort = linkList;
  let hare = linkList;

  while (hare && hare.next) {
    tort = tort.next;
    hare = hare.next.next;
  }
  return tort.data;
  // time complexity = O(N/2) hare completes the iteration in half the time which makes TC to be half.
};

// reverse a linked list

const bruteReverse = (linkList) => {
  if (linkList === null) return null;

  let reversed = null;
  let currentNode = linkList;

  while (currentNode !== null) {
    const newHead = new Node(currentNode.data, reversed);
    reversed = newHead;
    currentNode = currentNode.next;
  }
  return reversed;
};

const { textResult: rr } = getEntireList(bruteReverse(newll));
console.log(rr);

// problem = detect a cycle in a linked list.

const createALoopLL = () => {
  const newLL = new Node(1);
  const second = new Node(2);
  const third = new Node(3);
  const fourth = new Node(4);

  newLL.next = second;
  second.next = third;
  third.next = fourth;

  // loop
  fourth.next = second;

  return newLL;
};

const detectLoopLLBrute = (linkList) => {
  let currentNode = linkList;
  const tempArray = [];

  while (currentNode !== null) {
    if (tempArray.includes(currentNode)) {
      return true;
    }
    tempArray.push(currentNode);
    currentNode = currentNode.next;
  }
  return false;
};

const detectLoopLLOpt = (linkList) => {
  let tort = linkList.next;
  let hare = linkList.next.next;

  while (true) {
    if (hare === null || hare.next === null) {
      return false;
    }
    if (tort === hare) {
      return true;
    }
    hare = hare.next.next;
    tort = tort.next;
  }
  // time complexity - O(N) because of worst case scenario if there's a loop hare will be further and
  //                   will reduce the distance on each iteration.
};

// Problem - Find the starting point of loop in a linked list.

const startingLoopPointBrute = (linkList) => {
  let currentNode = linkList;
  const tempArray = [];

  while (currentNode !== null) {
    if (tempArray.includes(currentNode)) {
      return currentNode;
    }
    tempArray.push(currentNode);
    currentNode = currentNode.next;
  }
  return null;
};

const startingLoopPointOpt = (linkList) => {
  let tort = linkList;
  let hare = linkList;

  while (true) {
    if (hare.next === null || hare.next === null) {
      return null;
    }
    tort = tort.next;
    hare = hare.next.next;
    if (hare === tort) {
      break;
    }
  }

  tort = linkList;
  while (hare !== tort) {
    hare = hare.next;
    tort = tort.next;
  }
  return tort;
};

//  problem -  find length of the loop in linked list.

const loopedLl = createALoopLL();

const lengthOfLoopBrute = (linkList) => {
  let currentNode = linkList;
  const tempArray = [];

  while (currentNode !== null) {
    if (tempArray.includes(currentNode)) {
      const len = tempArray.length - tempArray.indexOf(currentNode);
      return len;
    }
    tempArray.push(currentNode);
    currentNode = currentNode.next;
  }
  return null;
};

const lengthOfLoopOpt = (linkList) => {
  let tort = linkList;
  let hare = linkList;

  while (true) {
    if (hare === null || hare.next === null) {
      return null;
    }
    hare = hare.next.next;
    tort = tort.next;
    if (hare === tort) {
      break;
    }
  }

  let counter = 0;
  while (true) {
    hare = hare.next;
    counter += 1;
    if (hare === tort) {
      return counter;
    }
  }
};

// problem - check if linked list is palindrome or not.
const checkIfLLPalindromeBrute = (linkList) => {
  let currentNode = linkList;
  const tempArray = [];
  while (currentNode !== null) {
    tempArray.push(currentNode.data);
    currentNode = currentNode.next;
  }
  for (let index = 0; index <= tempArray.length; index++) {
    if (tempArray[tempArray.length - (index + 1)] !== tempArray[index]) {
      return false;
    }
    if (index === parseInt(tempArray.length / 2)) {
      return true;
    }
  }
  // time complexity is O(N) for first traversal and O(N/2) for second traversal. Which makes it to be O(N+N/2)
  // space complexity is O(N) because stack saved the entire LL.
};

const checkIfLLPalindromeOpt = (linkList) => {
  let hare = linkList
  let tort = linkList

  while(hare !== null && hare.next !== null){
    hare = hare.next.next
    tort = tort.next
  }

  let currentNode = linkList
  let halfHead = null
  while(currentNode !== tort){
    halfHead = new Node(currentNode.data, halfHead)
    currentNode = currentNode.next
  }

  let centerNode = tort
  let currentHead = halfHead
  while(centerNode !== null){
    if(currentHead.data !== centerNode.data){
      return false
    }
    currentHead = currentHead.next
    centerNode = centerNode.next
  }
  console.log(getEntireList(linkList).textResult)
  return true
}

// problem - segregate even and off nodes in linkedList.

const segregateOddEvenLLBrute = (linkList) => {
  const oddNums = []
  const evenNums = []

  let currentNode = linkList
  while(currentNode !== null){
    if(currentNode.data % 2 === 0){
      evenNums.push(currentNode.data)
    }else{
      oddNums.push(currentNode.data)
    }
    currentNode = currentNode.next
  }

  const finalArray = [...evenNums, ...oddNums]
  let newHead = new Node(finalArray[0])
  let current = newHead
  for(let i = 1; i<finalArray.length; i++){
    current.next = new Node(finalArray[i], null)
    current = current.next
  }
  return newHead
}

// probem - remove n-th node from end of the linkedList.
const removeNodeFromEndBrute = (linkList, nodeIndex) => {
  let lengthOfLL = 0
  let currentNode = linkList

  while(currentNode !== null){
    currentNode = currentNode.next
    lengthOfLL++
  }

  const indexToRemove = lengthOfLL - nodeIndex
  currentNode = linkList
  prevNode = linkList
  counter = 0
  while(counter !== indexToRemove){
    prevNode = currentNode
    currentNode = currentNode.next
    counter++
  }
  prevNode.next = currentNode.next
  return linkList
  // time complexity for forst traversal is O(N) and for second traversal is O(N-I), which makes it to be O(N) + O(N-I)
}

const removeNodeFromEndOpt = (linkList, nodeIndex) => {
  let fast = linkList
  let slow = linkList
  let counter = 0
  while(fast !== null){
    if(counter >= nodeIndex + 1){
      slow = slow.next
    }
    fast = fast.next
    counter++
  }
  slow.next = slow.next.next
  return linkList
  // since, there's only one traversal the total time complexity will be O(N).
}

// problem - Delete the middle Node of the linked list

// brute - it will be same as brute in the provided index problem, we will has to fist traverse through the 
//          enitre LL to find the middle index and then traverse till the node just before middle index and cut the next node 
//          from connection, the time complexity will be O(N) + O(N/2)

const removeMiddleNodeOfLLOpt = (linkList) => {
  let hare = linkList.next.next
  let tort = linkList

  while(hare !== null && hare.next !== null){
    hare = hare.next.next
    tort = tort.next
  }

  tort.next = tort.next.next
  return linkList
  // since half of the linkedlist is traversed, the time complexity will be O(N/2).
}

// problem - find intersection of two linked lists.
const createIntersectLL = () => {
  const firstLL = initllByArray([1,3,1,2,4])
  const secondLL = initllByArray([4,3,2])
  secondLL.next.next.next = firstLL.next.next.next
  return {firstLL, secondLL}
}

const {firstLL, secondLL} = createIntersectLL()

const findTwoLLIntersectionBrute = (first, second) => {
  let currentFirst = first
  let currentSecond = second
  const tempArray = []
  while(currentFirst !== null){
    currentFirst = currentFirst.next
    tempArray.push(currentFirst)
  }
  while(currentSecond !== null){
    if(tempArray.includes(currentSecond)){
      return currentSecond
    }
    currentSecond = currentSecond.next
  }
  return null
  // time complexity is O(M) + O(N), where m and n is the length of first and second LL.
  // space complexity is O(N), as a stack was used to save the LL.
}

const findTwoLLIntersectionDistance = (first, second) => {
  let currentFirst = first
  let currentSecond = second

  let firstLen = 0
  let secondLen = 0

  while(currentFirst !== null || currentSecond !== null){
    
  }
}

console.log(findTwoLLIntersectionBrute(firstLL, secondLL))

