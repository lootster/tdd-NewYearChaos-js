<!-- TITLE: New Year Chaos -->
<!-- SUBTITLE: A quick summary of New Year Chaos -->

# New Year Chaos

It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by `1` from `1` at the front of the line to `n` at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if `n = 8` and `Person 5` bribes `Person 4`, the queue will look like this: `1, 2, 3, 5, 4, 6, 7, 8`.

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

## Task

Create a function `minimumBribes`. It must return an integer representing the minimum number of bribes necessary, or `Too chaotic` if the line configuration is not possible.

`minimumBribes` has the following parameter(s):
* `q`: an array of integers representing the final state of the queue after the bribes

## Example 1

### Sample Input

```
2 1 5 3 4
```

### Sample Output

```
3
```

### Explanation

The initial state:

![1451665589 31 D 436 Ba 19 Pic 11](https://s3.amazonaws.com/hr-challenge-images/494/1451665589-31d436ba19-pic11.png)

After person `5` moves one position ahead by bribing person `4`:

![1451665589 31 D 436 Ba 19 Pic 11](https://s3.amazonaws.com/hr-challenge-images/494/1451665679-6504422ed9-pic2.png)

Now person `5`  moves another position ahead by bribing person `3`:

![1451665589 31 D 436 Ba 19 Pic 11](https://s3.amazonaws.com/hr-challenge-images/494/1451665818-27bd62bb0d-pic3.png)

And person `2` moves one position ahead by bribing person `1`:

![1451665589 31 D 436 Ba 19 Pic 11](https://s3.amazonaws.com/hr-challenge-images/494/1451666025-02a2395a00-pic5.png)

So the final state is `2 1 5 3 4` after three bribing operations.

## Example 2

### Sample Input

```
2 5 1 3 4
```

### Sample Output

```
Too chaotic
```

### Explanation

No person can bribe more than two people, so its not possible to achieve the input state. As number 5 need to bribe at least 3 people to get to number 2.

## Source

[Hackerrank](https://www.hackerrank.com/challenges/new-year-chaos)