/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivot;
    for (let i = 0; i < nums.length; i++) {
        const left = nums.slice(0, i);
        const right = nums.slice(i+1, nums.length);
        const leftSum = left.reduce((pre, curr) => pre + curr, 0);
        const rightSum = right.reduce((pre, curr) => pre + curr, 0);
        if (leftSum === rightSum) {
            pivot = i;
            break;
        }
    }
    if (pivot != undefined) {
        return pivot;
    } else {
        return -1;
    }
};