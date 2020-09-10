/**
 * 9.9 afternoon
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 */

// Accepted --- 3180ms 26.62%
function KthLargest(k, nums) {
    this.stream = nums;
    this.k = k;
};

KthLargest.prototype.add = function (val) {
    this.stream.push(val)
    return this.stream.sort((a, b) => b - a)[this.k - 1];
};

const main = () => {
    let k = 3;
    let arr = [4, 5, 8, 2];
    let kthLargest = new KthLargest(k, arr);
    console.log(kthLargest.add(3)); // 4
    console.log(kthLargest.add(5)); // 5
    console.log(kthLargest.add(10)); // 5
    console.log(kthLargest.add(9)); // 8
    console.log(kthLargest.add(4)); // 8
}

main()