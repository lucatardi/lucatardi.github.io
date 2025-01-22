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

The time complexity in this approach is `O(n)` given only by the iteration of the array `nums` as for each step the read/write of the map has constant time.


## 242. Valid Anagram

> Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

### Examples

s="cat" t="tac" => true
s="race" t="rcae" => true
s="car" t="cat" => false

### Brute force approach
for each letter in `s`:
    traverse `t`:
        return `false` if `t` does not contain the letter
        remove the letter from `t` if found it
return `true` if `t` is empty and `false` otherwise

```js
const isAnagram = (s, t) => {
    for (const letterS of s) {
        let found = false
        for (const letterT of t) {
            if (letterS === letterT) {
                found = true
            }
        }
        if (!found) {
            return false
        }
        t = t.replace(letterS, "")
    }
    return !(t.length)
};
```

Time complexity is `O(n^2)` given the two nested loops.

### Optimised approach
build a hashmap with the letters of `s` eg. {c: 1, a: 2}
traverse `t` and for for each letter:
    return `false` if letter is not in hashmap
    remove/decrease letter from hashmap
return `true` if hashmap empty and `false` otherwise

```js
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false
    }
    for (const letter of s) {
        if (letter in lettersMap) {
            lettersMap[letter] += 1
        } else {
            lettersMap[letter] = 1
        }
    }
    for (const letter of t) {
        if (letter in lettersMap) {
            lettersMap[letter] -= 1
            if (lettersMap[letter] === 0) {
                delete lettersMap[letter]
            }
        } else {
            return false
        }
    }
    return Object.keys(lettersMap).length === 0
};
```

The time complexity is `O(n)` as we are iterating over the two strings while using a hashmap to keep operations to a constant time.

## 1. Two Sum

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

### Examples
nums=[2,4,5]  target=7  => [0,2]

### Brute force approach
iterate `nums` and for each `number` and its `index`:
    iterate rest of the array for each `numberRest` and its `indexRest`:
        return `[index, indexRest]` if `number` + `numberRest` = `target`

```js
const TwoSum = (nums, target) => {
    for (let i=0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
```

Time complexity is `O(n^2)` given the two nested loops.

### Optimised approach
create a map to store the seen numbers and their index eg. {2: 0, 4: 1}
    loop the nums array and for each number and index:
        check if map contains target - number: 
            yes - return [map[target - number], index]
            no - add target as a key to map and its index as value

```js
const TwoSum = (nums, target) => {
    const seenNumsMap = {}
    for (let i=0; i < nums.length; i++) {
        if ((target - nums[i]) in seenNumsMap) {
            return [seenNumsMap[target - nums[i]], i]
        }
        seenNumsMap[nums[i]] = i
    }
};
```

This solution has a time complexity of `O(n)` as we are looping only once and keeping the steps into the loop in constant time.