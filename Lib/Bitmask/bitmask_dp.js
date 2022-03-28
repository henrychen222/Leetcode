/*
Created 08/29/21 night

Read:
https: //stackoverflow.com/questions/31575691/what-is-a-bitmask-and-a-mask
https: //www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/
https: //dev.to/somedood/bitmasks-a-very-esoteric-and-impractical-way-of-managing-booleans-1hlf

Example questions:
https://leetcode.com/problems/increasing-subsequences/discuss/1434010/javascript-bitmask-brute-force-375ms
https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/discuss/1432132/javascript-bitmask-dp-144ms


set jth bit to 1 / set, and sum(|) it       mask |= (1 << j)
    set jth bit to 0 / unset                    mask = mask & ~(1 << j)

    check if ith bit is set to 1 / get a bit (three ways)
        mask & (1 << j)
        1 & (mask >> j)     (from Heltion)
        mask << ~j < 0       (from uwi)

       Toggle bit 
            mask ^ (1 << j)

*/

// Code Template:
for (let i = 0; i < 1 << n; i++) { //  i: mask
    for (let j = 0; j < n; j++) {
        if (i & (1 << j)) {}
        // if (1 & (i >> j)) {}
        // if (i << ~j < 0) {}
    }
}