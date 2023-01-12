function threeSum(arr, target) {
  //your code here
	arr.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === target) {
                return target;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
            closestSum = Math.abs(sum - target) < Math.abs(closestSum - target) ? sum : closestSum;
        }
    }
    return closestSum;
}

module.exports = threeSum;
