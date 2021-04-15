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

        System.out.println("Who is your favorite athlete?");
        String answer = input.nextLine();
        System.out.println("Where did you grow up?");
        String answer2 = input.nextLine();
        System.out.println("How many siblings do you have?");
        int answer3 = input.nextInt();
        System.out.println("Do you have a red car?");
        String answer4 = input.next();
        System.out.println("What is your favorite number?");
        int answer5 = input.nextInt();
        System.out.println("How many pairs of shoes do you own?");
        int answer6 = input.nextInt();

        int magicBall = answer3 * 5;
        int lot1 = answer5;
        int lot2 = answer6;
        int lot3 = answer3 * 10 / 3;
        int lot4 = answer5 + 6 / 2;
        int lot5 = answer6 - 2 * 3;

        System.out.printf("Lottery Numbers: %d %d %d %d %d Magic Ball Number: %d", lot1, lot2, lot3, lot4, lot5, magicBall);

        }

    }
