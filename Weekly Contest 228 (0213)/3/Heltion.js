// 2.13 night

// Accepted --- 204ms same to cuiaoxiang
const minimumSize = (a, mo) => {
    let low = 1;
    let high = 1e9;
    while (low < high) {
        let mid = low + high >> 1;
        let cnt = 0;
        for (const x of a) {
            cnt += parseInt((x + mid - 1) / mid) - 1;
        }
        cnt > mo ? low = mid + 1 : high = mid;
        // console.log(low, high);
    }
    return low; // finally the low and high is equal
};

const main = () => {
    let nums = [9], maxOperations = 2;
    let nums2 = [2, 4, 8, 2], maxOperations2 = 4;
    let nums3 = [7, 17], maxOperations3 = 2;
    console.log(minimumSize(nums, maxOperations));
    console.log(minimumSize(nums2, maxOperations2));
    console.log(minimumSize(nums3, maxOperations3));
};

main()