# Learn Relational Databases by Building a Mario Database

## About

- A relational database organizes data into tables that are linked together through relationships.
- In this 165-lesson course, you will learn the basics of a relational database by creating a PostgreSQL database filled with video game characters.

### Notes

Let’s dive into it! The commands `\d`, `\dl`, and `\c` are **meta-commands** in PostgreSQL's `psql` terminal. Here's what they mean:

### **What They Stand For**

1. **`\d`**:

   - Stands for **describe**.
   - Displays information about database objects.
   - Usage:
     - `\d` lists all tables, views, and sequences in the current database.
     - `\d table_name` shows details about a specific table, such as its columns, data types, and constraints.

2. **`\dl`**:

   - Stands for **describe large objects**.
   - Lists large objects (LOBs), which are used for storing binary data like images or files.

3. **`\c`**:

   - Stands for **connect**.
   - Switches to another database without leaving the `psql` session.
   - Example:

     ```sql
     \c my_database
     ```

     This connects you to `my_database`.

---

### **Other Useful Meta-Commands**

Here are more commands you might find handy in `psql`:

| **Command** | **What It Does**                                                               |
| ----------- | ------------------------------------------------------------------------------ |
| `\l`        | Lists all databases.                                                           |
| `\dt`       | Lists all tables in the current database.                                      |
| `\dv`       | Lists all views in the current database.                                       |
| `\di`       | Lists all indexes in the current database.                                     |
| `\du`       | Lists all roles (users) in the database.                                       |
| `\dn`       | Lists all schemas in the database.                                             |
| `\df`       | Lists all functions in the current database.                                   |
| `\pset`     | Sets display options for query output (e.g., borders, expanded view).          |
| `\q`        | Exits the `psql` shell.                                                        |
| `\?`        | Shows a list of all available meta-commands.                                   |
| `\h`        | Shows help for SQL commands. For example, `\h CREATE TABLE`.                   |
| `\x`        | Toggles expanded display for query results (makes wide tables easier to read). |

---

### **Combining SQL and Meta-Commands**

You can mix SQL queries with meta-commands for streamlined workflows. For instance:

```sql
\c my_database
SELECT * FROM my_table;
\dt
```

These commands help you explore, manage, and interact with your database efficiently. If you'd like a deeper dive into any of them, just let me know! 🚀

- To know what row is for a character, you need to set a foreign key so you can relate rows from this table to rows from your characters table.

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);
```

- "Many-to-many" relationships usually use a junction table to link two tables together, forming two "one-to-many" relationships.
- You can set an existing column as a foreign key like this:

```sql
ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
```

- Every table should have a primary key.
- You can create a primary key from two columns, known as a composite primary key. Here's an example:

```sql
ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);
ALTER TABLE character_actions ADD PRIMARY KEY(character_id, action_id);
-- This table will have multiple rows with the same character_id, and multiple rows the same action_id. So neither of them are unique. But you will never have the same character_id and action_id in a single row. So the two columns together can be used to uniquely identify each row. View the details of the character_actions table to see your composite key.
```

- you can get all the data from both tables with a `JOIN` command:

```sql
SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;
```

- Here's an example that joins three tables:

```sql
SELECT columns FROM junction_table
FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column
FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;
```
