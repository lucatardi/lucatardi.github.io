---
banner_alt: Algorithms
banner: https://images.pexels.com/photos/17483850/pexels-photo-17483850/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png
title_prefix: JavaScript
title: Algorithms and Data Structures
description: Let's explore the most iconic algoritms and data structures providing examples in JavaScript.
date: '2025-01-08'
---

Learning is hard work, but everything you learn is yours and will make subsequent learning easier.


#### Palindrome

> Given a string `s`, return `true` if it is a palindrome, `false` otherwise. A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string.

If a string looks the same once reversed It means the first char is equal to the last one, the second is equal to the second last one and so on. By setting two `left` and `right` pointers and moving them closer until they meet while checking if they are the same we can understand if a string is palindrome.

```js
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true
} 
```

### Sum of pairs

> Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise.

As the array is sorted we can set two pointers `right` and `left` and move them accordingly checking if the sum of the values at the pointers indexes is more or less the target.

```js
function sumOfPairs(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const currentSum = nums[left] + nums[right];
        if (currentSum === target) {
            return true
        }
        if (currentSum > target) {
            right --
        } else {
            left ++
        }
    }
    return false
}
```

The time complexity is O(n) and the space is O(1).

### Sum of pairs (not sorted array)

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

by traversing the array and for each number traversing the subarray starting from that number we can check all the couples to each others in the array.

```js
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};
```

This solution is far from efficient with a time complexity of O(n^2) as we need to iterate the array multiple times.
A more efficient solution would be possible by using an hash map:

```js
function twoSum(nums, target) {
const seenNumbs = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (diff in seenNumbs) {
            return [seenNumbs[diff], i]
        }
        seenNumbs[nums[i]] = i
    }
};
```

In this way we are just iterating the array only once and the time complexity is O(n).

### Largest Positive Integer That Exists With Its Negative

> Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array. Return the positive integer k. If there is no such integer, return -1.

By traversing the array and for each number traversing the subarray starting from that number we can check all the couples to each others in the array. We then keep track of the largest number and update it only if the current numbers sum is 0 and it is bigger than largest.

```js
function findMaxK(nums) {
    let largest = -1
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                largest = Math.max(Math.abs(nums[i]), largest)
            }
        }
    }
    return largest
};
```

We can do better as the current solution has a time complexity of O(n^2). By using a map we can try to do everything into only one iteration:

```js
function findMaxK(nums) {
    const seenNums = {};
    let maxNum = -1;

    for (const num of nums) {
        const absNum = Math.abs(num);
        if (!(absNum in seenNums)) {
           seenNums[absNum] = num;
        } else {
            seenNums[absNum] += num;
        }
        if (seenNums[absNum] === 0) {
            maxNum = Math.max(maxNum, absNum);
        }
    }

    return maxNum;
}
```

In this solution we have a time complexity of O(n) as we are iterating over `nums` only once and keeping the logic within the loop to a linear time complexity. We still can optimase it a bit as we don't need a map but we can do everything with a set instead:

```js
function findMaxK(nums) {
    const seenNums = new Set();
    let maxNum = -1;

    for (const num of nums) {
        absNum = Math.abs(num);
        if (seenNums.has(-num)) {
            maxNum = Math.max(absNum, maxNum)
        }
        seenNums.add(num)
    }

    return maxNum;
}
```


