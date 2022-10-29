/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivot;
    let rightSum = nums.reduce((p, c) => p+c, 0);
    let leftSum = 0;
    let backNum = 0;
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        leftSum += backNum;
        // console.log(i, leftSum, rightSum)
        backNum = nums[i];
        if (leftSum === rightSum) {
            pivot = i;
            return pivot;
        }
    }
    if (pivot === undefined) {
        return -1;
    }
};