/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let answer = [];
    let s = nums[0];
    answer.push(s);
    for (let i = 1; i < nums.length; i++) {
        s += nums[i];
        answer.push(s)
    }
    return answer;
};