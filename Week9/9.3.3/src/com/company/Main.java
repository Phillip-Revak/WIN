package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // write your code here
        // print the valid characters for input
        AsciiChars.printNumbers();
        AsciiChars.printLowerCase();
        AsciiChars.printUpperCase();

        Scanner input = new Scanner(System.in);
        System.out.print("Please enter your name: ");     // type a word and hit enter
        String name = input.nextLine();
        System.out.printf("Hello there %s%n", name);

        System.out.println("Do you want to continue? If so press Y. Otherwise hit any other key.");
        String response;
                response = input.nextLine();
        if (response.toUpperCase().charAt(0) == 'Y')
        {
            System.out.println("Lets Continue");
        } else {
            System.out.println("Program Quit");
        }

        int i;
        for(i=0; i<=10; i++)
        {
            String[] question = {"Do you have a red car?", "Where did you grow up?", "What is your favorite pet?", "Do you have a favorite athlete?"};
            System.out.println(question[i]);
            String answer = input.nextLine();
            System.out.println(answer);
        }
    }
}
