var removeDuplicates = function(nums) {
    dupCount = 0;
    for (let i = 0; i < nums.length-1; i++) {
        // for (let j = i+1; j < nums.length; j++) {
        //     if (nums[i] == nums[j]) {
        //         dupCount++;
        //         nums.splice(nums[i], 1);
        //     }
        // }
        if (nums[i] == nums[i+1]) {
            dupCount++
            //nums.splice(nums[i], 1);
            nums.push(nums[i]);
        }
    }
    return nums
};


array1 = [1, 1, 2];
array2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(array1));
console.log(removeDuplicates(array2));

