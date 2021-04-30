package com.tts;

public class Main {

    public static int displaySum(int a, int b) {
        return a + b;
    }

    // This method runs in O(1) time or "constant time"
    // input of the array could be 1 or 1000 and it would still require one step
    public static void printFirstItem(int[] items) {
        System.out.println(items[0]);
    }

    // This method runs on O(n) time or "linear time"
    // however many items the array has is the number of times we print
    public static void printAllItems(int[] items) {
        for (int item : items) {
            System.out.println(item);
        }
    }

    // O(n^2) or "quadratic time"
//    for 10 items we have to print 100 times or something like this
    public static void printAllPossibleOrderedPairs(int[] items) {
        for (int firstItem : items) {
            for (int secondItem : items) {
                System.out.println(firstItem + ", " + secondItem);
            }
        }
    }



    public static void main(String[] args) {
	// write your code here
        displaySum(3, 7);

        int[] nums = {1, 2, 3, 4, 5};
        printFirstItem(nums);
        printAllItems(nums);
        printAllPossibleOrderedPairs(nums);
    }
}

// Big O notation, how long an algorithm takes to run
// How quickly it grows relative to the input, as the input gets arbitrarily large.

// Build around the worst case scenario
// Or what would happen with a huge number
// When simplifying notation