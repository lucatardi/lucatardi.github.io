---
sidebar_position: 5
---

# Lists 〖🐧〗

In Python, a list is a versatile and commonly used data structure that allows us to store a collection of items. Lists are ordered, mutable (changeable), and can contain elements of different data types.
Here are some key characteristics and operations associated with lists in Python:

## List Creation
We can create a list by enclosing a comma-separated sequence of elements within square brackets `[]`. For example:

```python
penguin_species = ["Emperor", "Gentoo", "Adélie", "Chinstrap", "King"]
```

The just created `penguin_species` list contains five strings but a list can have elements of any types.
A list can contain elements of different types at the same time:

```python
a_mix_of_things = [1, "Emperor", 3.16, True]
```

The `a_mix_of_things` list contains at the same time an integer, a string, a floating number and a boolean.

## Accessing List Elements
List elements are accessed by their index, starting from 0 for the first element. We can also use negative indices to access elements from the end of the list:

```python
first_specie = penguin_species[0]
last_specie = penguin_species[-1]
```

## List Slicing
We can extract a sublist from a list using slicing. Slicing allows you to specify a range of indices to create a new list containing the selected elements. For example:

```python
penguin_species[0:2]  # Returns ["Emperor", "Gentoo"]
```

## List Mutability
Lists are mutable, which means you can change, add, or remove elements after the list is created. For example:

```python
a_mix_of_things[1] = 42  # Changes "Emperor" to 42
a_mix_of_things.append('orange')  # Adds 'orange' to the end of the list
del a_mix_of_things[4]  # Removes the fifth element
```

## List Methods
Python provides a wide range of built-in methods for manipulating lists, such as `append()`, `extend()`, `insert()`, `remove()`, `pop()`, `index()`, `count()`, and `sort()`, among others.

:::tip
To get a full list of the method available you can print `Dir[a_mix_of_things]`.
:::

## List Comprehensions
List comprehensions are a concise way to create lists  on existing lists. They provide a more readable and efficient way to filter and transform list elements.

```python
numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers]  # Creates [1, 4, 9, 16, 25]
```

## List Length
We can find the number of elements in a list using the `len()` function:

```python
length = len(my_list)
```

## Nesting Lists
Lists can be nested within other lists, allowing us to create more complex data structures. For example:

```python
nested_list = [[1, 2, 3], ['a', 'b', 'c']]
```

Lists are widely used in Python for various tasks, from storing and manipulating data to implementing more complex data structures and algorithms. They are a fundamental part of Python programming.