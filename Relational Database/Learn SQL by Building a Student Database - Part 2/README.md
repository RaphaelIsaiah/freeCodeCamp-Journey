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
