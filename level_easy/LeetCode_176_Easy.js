# Write your MySQL query statement below

## Sorting the entire data (MySQL may optimize to take only the top 2 items in sorting) and picking up the 2nd item from the top.
select (
    select distinct Salary from Employee order by Salary desc limit 1 offset 1) as SecondHighestSalary
    
    
select IFNULL(
    (select distinct Salary from Employee order by Salary desc limit 1 offset 1), null) as SecondHighestSalary
