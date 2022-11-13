// 11.21 evening

const waysToMakeFair = (nums) => {
    let cnt = 0;
    let n = nums.length;
    let pre = new Array(n).fill(0); // pre odd and pre even
    for (let i = 0; i < n; i++) {
        let tmp = i % 2 == 0 ? nums[i] : -nums[i];
        pre[i + 1] = pre[i] + tmp;
    }
    // console.log(pre);
    for (let i = 0; i < n; i++) {
        // console.log(pre[i], pre[n] - pre[i + 1])
        if (pre[i] == pre[n] - pre[i + 1]) cnt++;
    }
    return cnt;
};

const main = () => {
    let nums = [2, 1, 6, 4];
    let nums2 = [1, 1, 1];
    let nums3 = [1, 2, 3];
    console.log(waysToMakeFair(nums));
    console.log(waysToMakeFair(nums2));
    console.log(waysToMakeFair(nums3));
};

main()

