var merge = function(nums1, m, nums2, n) {
    // for (let i = 0; i <= nums1.length; i++) {
    //     if (nums1[i] == 0) {
    //         // nums1.pop()
    //         nums1.splice(i, 1);
    //     }
    // }
    
    nums1 = nums1.filter(function(val) {
        return val !== 0;
    });
    // nums1.concat(nums2);
    Array.prototype.push.apply(nums1, nums2);
    nums1.sort();
    return nums1
};

list1 = [1, 2, 3, 0, 0, 0]
list2 = [2, 5, 6]
console.log(merge(list1, list1.length, list2, list2.length));