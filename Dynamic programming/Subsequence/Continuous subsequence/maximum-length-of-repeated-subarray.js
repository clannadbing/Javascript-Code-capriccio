// https://leetcode.cn/problems/maximum-length-of-repeated-subarray/
var findLength = function(nums1, nums2) {
    // 1、dp[i][j]含义：表示num1以i-1结尾, nums2以j-1结尾的公共的 、长度最长的子数组的长度为dp[i][j]
    // 2、dp[i][j]初始化：dp[0][j] = 0, dp[i][0] = 0
    let dp = new Array(nums1.length+1)
    let res = -Infinity
    for (let i = 0; i <= nums1.length; i++) {
        dp[i] = new Array(nums2.length+1).fill(0)
    }
    // 3、dp遍历顺序：由上到下, 由左到右
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            // 4、dp递推公式
            if (nums1[i-1] == nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }
            if (dp[i][j] > res) {
                res = dp[i][j]
            }
        }
    }
    return res
};