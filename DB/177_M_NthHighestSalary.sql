-- 04/30/21 evening
-- https://leetcode.com/problems/nth-highest-salary/

--- read: https://www.geeksforgeeks.org/find-nth-highest-salary-table/


--- reference: https://leetcode.com/problems/nth-highest-salary/discuss/53041/Accpted-Solution-for-the-Nth-Highest-Salary
--- https://leetcode.com/problems/nth-highest-salary/discuss/53071/My-accepted-simply-solution.Any-advising
--- Accepted --- 339ms 42.45%
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
DECLARE M INT;
SET M = N-1;
  RETURN (
      # Write your MySQL query statement below.
      SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT M, 1
  );
END