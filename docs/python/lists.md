---
sidebar_position: 5
---

# Lists 〖🐧〗

In Python, a list is a versatile and commonly used data structure that allows us to store a collection of items. Lists are ordered, mutable (changeable), and can contain elements of different data types.
Here are some key characteristics and operations associated with lists in Python:

## List Creation
You can create a list by enclosing a comma-separated sequence of elements within square brackets `[]`. For example:

```python
my_list = [1, 2, 3, 'apple', 'banana', 3.14]
```

1. **Accessing List Elements:**
   List elements are accessed by their index, starting from 0 for the first element. You can also use negative indices to access elements from the end of the list. For example:

   ```python
   first_element = my_list[0]
   last_element = my_list[-1]
   ```

2. **List Slicing:**
   You can extract a sublist from a list using slicing. Slicing allows you to specify a range of indices to create a new list containing the selected elements. For example:

   ```python
   sublist = my_list[1:4]  # Returns [2, 3, 'apple']
   ```

3. **List Mutability:**
   Lists are mutable, which means you can change, add, or remove elements after the list is created. For example:

   ```python
   my_list[2] = 42  # Changes the third element to 42
   my_list.append('orange')  # Adds 'orange' to the end of the list
   del my_list[4]  # Removes the fifth element
   ```

4. **List Methods:**
   Python provides a wide range of built-in methods for manipulating lists, such as `append()`, `extend()`, `insert()`, `remove()`, `pop()`, `index()`, `count()`, and `sort()`, among others.

5. **List Comprehensions:**
   List comprehensions are a concise way to create lists based on existing lists. They provide a more readable and efficient way to filter and transform list elements.

   ```python
   numbers = [1, 2, 3, 4, 5]
   squared_numbers = [x**2 for x in numbers]  # Creates [1, 4, 9, 16, 25]
   ```

6. **List Length:**
   You can find the number of elements in a list using the `len()` function:

   ```python
   length = len(my_list)
   ```

7. **Nesting Lists:**
   Lists can be nested within other lists, allowing you to create more complex data structures. For example:

   ```python
   nested_list = [[1, 2, 3], ['a', 'b', 'c']]
   ```

Lists are widely used in Python for various tasks, from storing and manipulating data to implementing more complex data structures and algorithms. They are a fundamental part of Python programming.