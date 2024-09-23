//// Find the Largest element in an Array

// -> Bruteforce Approach: sort the array in ascending order and pick the last element.
function getLargestElementBrute(arr) {
    arr.sort((a, b) => a - b) //sort modifies original array while toSorted returns a modified version without changing original one.
    return arr[arr.length - 1]
}
// Time complexity: O(N*log(N)), Space complexity: O(N)

// -> Optimal Approach: assign the first element of the array to be the largest element and then loop through the array replacing the value by a higher value.
function getLargestElementOptim(arr) {
    let largest = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

// --------------------------------------------------------------------------------------- //

//// Find Second Smallest and Second Largest Element in an array.

// BruteForce Approach (works only for array with unique values):
function getSecondSmallestSecondLargestBrute(arr) {
    if(arr.length === 0 || arr.length === 1){
        return -1 // edge case
    }
    arr.sort((a, b) => a - b)
    return 'second largest: ' + arr[arr.length - 2] + ' second smallest: ' + arr[1]
} 
// time complexity: O(N*log(N)), Space complexity: O(N)

// Better Approach :-
//                 1) find the largest and smallest element in a traversal.
//                 2) compare the largest and smallest values found and pich the second most values out.
function getSecondSmallestSecondLargestBetter(arr){
    if(arr.length === 0 || arr.length === 1){
        return -1
    }
    let smallest = Infinity
    let second_smallest = Infinity
    let largest = -Infinity
    let second_largest = -Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < second_smallest && arr[i] !== smallest){
            second_smallest = arr[i]
        }
        if(arr[i] > second_largest && arr[i] !== largest){
            second_largest = arr[i]
        }
    }

    return 'second largest: ' + second_largest + ' second smallest: ' + second_smallest
}

// Optimal Approach :- 
//                   -> same approach as above but in a single traversal.
//                   -> if the element in less than small update both small and second_small.
//                   -> if the element is just smaller than second small update only second_small.
function getSecondSmallestSecondLargestOptim(arr){
    if(arr.length === 0 || arr.length === 1){
        return -1
    }
    let smallest = Infinity
    let second_smallest = Infinity
    let largest = -Infinity
    let second_largest = -Infinity

    for(let i = 0; i<arr.length; i++){
        if(arr[i] < smallest){
            second_smallest = smallest
            smallest = arr[i]
        }else if(arr[i] < second_smallest && arr[i] !== smallest){
            second_smallest = arr[i]
        }

        if(arr[i] > largest){
            second_largest = largest
            largest = arr[i]
        }else if(arr[i] > second_largest && arr[i] !== largest){
            second_largest = arr[i]
        }
    }

    return 'second largest: ' + second_largest + ' second smallest: ' + second_smallest
}
// time complexity: O(N), Single-pass solution, space complexity: O(1)

// --------------------------------------------------------------------------------------- //

//// Check if an Array is Sorted

// BruteForce Approach :- 
//                     -> traverse through the array twice.
//                     -> select the element in first iteration and compare it's value to future elements in second iteration.
//                     -> if any of the future value turns out to be greater than the current value, array isn't sorted.
function checkIfArrayIsSortedBrute(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[i] > arr[j]){
                return false
            }
        }
    }
    return true
}
// Time Complexity: O(N^2), Space Complexity: O(1)

// Optimal Approach :-
//                  -> traverse through the array once.
//                  -> check if the current element is smaller than the previous one.
//                  -> if any case return false, array is not sorted.
function checkIfArrayIsSortedOptim(arr) {
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false
        }
    }
    return true
}
// Time Complexity: O(N), Space Complexity: O(1)

// --------------------------------------------------------------------------------------- //

//// Remove Duplicates in-place from Sorted Array.

function removeDuplicateInSortedArrayBrute(arr){
    const arr1 = []
    for(let i = 0; i<arr.length; i++){
        let flag = true
        for(let j = 0; j<arr1.length; j++){
            if(arr[i] === arr1[j]){
                flag = false
            }
        }
        if(flag){
            arr1.push(arr[i])
        }
    }
    return arr1;
}

// using ES6
function removeDuplicateInSortedArray(arr){
    const sortedArr = arr.filter((element, i) => arr.indexOf(element) === i)
    return sortedArr // this method can sort any array let whether sorted or not.
}   

// --------------------------------------------------------------------------------------- //
//// Linear Search

function getIndexOfElement(arr, element){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === element){
            return i
        }
    }
    return -1
}

// --------------------------------------------------------------------------------------- //
// Union of Two Sorted Arrays
// using es6
function unionOfSortedArrays(arr1, arr2){
    const commonElements = arr2.filter((element, i) => arr1.includes(element) && arr2.indexOf(element) === i)
    const distinctElement1 = arr1.filter((element) => !commonElements.includes(element))
    const distinctElement2 = arr2.filter((element) => !commonElements.includes(element))
    const union = [...commonElements, ...distinctElement1, ...distinctElement2]
    return {commonElements, distinctElement1, distinctElement2, union}
}


// --------------------------------------------------------------------------------------- //
// Find the missing number in an array
function findMissingNumber(arr, n){
    const missingNumbers = []
    Array(n).fill(0).forEach((_, index) => {
        if(!arr.includes(index + 1)){
            missingNumbers.push(index+1)
        }
    })
    return missingNumbers
}

