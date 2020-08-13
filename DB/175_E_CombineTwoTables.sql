-- 8.7 night
-- https://leetcode.com/problems/combine-two-tables/



--- {"headers": {"Person": ["PersonId", "LastName", "FirstName"], "Address": ["AddressId", "PersonId", "City", "State"]}, "rows": {"Person": [[1, "Wang", "Allen"]], "Address": [[1, 2, "New York City", "New York"]]}}
--- {"headers": {"Person": ["PersonId", "LastName", "FirstName"], "Address": ["AddressId", "PersonId", "City", "State"]}, "rows": {"Person": [[1, "Wang", "Allen"]], "Address": []}}


--- 3/7 test cases
SELECT p.FirstName, p.LastName, NULL as City, NULL as State FROM Person AS p
INNER JOIN Address AS a
ON p.PersonId = a.AddressId;


--- 4/7 test cases
SELECT p.FirstName, p.LastName, NULL as City, NULL as State FROM Person AS p
LEFT JOIN Address AS a
ON p.PersonId = a.AddressId;


--- reference: https://leetcode.com/problems/combine-two-tables/discuss/773938/SIMPLE-SOLUTION
--- Accepted --- 355ms 0B 81.25%
SELECT p.FirstName, p.LastName, a.City, a.State FROM Person AS p
LEFT OUTER JOIN Address AS a
ON p.PersonId = a.PersonId;

--- Accepted --- 352ms 0B 83.91%
SELECT p.FirstName, p.LastName, a.City, a.State FROM Person AS p
LEFT JOIN Address AS a
ON p.PersonId = a.PersonId;