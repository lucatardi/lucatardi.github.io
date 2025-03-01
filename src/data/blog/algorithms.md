---
banner_alt: Leetcode exercises
banner: https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg
title_prefix: Code
title: Leetcode exercises
description: Let's solve some leetcode challenges in JavaScript.
date: '2025-02-25'
---

**"Learning is hard work, but everything you learn is yours and will make subsequent learning easier."**  
— *Marijn Haverbeke*


## Contains Duplicate

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


## Valid Anagram

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

## Two Sum

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

### Examples
nums=[2,4,5]  target=7  => [0,2]

### Brute force approach
iterate `nums` and for each `number` and its `index`:
    iterate rest of the array for each `numberRest` and its `indexRest`:
        return `[index, indexRest]` if `number` + `numberRest` = `target`

```js
const twoSum = (nums, target) => {
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
const twoSum = (nums, target) => {
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

## Linked List Cycle

> Given the head of a linked list, determine if the linked list has a cycle.

### Examples
![A circular linked list](/blogs/algorithms/circularlinkedlist.png 'A circular linked list')

### Brute force approach
We traverse the linked list and for each node
    we check if node is already in set:
        yes - we are inside a cicle so we return true
        no - we push the node into set
return false as we did not find duplicate nodes

```js
const hasCycle = (head) => {
    const seen = new Set();
    while (head !== null) {
        if (seen.has(head)) {
            return true
        } else {
            seen.add(head)
        }
        head = head.next
    }
    return false
};
```

This solution has as a good time complexity of `O(n)` but the space complexity of `O(n)` as we are storing all the nodes into the set.

### Optimised approach
Create two pointers from head
Traverse the linked list:
    Move the first pointer to its next element
    Move the second pointer to its next next element
    return true if the second and the first pointers are pointing to the same node
return false as we reached the end of the linked list

```js
const hasCycle = (head) => {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    };
    return false;
};
```

This solution has the same time complexity as the brute force approach but we now have an improved space complexity of `O(1)`.

## Majority element

> Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

### Examples

nums=[1,2,3,2,2] => 2
nums=[5] => 5

### Brute force approach
Iterate the nums array and for each number:
    Iterate the rest of the array and for each otherNumber:
        Keep track to how many times the number appears
    if number has appeared more than half the nums length we return number as a solution.

```js
const majorityElement = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let times = 0
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                times ++
                if (times >= nums.length / 2) {
                    return nums[i]
                }
            }
        }
    }
};
```

This approach leads to have a time complexity of `O(n^2)` as we have two nested loops. The space complexity is `O(1)` as we are keeping track of the times with a variable acting as a counter.

### Optimised approach
Create a map to track the seen numbers and the times we have seen them
Iterate the nums array and for each number:
    if map does not have number as a key in it, add it and set its value to 1
    if map does have the number in it:
        increment its value by one
    if the value of number in map is equal or bigger than the half of the length of the input:
        return number

```js
const majorityElement = (nums) => {
    const seenNums = {}
    for (let num of nums) {
        if (num in seenNums) {
            seenNums[num] += 1
        } else {
            seenNums[num] = 1
        }
        if (seenNums[num] >= nums.length / 2) {
            return num
        }
    }
};
```

This solution has a time complexity of `O(n)` as we are iterating the input array only once. The space complexity is `O(n)` as well as the object size will be given by the unique numbers in the input.