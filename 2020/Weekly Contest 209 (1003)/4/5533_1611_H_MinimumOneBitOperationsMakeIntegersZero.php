<?php

/**
 * 10.3 evening
 * https://leetcode.com/contest/weekly-contest-209/problems/minimum-one-bit-operations-to-make-integers-zero/
 * 
 * log()
 * https://www.w3schools.com/php/func_math_log.asp
 * https://www.php.net/manual/en/function.log.php
 */
class Solution
{

    /**
     * @param Integer $n
     * @return Integer
     */

    // Accepted
    function minimumOneBitOperations($value)
    {
        $dec = 0;
        $bits = floor(log($value, 2));
        echo $bits. "\n";
        for ($i = $bits; $i >= 0; $i--) {
            $dec = $dec | (((($dec >> ($i + 1)) ^ ($value >> $i)) & 1) << $i);
        }
        return $dec;
    }
}

$sl = new Solution;
$n = 0;
$n2 = 3;
$n3 = 6;
$n4 = 9;
$n5 = 333;
echo $sl->minimumOneBitOperations($n) . "\n";
echo $sl->minimumOneBitOperations($n2) . "\n";
echo $sl->minimumOneBitOperations($n3) . "\n";
echo $sl->minimumOneBitOperations($n4) . "\n";
echo $sl->minimumOneBitOperations($n5) . "\n";
