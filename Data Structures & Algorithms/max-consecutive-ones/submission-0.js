class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
let maxFound = 0;

for (const val of nums) {
    if (val === 1) {
        count++;
        // Update max whenever count grows
        if (count > maxFound) maxFound = count;
    } else {
        // Reset counter when sequence is broken
        count = 0;
    }
}

return maxFound;
    }
}
