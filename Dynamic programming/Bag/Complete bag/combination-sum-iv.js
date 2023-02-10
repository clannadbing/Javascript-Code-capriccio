// https://leetcode.cn/problems/combination-sum-iv/
var combinationSum4 = function(nums, target) {
    // 1. dp[j]含义：装满背包j的方案数量为dp[j]
    // 2. dp[j]初始化：dp[0] = 1
    let dp = new Array(target+1).fill(0)
    dp[0] = 1
    // 3. dp递推顺序：先背包，后物品(正序) --> 排列问题
    for (let j = 0; j <= target; j++) {
        for (let i = 0; i < nums.length; i++) {
            // 4. dp递推公式: dp[j] = dp[j] + dp[j-nums[i]]
            if (j >= nums[i]) {
                dp[j] = dp[j] + dp[j-nums[i]] 
            }
        }
    }
    return dp[target]
};