package com.company;

public class Main {

    public static void CheckId( boolean validId, int age, boolean buyingAlc )
    {
        if (validId)
        {
            System.out.println("Valid ID presented");
            if((age>21) && (buyingAlc))
            {
                System.out.println("Customer legal to purchase alcohol");
            }
        }
    }

    public static void main(String[] args) {
	// write your code here

        boolean myBool = true;

        if(myBool){
            System.out.println("Hello from a conditional");
        }

        int count = 44;
        if ( count > 20 )
        {
            String msg = "Count is large!";
            if ( count > 50 )
            {
                msg = msg + "\nCount is VERY large";
            }
            System.out.println(msg);
        }
        System.out.println("Finished checking count.");

        int[] simpleArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
// using the standard for loop and the length property of an array
        for (int i = 0; i < simpleArray.length; i++)
        {
            System.out.println("Normal for value: " + simpleArray[i]);
        }
// using the enhanced for loop
        for (int item : simpleArray)
        {
            System.out.println("Enhanced for: " + item);
        }
// both loops will print the their respective strings 1 - 10.

        CheckId(true, 25, true);
    }
}
