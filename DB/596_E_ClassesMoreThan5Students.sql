-- 8.24 evening
-- https://leetcode.com/problems/classes-more-than-5-students/

--- Accepted 329ms 55.21%
SELECT c.class FROM (SELECT DISTINCT * FROM courses) AS c
GROUP BY c.class
HAVING COUNT(*) >= 5;

--- {"headers": {"courses": ["student", "class"]}, "rows": {"courses": [["A", "Math"], ["B", "English"], ["C", "Math"], ["D", "Biology"], ["E", "Math"], ["F", "Computer"], ["G", "Math"], ["H", "Math"], ["I", "Math"]]}}
--- debug1 {"headers": {"courses": ["student", "class"]}, "rows": {"courses": [["A", "Math"], ["B", "English"], ["C", "Math"], ["D", "Biology"], ["E", "Math"], ["F", "Math"], ["G", "Math"]]}}
--- debug2 {"headers": {"courses": ["student", "class"]}, "rows": {"courses": [["A", "Math"], ["B", "English"], ["C", "Math"], ["D", "Biology"], ["E", "Math"], ["F", "Math"], ["A", "Math"]]}}
