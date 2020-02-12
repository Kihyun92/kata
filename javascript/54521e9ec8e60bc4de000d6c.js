// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


var maxSequence = function(arr) {
    let biggest = 0;
    const arrLength = arr.length;
    for (let i = 1; i <= arrLength; i++) {
        let checker = 0;
        for (let j = 0; j < arrLength; j++) {
            if (i === 1 && arr[j] < 0) {
                checker++;
            }
            biggest = compare(biggest, arr.slice(j, i + j).reduce(adder));
        }
        if (checker === arrLength) return 0;
    }
    return biggest;
};

const compare = (a, b) => a >= b ? a : b;

const adder = (acc, cur) => acc + cur;

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
