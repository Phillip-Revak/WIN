package com.company;

import java.sql.SQLOutput;
import java.util.Scanner;

public class madLib {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.println("What is the name?");
        String name = input.nextLine();

        System.out.println("Enter an adjective");
        String adjective = input.nextLine();

        System.out.println("Enter a noun");
        String nounOne = input.nextLine();

        System.out.println("Enter another noun");
        String nounTwo = input.nextLine();

        System.out.println("Enter your name?");
        String yourName = input.nextLine();

        System.out.println("Enter a number");
        int number = input.nextInt();



        System.out.printf("Dear %s\n", name);
        System.out.printf("You are %s and I want to be your %s! I want to go to the %s with you in %d days.\n", adjective, nounOne, nounTwo, number);
        System.out.printf("Sincerely, %s\n", yourName);
    }

}
