---
sidebar_position: 7
---

In Python, a dictionary is an unordered collection of key-value pairs. Dictionaries are also known as associative arrays or hash maps in other programming languages. Each key in a dictionary is associated with a specific value. Dictionaries are defined using curly braces `{}` and the key-value pairs are separated by colons `:`.

Here's a basic example of creating a dictionary:

```python
my_dict = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
```

In this example, `"name"`, `"age"`, and `"city"` are keys, and `"John"`, `30`, and `"New York"` are their corresponding values.

You can access values in a dictionary by referencing their keys. For example:

```python
name = my_dict["name"]  # Access the value associated with the key "name" ("John")
```

You can also use the `get` method to access values and provide a default value if the key is not present:

```python
country = my_dict.get("country", "Unknown")  # Access the value associated with the key "country" (returns "Unknown" if not found)
```

Some important things to note about dictionaries:

1. **Unordered**: Dictionaries are unordered, meaning the order of key-value pairs is not guaranteed. Starting from Python 3.7, dictionaries maintain the insertion order.

2. **Keys are Unique**: Keys in a dictionary must be unique. If you use the same key with a different value, the original value associated with that key will be overwritten.

3. **Mutable**: Dictionaries are mutable, which means you can add, update, and remove key-value pairs after creating the dictionary.

Here are some common dictionary operations:

- Adding a new key-value pair:

  ```python
  my_dict["email"] = "john@example.com"
  ```

- Modifying an existing value:

  ```python
  my_dict["age"] = 31
  ```

- Removing a key-value pair:

  ```python
  del my_dict["city"]
  ```

- Checking if a key exists in the dictionary:

  ```python
  if "name" in my_dict:
      # Do something
  ```

- Getting a list of keys or values:

  ```python
  keys = my_dict.keys()
  values = my_dict.values()
  ```

Dictionaries are commonly used in Python for tasks like storing configuration settings, mapping between related data, and efficiently looking up values based on keys.