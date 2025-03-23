# Learn SQL by Building a Student Database: Part 2

## About

- SQL join commands are used to combine information from multiple tables in a relational database
- In this 140-lesson course, you will complete your student database while diving deeper into SQL commands.

### Notes

- `echo "$($PSQL "<query_here>")"`. This will make it so the output isn't all on one line.
- You can use multiple conditions after `WHERE` with `AND` or `OR`, among others. Just add the keyword and another condition.
- You can use `LIKE` to find patterns in text like this: `WHERE <column> LIKE '<pattern>'`. An underscore (`_`) in a pattern will return rows that have any character in that spot. View the rows in this table with a course name that matches the pattern `'_lgorithms'`.
- Another pattern character is `%`. It means anything can be there. To find names that start with `W`, you could use `W%`.
