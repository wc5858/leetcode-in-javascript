/* # Write your MySQL query statement below
SELECT DISTINCT
    l1.Num AS ConsecutiveNums
FROM
    Logs l1,
    Logs l2,
    Logs l3
WHERE
    l1.Id = l2.Id - 1
    AND l2.Id = l3.Id - 1
    AND l1.Num = l2.Num
    AND l2.Num = l3.Num
; */

# Write your MySQL query statement below
SELECT
  distinct (num) as ConsecutiveNums
FROM
(SELECT
  id, num,
  @prev := @curr,
  @curr := num,
  @rep_cnt := IF(@prev = @curr, @rep_cnt+1, 1) as rep_cnt
FROM
 logs,
 (SELECT @prev := null, @curr := null, @rep_cnt :=1) ib
) rep_cnt_tbl
WHERE
  rep_cnt >2
;