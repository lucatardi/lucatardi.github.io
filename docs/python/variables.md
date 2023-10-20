---
sidebar_position: 3
---

# Variables 📥

In Python, variables are used to store data values. 
Variables allow you to give a name to a location of the momory where a value is stored.
Here's how you declare and use variables in Python:

## Naming Convention
There are a few rules we need to consider while defining a variable:
  - Variable names must start with a letter (a-z, A-Z) or an underscore (_).
  - The rest of the variable name can contain letters, numbers (0-9), and underscores.
  - Variable names are case-sensitive (e.g., "myVar" and "myvar" are treated as different variables).
  - Python has reserved words, known as keywords, that cannot be used as variable names (e.g., `if`, `for`, `while`, `print`, etc.).

## Variable Assignment
We can assign a value to a variable using the `=` operator.
```python
penguin_name = 'Gioachino'
```
Python as other programming languages is allowing reassignment.
You can overrides the value of a variable by using the same `=` operator:
```python
penguin_name = 'gioachino'
penguin_name = 'Gioachino'
```

## Data Types
Python is dynamically typed, meaning that we don't need to specify the data type of a variable explicitly. Python will determine the data type automatically based on the assigned value. Common data types in Python include:
- `int` (integer): Whole numbers, e.g., `42`.
- `float` (floating-point): Numbers with decimal points, e.g., `3.14`.
- `str` (string): Text, enclosed in single or double quotes, e.g., `'Hello'` or `"World"`.
- `bool` (boolean): Represents `True` or `False` values.
- And more complex data types like lists, dictionaries, and objects that we will see later in details.

## Type Conversion
Python offers us functions to move around types, we can infact convert types using functions like: `int()`, `float()`, and `str()`.

By using the `str()` we can for instance convert the integer value `25` to the string `'25'`:

```python
age = 25
age_str = str(age)
```

