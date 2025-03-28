# Learn Advanced Bash by Building a Kitty Ipsum Translator

## About

- There's more to Bash commands than you might think.

- In this 140-lesson course, you will learn some more complex commands, and the details of how commands work.

## Notes

- You can redirect an output to a file example `<command> > <filename>` `echo hello bash > stdout.txt`
- A single `>` will create or overwrite the file while `>>` will append to the file.
- Entering `> stdout.txt` will redirect nothing to the file, thereby emptying it.
- There's two types of output, `stdout` (standard out) for when a command is successful, and `stderr` (standard error) for when it's not. Both of these will print to the terminal by default. bad_command was not a valid command so it printed to `stderr`. You can redirect `stderr` with `2>`.
- Similarly, you can use `1>` to redirect stdout.
- `stdout` and `stderr` are for output. `stdin` (standard in) is the third thing commands can use and it is for getting input.
- Just like you can redirect output, you can redirect `stdin` as well.
  Example:`<command> < <filename_for_stdin>`
- Another way to set the `stdin` is by using the pipe (`|`). It will use the output from one command as input for another. Example: `<command_1> | <command_2>`, this will take the `stdout` from `command_1` and use it as the `stdin` for `<command_2>`
- `cat` is another command that takes input. It will print the contents of a file or input to `stdout`. `cat` can take a filename as an argument.
