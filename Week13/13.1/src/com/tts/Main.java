package com.tts;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here

        AddressBook addresses = new AddressBook();
        boolean quit = false;

        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the address book app!");

    do {
        System.out.println();
        System.out.println("Please select that action you would like to perform by inputting the single integer:\n1) Add Entry. 2) Remove an Entry. 3) Search for an entry. 4) Print Address Book. 5) Delete Address Book. 6) Quit program.");
        int selection = input.nextInt();

        if (selection == 1) {
            Scanner adding = new Scanner(System.in);
            System.out.println("Add an entry. 1. First Name:");
            String firName = adding.nextLine();

            System.out.println("Add an entry. 2. Last Name:");
            String laName = adding.nextLine();

            System.out.println("Add an entry. 3. Phone Number:");
            String phoNumber = adding.nextLine();

            System.out.println("Add an entry. 4. Email Address:");
            String emaAddress = adding.nextLine();

            addresses.addEntry(firName, laName, phoNumber, emaAddress);

        } else if (selection == 2) {
            Scanner remo = new Scanner(System.in);
            System.out.println("Remove an entry. Please enter the email of the entry you'd like to remove:");
            String removeEmail = remo.nextLine();

            addresses.removeEntry(removeEmail);

        } else if (selection == 3) {
            Scanner sea = new Scanner(System.in);
            System.out.println("Please choose how you'd like to search.\n1) First Name. 2) Last Name. 3) Phone Number. 4) Email Address.");
            int searchNum = sea.nextInt();

            if (searchNum == 1){
                Scanner scan1 = new Scanner(System.in);
                System.out.println("Search by First Name. Input a name.");
                String nameFir = scan1.nextLine();
                addresses.searchEntry(nameFir);

            } else if (searchNum == 2){
                Scanner scan2 = new Scanner(System.in);
                System.out.println("Search by Last Name. Input a name.");
                String nameLa = scan2.nextLine();
                addresses.searchEntry(nameLa);

            } else if (searchNum == 3){
                Scanner scan3 = new Scanner(System.in);
                System.out.println("Search by Phone Number. Input a number.");
                String numPho = scan3.nextLine();
                addresses.searchEntry(numPho);

            } else if (searchNum == 4){
                Scanner scan4 = new Scanner(System.in);
                System.out.println("Search by Email Address. Input an address.");
                String addEma = scan4.nextLine();
                addresses.searchEntry(addEma);

            }

        } else if (selection == 4) {
            addresses.printAddressBook();

        } else if (selection == 5) {
            addresses.deleteBook();

        } else if (selection == 6) {
            quit = true;
            System.out.println("Program Quit");
        }

    } while (!quit);

    }
}

// Need Search Method
// Clean up code