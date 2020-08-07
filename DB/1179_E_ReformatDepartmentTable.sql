-- 8.4 night
-- https://leetcode.com/problems/reformat-department-table/


--- Connection Timed Out
SELECT
d.id, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Jan') AS Jan_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Feb') AS Feb_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Mar') AS Mar_Revenue,
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Apr') AS Apr_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'May') AS May_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Jun') AS Jun_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Jul') AS Jul_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Aug') AS Aug_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Sep') AS Sep_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Oct') AS Oct_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Nov') AS Nov_Revenue, 
(SELECT tmp.revenue FROM Department AS tmp WHERE tmp.id = d.id AND tmp.month = 'Dec') AS Dec_Revenue
FROM Department AS d
GROUP By d.id;