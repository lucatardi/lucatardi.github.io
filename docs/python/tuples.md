---
sidebar_position: 6
---

# Tuples ⦇🐧⦈

In Python, a tuple is an ordered, immutable collection of elements. Tuples are very similar to lists, but the key difference is that once you create a tuple, you cannot change its elements (immutable). Tuples are defined by enclosing a comma-separated sequence of values in parentheses `()`.

Here's a basic example of creating a tuple:

```python
my_tuple = (1, 2, 3, 4, 5)
```

We can also create a tuple without parentheses, but it's recommended to use them for clarity:

```python
my_tuple = 1, 2, 3, 4, 5
```

We can access elements of a tuple using indexing, just like you would with a list. For example:

```python
first_element = my_tuple[0]  # Access the first element (1)
```

Tuples can contain elements of different data types, and they can be nested within each other. For example:

```python
mixed_tuple = (1, 'hello', 3.14, [7, 8, 9])
nested_tuple = (1, (2, 3), (4, 5, 6))
```

Some important things to note about tuples:

## Immutability
Similarly to [strings](strings) when we create a tuple, we cannot change its elements. This means we cannot add, remove, or modify elements in a tuple.

## Slicing 
We can use slicing to access a subset of elements in a tuple. For example:

```python
subset = my_tuple[1:4]  # Returns (2, 3, 4)
```

## Methods 
Tuples have a limited set of methods compared to lists due to their immutability. You can use methods like `count` and `index` to work with tuples.

   ```python
   count_of_3 = my_tuple.count(3)  # Returns the number of times 3 appears in the tuple
   index_of_4 = my_tuple.index(4)  # Returns the index of the first occurrence of 4
   ```

Tuples are often used when you have a collection of items that should not change during the course of your program, such as coordinates, constant values, or records with fixed fields.