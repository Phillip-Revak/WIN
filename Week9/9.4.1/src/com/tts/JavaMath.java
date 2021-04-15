package com.tts;

import java.util.*;

public class JavaMath {

    public static void max(ArrayList<Integer> numArray)
    {
        int max = numArray.get(0);
        for(int i=0; i<numArray.size(); i++)
            if (numArray.get(i) > max)
                max = numArray.get(i);
        System.out.printf("The largest number in this array is: %d \n", max);
    }

    public static void min(ArrayList<Integer> numArray)
    {
        int min = numArray.get(0);
        for(int i=0; i<numArray.size(); i++)
            if (numArray.get(i) < min)
                min = numArray.get(i);
        System.out.printf("The smallest number in this array is: %d \n", min);
    }

    public static void sum(ArrayList<Integer> numArray)
    {
        int sum = 0;
        for(int i=0; i<numArray.size(); i++)
            sum += numArray.get(i);
        System.out.printf("The sum of the numbers in this array is: %d \n", sum);
    }

    public static void product(ArrayList<Integer> numArray)
    {
        int product = 1;
        for(int i=0; i<numArray.size(); i++)
            product *= numArray.get(i);
        System.out.printf("The product of the numbers in this array is: %d \n", product);
    }
}
