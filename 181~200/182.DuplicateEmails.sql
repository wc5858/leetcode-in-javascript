# Write your MySQL query statement below
select distinct P1.Email   
from Person P1,Person P2
where P1.Email = P2.Email and P1.Id <> P2.Id