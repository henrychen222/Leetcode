-- 8.4 night  10.28 complete
-- https://leetcode.com/problems/reformat-department-table/


--- Accepted --- 411ms 94.48%
--- reference: https://leetcode.com/problems/reformat-department-table/discuss/376241/MySQL-Solution-with-381-ms-faster-than-100.00
SELECT
d.id,
SUM( IF ( d.month = 'Jan', d.revenue, NULL )) AS Jan_Revenue, 
SUM( IF ( d.month = 'Feb', d.revenue, NULL )) AS Feb_Revenue, 
SUM( IF ( d.month = 'Mar', d.revenue, NULL )) AS Mar_Revenue,
SUM( IF ( d.month = 'Apr', d.revenue, NULL )) AS Apr_Revenue,
SUM( IF ( d.month = 'May', d.revenue, NULL )) AS May_Revenue,
SUM( IF ( d.month = 'Jun', d.revenue, NULL )) AS Jun_Revenue,
SUM( IF ( d.month = 'Jul', d.revenue, NULL )) AS Jul_Revenue,
SUM( IF ( d.month = 'Aug', d.revenue, NULL )) AS Aug_Revenue,
SUM( IF ( d.month = 'Sep', d.revenue, NULL )) AS Sep_Revenue,
SUM( IF ( d.month = 'Oct', d.revenue, NULL )) AS Oct_Revenue,
SUM( IF ( d.month = 'Nov', d.revenue, NULL )) AS Nov_Revenue,
SUM( IF ( d.month = 'Dec', d.revenue, NULL )) AS Dec_Revenue
FROM Department AS d
GROUP BY d.id;


--- Accepted --- 556ms 29.77%
--- reference: https://leetcode.com/problems/reformat-department-table/discuss/376357/MySQLPostgreSQL-solutions
SELECT
d.id, 
SUM( CASE WHEN d.month = 'Jan' THEN d.revenue ELSE NULL END) AS Jan_Revenue, 
SUM( CASE WHEN d.month = 'Feb' THEN d.revenue ELSE NULL END) AS Feb_Revenue, 
SUM( CASE WHEN d.month = 'Mar' THEN d.revenue ELSE NULL END) AS Mar_Revenue,
SUM( CASE WHEN d.month = 'Apr' THEN d.revenue ELSE NULL END) AS Apr_Revenue,
SUM( CASE WHEN d.month = 'May' THEN d.revenue ELSE NULL END) AS May_Revenue,
SUM( CASE WHEN d.month = 'Jun' THEN d.revenue ELSE NULL END) AS Jun_Revenue,
SUM( CASE WHEN d.month = 'Jul' THEN d.revenue ELSE NULL END) AS Jul_Revenue,
SUM( CASE WHEN d.month = 'Aug' THEN d.revenue ELSE NULL END) AS Aug_Revenue,
SUM( CASE WHEN d.month = 'Sep' THEN d.revenue ELSE NULL END) AS Sep_Revenue,
SUM( CASE WHEN d.month = 'Oct' THEN d.revenue ELSE NULL END) AS Oct_Revenue,
SUM( CASE WHEN d.month = 'Nov' THEN d.revenue ELSE NULL END) AS Nov_Revenue,
SUM( CASE WHEN d.month = 'Dec' THEN d.revenue ELSE NULL END) AS Dec_Revenue
FROM Department AS d
GROUP BY d.id


--- Connection Timed Out
-- SELECT
-- d.id, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Jan') AS Jan_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Feb') AS Feb_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Mar') AS Mar_Revenue,
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Apr') AS Apr_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'May') AS May_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Jun') AS Jun_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Jul') AS Jul_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Aug') AS Aug_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Sep') AS Sep_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Oct') AS Oct_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Nov') AS Nov_Revenue, 
-- (SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Dec') AS Dec_Revenue
-- FROM Department AS d
-- GROUP By d.id;