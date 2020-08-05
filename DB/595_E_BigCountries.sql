-- 8.4 evening
-- https://leetcode.com/problems/big-countries/

--- Accepted --- 367ms 0B 33.54%
SELECT w.name, w.population, w.area FROM World AS w
WHERE (w.area > 3000000 OR w.population > 25000000);