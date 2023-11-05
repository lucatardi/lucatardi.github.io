---
sidebar_position: 1
---

# Two sums

## Problem
Given an array and an integer target, return indices of the two numbers such that they add up to target.

## Follow up questions
- Can we assume the input array conteins only integer values? ✅
- Are there more than a possible result? ❌

## Brute force Solution
We need to sum each number of the list with all the rest of the numbers.
```
for each number in the input array
  create a subset array which starting from the index of the current number
  for each number of the subset array
    if number of input array + number of the subset array is equal to target
      return an array with current index array and current index subset array
```

Let's code it:

```python
def twoSum(nums, target):
  for idx, number in enumerate(nums):
    for nextIdx, nextNumber in enumerate(nums[idx + 1:]):
      if (number + nextNumber == target):
        return [idx, nextIdx + idx + 1]
```

In this solution we have to iterate the whole array for each element in the input array which leads us to have a time complexity of the order of **O(n^2)**.
