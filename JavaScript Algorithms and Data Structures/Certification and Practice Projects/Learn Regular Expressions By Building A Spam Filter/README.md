Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are powerful, but can be difficult to understand because they use so many special characters.

# Notes

- In this spam filter project, you'll learn about capture groups, positive lookaheads, negative lookaheads, and other techniques to match any text you want.

* Instead of using the .match() method, you can use the .test() method of a regular expression to test if a string matches the pattern. Unlike .match(), .test() returns a boolean value indicating whether or not the string matches the pattern.
* The alternate sequence | can be used to match either the text on the left or the text on the right of the |. For example, the regular expression /yes|no/ will match either yes or no
* Remember that arrays have a .some() method. Use the .some() method to check if testing your msg on any of your denyList regular expressions returns true.
* A character class is defined by square brackets, and matches any character within the brackets. For example, [aeiou] matches any character in the list aeiou. You can also define a range of characters to match using a hyphen. For example, [a-z] matches any character from a to z
* The dollar value may be more than one digit. To match this, the + quantifier can be used - this matches one or more consecutive occurrences. For example, the regular expression /a+/ matches one or more consecutive a characters.
* A capture group is a way to define a part of the expression that should be captured and saved for later reference. You can define a capture group by wrapping a part of your expression in parentheses. For example, /h(i|ey) camper/ would match either hi camper or hey camper, and would capture i or ey in a group.
* Now that you have your capture group, you can mark the entire pattern as an optional match. The ? quantifier matches zero or one occurrence of the preceding character or group. For example, the regular expression /colou?r/ matches both color and colour, because the u is optional.
* You don't actually need the match value from your capture group, so you can turn it into a non-capturing group. This will allow you to group the characters together without preserving the result.
* To create a non-capturing group in a regular expression, you can add ?: after the opening parenthesis of a group. For instance, (?:a|b) will match either a or b, but it will not capture the result.
* start by checking for spaces before and after your pattern. You can do this by using the meta character \s, which will match spaces, tabs, and line breaks.
* Like the ^ anchor, you can use the $ anchor to match the end of the string.