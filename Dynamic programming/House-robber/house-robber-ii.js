// https://leetcode.cn/problems/house-robber-ii/
var rob = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    let nums1 = nums.slice(0, nums.length-1)
    let nums2 = nums.slice(1, nums.length)
    var res = function(nums) {
        // 1. dp[i]含义：表示考虑第i个房间, 偷窃到的最高金额为dp[i]
        // 2. dp[i]初始化： dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1])
        let dp = new Array(nums.length).fill(0)
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])
        // 3. dp递推顺序：从左向右
        for (let i = 2; i  < nums.length; i++) {
            // 4. dp递推表达式：
            dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
        }
        return dp[nums.length-1]
    };
    return Math.max(res(nums1), res(nums2))
};