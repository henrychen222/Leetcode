-- 8.4 night
-- https://leetcode.com/problems/not-boring-movies/


--- Accepted --- 360ms 0B 33.01%
SELECT * FROM cinema AS c 
WHERE (c.id % 2 = 1) AND c.description NOT LIKE 'boring%'
ORDER BY c.rating DESC;

--- Accepted --- 203ms 0B 84.14%
SELECT * FROM cinema AS c 
WHERE (c.id % 2 = 1) AND c.description != 'boring'
ORDER BY c.rating DESC;