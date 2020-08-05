-- 8.4 evening
-- https://leetcode.com/problems/swap-salary/

--- Accepted --- 314ms 0B 47.93%
--- Reference: https://dba.stackexchange.com/questions/125171/switching-values-in-a-column-with-one-update-statement
UPDATE salary
SET sex = CASE WHEN sex = 'f' THEN 'm' 
               WHEN sex = 'm' THEN 'f'
               ELSE sex END

--- Accepted --- 241ms 0B 74.56%
UPDATE salary
SET sex = CASE WHEN sex = 'f' THEN 'm' 
               ELSE 'f' END