# Learn SQL by Building a Student Database: Part 1

## About

- SQL, or Structured Query Language, is the language for communicating with a relational database.

- In this 140-lesson course, you will create a Bash script that uses SQL to enter information about your computer science students into PostgreSQL.

### Notes

- There's a default IFS variable in bash. `IFS` stands for "Internal Field Separator". View it with `declare -p IFS`.
- This variable is used to determine word boundaries. It defaults to spaces, tabs, and new lines. This is why the `MAJOR` variable was set to only the first word on each line from the data. Between the `while` and `read` commands, set the `IFS` to a comma like this: `IFS=","`
- It helps to plan out what you want to happen. For each loop, you will want to add the major to the database if it isn't in there yet. Same for the course. Then add a row to the `majors_courses` table. Add these single line comments in your loop in this order: `get major_id`, `if not found`, `insert major`, `get new major_id`, `get course_id`, `if not found`, `insert course`, `get new course_id`, `insert into majors_courses`.
- You used the `psql` command to log in and interact with the database. You can use it to just run a single command and exit. Above your loop, add a `PSQL` variable that looks like this: `PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"`. This will allow you to query your database from your script. The important parts are the `username`, `dbname`, and the `-c` flag that is for running a single command and exiting. The rest of the flags are for formatting.
- Now, you can query your database using the `PSQL` variable like this: `$($PSQL "<query_here>")`. The code in the parenthesis will run in a subshell, which is a separate bash process.
- You can use TRUNCATE to delete all data from a table.
- The database is finished for now. The last thing you are going to do is make a "dump" of it. The pg_dump command can do that for you. Use the --help flag with the command to see what it can do.
- pg_dump --clean --create --inserts --username=postgres students > students.sql
