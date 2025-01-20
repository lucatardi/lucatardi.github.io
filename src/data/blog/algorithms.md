---
banner_alt: Algorithms
banner: https://images.pexels.com/photos/17483850/pexels-photo-17483850/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png
title_prefix: JavaScript
title: Algorithms and Data Structures
description: Let's explore the most iconic algoritms and data structures providing examples in JavaScript.
date: '2025-01-08'
---

Learning is hard work, but everything you learn is yours and will make subsequent learning easier.


## 217. Contains Duplicate

> Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Examples
[1,3,5,3] returns `true`
[1,3,5,2] returns `false`

### Brute force approach
Compare each number in `nums` with the rest of `nums`:
    return `true` if they are the same
return `false` when all numbers have been checked

```js
const containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                return true
            }
        }
    }
    return false
};
```

The time complexity in this approach is not ideal as for each number we are looping the array so we can rappresent it as `O(n^2)`.

### Optimized approach
create empty hashmap {number: true}
For each number in `nums`:
    return `true` if number is already in hashmap
    add number to hashmap
return `false` when all numbers have been checked

```js
const containsDuplicate = (nums) => {
    const numsMap = {}
    for (const num of nums) {
        if (num in numsMap) {
            return true
        }
        numsMap[num] = true
    }
    return false
};
```
