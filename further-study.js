// Math.max(input) O(n)
//  get max
// indexOf(max) O(n), set to 0 or slice O(n)
// Math.max(remaining) O(n)
// O(n + n + n) = O(n)
function pairSum(nums) {
  let first = Math.max(nums);
  nums[nums.indexOf(first)] = -Infinity;
  let second = Math.max(nums);
  return first + second
}

// Loop through, keep largest pair, then add at the end
function pairSum(nums) {
  let largestPair = [nums[0], nums[1]];
  for (let i = 2; i <= nums.length; i++) {
    if (nums[i] > largestPair[0]) {
      largestPair[0] = nums[i];
    } else if (nums[i] > largestPair[1]) {
      largestPair[1] = nums[i];
    }
  }
  return largestPair[0] + largestPair[1];
}
