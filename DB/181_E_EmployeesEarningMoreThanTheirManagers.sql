-- 10.28 afternoon
-- https://leetcode.com/problems/employees-earning-more-than-their-managers/


--- Accepted --- 1236ms 5.08%
SELECT e.Name as Employee
FROM Employee as e
WHERE e.Salary > (SELECT m.Salary
FROM Employee as m
WHERE m.Id = e.ManagerId);


--- Accepted --- 1167ms 5.08%
SELECT e.Name as Employee
FROM Employee as e
WHERE e.ManagerId IS NOT NULL AND e.Salary > (SELECT m.Salary
    FROM Employee as m
    WHERE m.Id = e.ManagerId);


--- Accepted --- 850ms 5.79%
SELECT e.Name as Employee
FROM Employee as e
WHERE e.ManagerId IS NOT NULL AND e.Salary > (SELECT m.Salary
    FROM Employee as m
    WHERE e.ManagerId IS NOT NULL AND m.Id = e.ManagerId);
