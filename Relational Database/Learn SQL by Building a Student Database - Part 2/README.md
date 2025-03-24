# Learn SQL by Building a Student Database: Part 2

## About

- SQL join commands are used to combine information from multiple tables in a relational database
- In this 140-lesson course, you will complete your student database while diving deeper into SQL commands.

### Notes

- `echo "$($PSQL "<query_here>")"`. This will make it so the output isn't all on one line.
- You can use multiple conditions after `WHERE` with `AND` or `OR`, among others. Just add the keyword and another condition.
- You can use `LIKE` to find patterns in text like this: `WHERE <column> LIKE '<pattern>'`. An underscore (`_`) in a pattern will return rows that have any character in that spot. View the rows in this table with a course name that matches the pattern `'_lgorithms'`.
- Another pattern character is `%`. It means anything can be there. To find names that start with `W`, you could use `W%`.
- `ILIKE` will ignore the case of the letters when matching
- You can put `NOT` in front of `ILIKE` as well. Use it to see the courses that don't contain an `A` or `a`.
- `ILIKE` helps in viewing letters irrespective of their cases.
- You can use `IS NULL` to view rows that are null. Inversely, you can use `IS NOT NULL` to see rows that aren't null.
- You can specify the order you want your results to be in by adding `ORDER BY <column_name>` at the end of a query.
- When using the `ORDER BY`, the default state is in `ASC` (ascending order), you can change to descending order by adding `DESC` at the end of the query.
- You can add more columns to the order by separating them with a comma like this: `ORDER BY <column_1>, <column_2>`. Any matching values in the first ordered column will then be ordered by the next.
- Many times, you only want to return a certain number of rows. You can add `LIMIT <number>` at the end of the query to only get the amount you want.
- The order of the keywords in your query matters. You cannot put `LIMIT` before `ORDER BY`, or either of them before `WHERE`.
- There's a number of mathematic functions to use with numerical columns. One of them is `MIN`, you can use it when selecting a column like this: `SELECT MIN(<column>) FROM <table>`. It will find the lowest value in the column. Same protocol for `MAX` `AVG` `SUM`.
- You can round decimals up or down to the nearest whole number with `CEIL` and `FLOOR`, respectively. Use `CEIL` to round the average `major_id` up to the nearest whole number. Here's an example: `CEIL(<number_to_round>)`. Or, you can round a number to the nearest whole number with `ROUND`. You can round to a specific number of decimal places by adding a comma and number to `ROUND`, like this: `ROUND(<number_to_round>, <decimals_places>)`.
- Another function is `COUNT`. You can use it like this: `COUNT(<column>)`. It will tell you how many entries are in a table for the column. Try it out in the psql prompt by using `COUNT(*)` to see how many majors there are.
- `DISTINCT` is a function that will show you only unique values. You can use it like this: `DISTINCT(<column>)`. You can get the same results with `GROUP BY`. Here's an example of how to use it: `SELECT <column> FROM <table> GROUP BY <column>`.
- The output was the same as `DISTINCT`, but with `GROUP BY` you can add any of the aggregate functions (`MIN`, `MAX`, `COUNT`, etc) to it to find more information. For instance, if you wanted to see how many students were in each major you could use `SELECT COUNT(*) FROM students GROUP BY major_id`.
- When using `GROUP BY`, any columns in the `SELECT` area must be included in the `GROUP BY` area. Other columns must be used with any of the aggregate functions (`MAX`, `AVG`, `COUNT`, etc).
- Another option with `GROUP BY` is `HAVING`. You can add it at the end like this: `SELECT <column> FROM <table> GROUP BY <column> HAVING <condition>`. The condition must be an aggregate function with a test. An example to might be to use `HAVING COUNT(*) > 0` to only show what whatever column is grouped that have at least one row.
- You can rename a column with `AS` like this: `SELECT <column> AS <new_column_name>`.
