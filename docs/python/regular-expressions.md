---
sidebar_position: 8
---

# Regular expressions

Regular expressions, often referred to as "regex" are powerful tools for pattern matching and text manipulation. In Python, we can work with regular expressions using the `re` module, which is part of the Python standard library.

Here's an overview of how to use regular expressions in Python:

## Import the `re` module

You need to import the `re` module to work with regular expressions.

```python
import re
```

## Creating a Regular Expression Pattern

Regular expressions are defined as patterns of characters that help us match and manipulate text. For example, to create a regular expression pattern that matches any sequence of digits (e.g., a phone number), we would use the pattern `\d+`, where:
- `\d` matches any digit (0-9).
- `+` matches one or more of the preceding element (in this case, one or more digits).

## Using `re` Functions

The `re` module provides various functions for working with regular expressions. Some common functions include:

- `re.match()`: Determines if the regular expression matches at the beginning of the string.
- `re.search()`: Searches for a match anywhere in the string.
- `re.findall()`: Returns all non-overlapping matches in the string.
- `re.finditer()`: Returns an iterator yielding match objects for all matches.
- `re.sub()`: Replaces one or more matches with a specified string.

Example of using `re.search()`:

```python
text = "The phone number is 123-456-7890."
pattern = r'\d{3}-\d{3}-\d{4}'  # Match a phone number pattern
match = re.search(pattern, text)

if match:
   print("Phone number found:", match.group())
else:
   print("Phone number not found.")
```

## Regular Expression Flags

We can use flags as optional arguments to modify the behavior of regular expressions. Common flags include `re.IGNORECASE` (for case-insensitive matching) and `re.MULTILINE` (for matching across multiple lines).

Example with the `re.IGNORECASE` flag:

```python
text = "The Quick Brown Fox"
pattern = r'quick'
match = re.search(pattern, text, re.IGNORECASE)

if match:
   print("Match found:", match.group())
else:
   print("Match not found.")
```

Regular expressions can be quite complex and powerful, and there are many different patterns and features you can use. If we want to learn more, we can refer to the Python documentation for the `re` module or explore online resources and tutorials to dive deeper into regular expressions in Python.