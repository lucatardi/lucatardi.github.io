---
sidebar_position: 4
---

# Strings 🔤

In Python, a string is a sequence of characters, and it is used to represent text. Strings are one of the fundamental data types in Python and are typically enclosed in either single quotes (`' '`), double quotes (`" "`), or triple quotes for multiline strings (`'''`, `' ' '`, or `""" """`).

Here are some key points about strings in Python:

## String Immutability 
Strings in Python are immutable, which means we can not change the characters in an existing string.
In the following code we are trying to change the initial "G" with a "g".
This code will throw an error as we are trying to modify an immutable string.

```python
full_name = "Gioachino the penguin"
full_name[0] = "g"
```

## String Methods 
Python provides numerous built-in methods to manipulate and work with strings.
Let's see some examples of the most commun ones:
len(), upper(), lower(), strip(), split()
- `len()` returns the length of the string. 
  eg. `len(full_mane)` Will return `21`.
- `upper()` returns a new string with all the characters uppercased. 
  eg. `upper(full_mane)` will return `"GIOACHINO THE PENGUIN"`.
- `lower()` returns a new string with all the characters lowercased. 
  eg. `lower(full_mane)` will return `"gioachino the penguin"`.
- `strip()` returns a new string with the leading and trailing whitespace removed. 
  eg `strip("   Gioachino the penguin  ")` will return `"Gioachino the penguin"`.
- `split()` returns a list of characters. 
  eg. `split("Gioachino")` will return `["G","i","o","a","c","h","i","n","o"]`


:::tip
To get a full list of the method available you can print `Dir[favorite_animal]`.
:::

## String Concatenation
We can concatenate strings using the `+` operator:

```python
first_name = "Gioachino"
last_name = "the penguin"
full_name = first_name + " " + last_name
# full_mane will be "Gioachino the penguin"
```

## String Indexing and Slicing
We can access individual characters within a string using indexing and extract substrings using slicing:

```python
full_name[0]  # Returns the character "A"
full_name[10:13]  # Returns "the"
full_name[10:]  # Returns "the penguin"
full_name[:9]  # Returns "Gioachino"
```

## String Formatting 
Python provides us various ways to format strings, including f-strings (introduced in Python 3.6), the `str.format()` method, and the `%` operator.

```python
name = "Alice"
age = 30
formatted_string = f"My name is {name} and I am {age} years old."
```

## Escape Sequences 
You can use escape sequences to include special characters within a string, like `\n` for a newline or `\"` to include a double quote within a double-quoted string.

```python
escaped_string = "This is a \"quoted\" word."
```

## Raw Strings 
Prefixing a string with 'r' or 'R' makes it a raw string, which treats backslashes as literal characters.

   ```python
   raw_string = r"This is a \n raw string."
   ```

Strings are incredibly versatile in Python and are used for a wide range of tasks, from simple text manipulation to more complex data processing and manipulation.

