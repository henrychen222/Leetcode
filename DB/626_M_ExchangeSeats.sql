-- 04/28/21 evening
-- https://leetcode.com/problems/exchange-seats/


--- 513ms 6.29%

---- reference: https://leetcode.com/problems/exchange-seats/discuss/104707/Using-two-UNION-operators
--- get all the even numbered rows as odd numbered rows
    (SELECT s1.id - 1 as id, s1.student
    FROM Seat s1
    WHERE s1.id % 2 = 0)

UNION

    --- get all the odd numbered rows as even numbered rows
    (SELECT s2.id + 1 as id, s2.student
    FROM Seat s2
    WHERE s2.id % 2 = 1 AND s2.id != (SELECT MAX(id)
        FROM Seat))

UNION

    --- get the last row if odd and don't change the id value
    (SELECT s3.id, s3.student
    FROM Seat s3
    WHERE s3.id % 2 = 1 AND s3.id = (SELECT MAX(id)
        FROM Seat))

ORDER BY id ASC;


---- 238ms 76.68%
---- reference: https://leetcode.com/problems/exchange-seats/discuss/249725/Clean-163ms-solution-'case'-%2B-'order-by'
SELECT
    CASE 
        WHEN id % 2 = 0 THEN id - 1
        WHEN id % 2 = 1 AND id < (SELECT COUNT(*)
        FROM seat) THEN id + 1
        ELSE id
    END AS id, student
FROM seat
ORDER BY id;


--- ///////////////////////////////////////////////////////////////
-- (SELECT * FROM seat WHERE seat.id % 2 = 1)
-- UNION
-- (SELECT * FROM seat WHERE seat.id % 2 = 0)

-- UPDATE seat
-- SET seat.student = seat.student
-- WHERE seat.id = seat.id + 1;