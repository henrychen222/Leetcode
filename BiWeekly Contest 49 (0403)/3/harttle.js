// 04/03/21 morning

// Accepted --- 268ms
var countNicePairs = function (nums) {
    let counts = new Map()
    let MOD = 1e9 + 7
    let N = nums.length, ans = 0
    for (let i = 0; i < N; i++) {
        let target = nums[i] - rev(nums[i])
        let count = counts.get(target) || 0
        ans += count
        ans %= MOD
        counts.set(target, count + 1)
    }
    return ans

    function rev(num) {
        return Number((num + '').split('').reverse().join(''))
    }
};