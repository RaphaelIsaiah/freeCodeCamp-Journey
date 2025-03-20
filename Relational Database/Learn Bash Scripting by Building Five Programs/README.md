# Learn Bash Scripting by Building Five Programs

## About

- Bash scripts combine terminal commands and logic into programs that can execute or automate tasks, and much more.
- In this 220-lesson course, you will learn more terminal commands and how to use them within Bash scripts by creating five small programs.

- Using `sh` to run your script uses the `shell` interpreter. Run your script again with `bash questionnaire.sh` to use the bash interpreter. bash stands for `bourne-again shell`.
- The output was the same. There are many interpreters which may not give the output you expect. Find out where the `bash` interpreter is located by entering `which bash` in the terminal.
- That's the absolute path to the `bash` interpreter. You can tell your program to use it by placing a `shebang` at the very top of the file like this: `#!<path_to_interpreter>`. Add a `shebang` at the very top of your file, the one you want looks like this: `#!/bin/bash`.
- After running `ls -l`. Next to your file is `-rw-r--r--`. All but the first character (`-`) describe permissions different users have with the file. `r` means `read`, `w` means `write`, `x` means `execute`. I don't see an x anywhere, so nobody can execute it. Enter `chmod +x questionnaire.sh` in the terminal to give everyone executable permissions.
- Bash has variables, functions, and other things you might be familiar with. You can create a variable with `VARIABLE_NAME=VALUE`. There cannot be any spaces around the equal (`=`) sign. If a variable has any spaces in it, place double quotes around it.
- To use a variable, place `$` in front of it like this: `$VARIABLE_NAME`. Shell scripts run from top to bottom, so you can only use variable below where it's created. Use `echo` to print your variable.
- The question was printed. Next, you want to be able to accept input from a user. You can do that with `read` like this: `read VARIABLE_NAME`. This will get user input and store it into a new variable. After you print the question, use `read` to get input and store it in a variable named `NAME`.
- Programs can take arguments. You can access them a few different ways with `$`. Add `echo $*` in your script to print all arguments passed to it.
- `echo $1` to access the first argument.
- Your program is expecting an integer to count down from as its argument. You can compare integers inside the brackets (`[[ ... ]]`) of your `if` with `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less than or equal), `-gt` (greater than), `-ge` (greater than or equal). Change your `if` condition to check if your first argument is less than `5`.
- View the exit status of the last command with `echo $?`.
- You can separate commands on a single line with ;. Enter your last two commands on one line like this: `[[ 4 -ge 5 ]]; echo $?`. It will run the expression, then print the exit status of it since it was the last command.
- You can subtract one from I with double parenthesis `(((...)))` and the -- operator. In your while loop, add `(( I-- ))` after you `echo $I` to subtract one from `I` on each pass.
- A shell comes with environment variables. View them by entering `printenv` in the terminal.
- View all variables in the shell with `declare -p`. `-p` stands for print. This list includes all the environment variables, and any others that may have been created in the current shell.
- The `RANDOM` variable will generate a random number between 0 and 32767. You can use the `modulus` operator to make it in the range you want. In your script, change the NUMBER variable to `$RANDOM%75`.
- Enter `help let` in the terminal to see the operators you can use with the double parenthesis.
- `(( ... ))` will perform a calculation or operation and output nothing. `$(( ... ))` will replace the calculation with the result of it.
