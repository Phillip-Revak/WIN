package com.tts;

import java.sql.SQLOutput;
import java.util.ArrayList;

public class AddressBook {

    private static ArrayList<Entries> AddressBook = new ArrayList<>();

    public static void addEntry(String firstName, String lastName, String phoneNumber, String emailAddress){
        AddressBook.add(new Entries(firstName, lastName, phoneNumber, emailAddress));
    }

    public void removeEntry(String emailAddress){
        String target = emailAddress;

        for(int i = 0; i < AddressBook.size(); i++){
            Entries myEntry = AddressBook.get(i);
            String emails = myEntry.getEmailAddress();

            if (target.equalsIgnoreCase(emails)){
                AddressBook.remove(i);
                System.out.println("The entry with the following email has been removed: " + target);
            } else {
                System.out.println("Sorry that didn't match an email address in our Address Book.");
            }

        }
    }

    public void searchEntry(String query){
        if (AddressBook.isEmpty()){
            System.out.println("There are no entries within your Address Book");
        } else {

            for (int i = 0; i < AddressBook.size(); i++) {
                Entries myEntry = AddressBook.get(i);
                String first = myEntry.getFirstName();
                String last = myEntry.getLastName();
                String phone = myEntry.getPhoneNumber();
                String email = myEntry.getEmailAddress();

                if (first.contains(query)) {
                    printAddressBook();

                } else if (last.contains(query)) {
                    printAddressBook();

                } else if (phone.contains(query)) {
                    printAddressBook();

                } else if (email.contains(query)) {
                    printAddressBook();

                } else {
                    System.out.println("There was no match in our Address Book.");
                }
            }
        }
    }

    public void printAddressBook(){
        if (AddressBook.isEmpty()){
            System.out.println("There are no entries within your Address Book");
        } else {

            for (int i = 0; i < AddressBook.size(); i++) {
                Entries myEntry = AddressBook.get(i);

                System.out.println("---------");
                System.out.println("First Name: " + myEntry.getFirstName());
                System.out.println("Last Name: " + myEntry.getLastName());
                System.out.println("Phone Number: " + myEntry.getPhoneNumber());
                System.out.println("Email: " + myEntry.getEmailAddress());
            }
        }
    }

    public void deleteBook(){
        AddressBook.clear();
    }

    public void quit(){

    }


}
