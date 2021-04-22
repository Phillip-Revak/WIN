package com.tts;

import java.util.ArrayList;

public class Library {
    // Add the missing implementation to this class

    String location;

    public Library(String location) {
        this.location = location;
    }

    ArrayList<Book> Books = new ArrayList<>();

    public void addBook(Book bookTitle) {

        this.Books.add(bookTitle);
    }

    public static void printOpeningHours() {
        System.out.println("Libraries are open daily from 9am to 5pm.");
    }

    public void printAddress() {
        this.location = location;
        System.out.println(location);
    }

    public void borrowBook(String title) {
        boolean found = false;
        for (Book bookTitle : Books) {
            if (bookTitle.getTitle().equalsIgnoreCase(title)) {
                found = true;
                if (!bookTitle.isBorrowed()) {
                    System.out.println("You successfully borrowed " + title);
                    bookTitle.rented();
                    break;
                } else if (bookTitle.isBorrowed()) {
                    System.out.println("Sorry, this book is already borrowed");
                    break;
                }
            }
        }
        if (!found) {
            System.out.println("Sorry, this book is not in our catalog.");
        }
    }

    public void printAvailableBooks() {
        if (Books.isEmpty()) {
            System.out.println("No books in Catalog");
        }
            for (Book bookTitle : Books) {
                if (!bookTitle.isBorrowed()) {
                    System.out.println(bookTitle.getTitle());
                }

            }
    }

    public void returnBook(String title){
        for(Book bookTitle:Books){
            if (bookTitle.getTitle().equalsIgnoreCase(title)){
                if(bookTitle.isBorrowed()){
                    bookTitle.returned();
                    System.out.println("You successfully returned " + title);
                } else if (!bookTitle.isBorrowed()){
                    System.out.println("You can't return a book you don't have. Our records show we have " + title + " in stock. If you'd like to borrow it you are welcome to. Or you're also welcome to donate an extra copy to the Library.");
                }
            }
        }
    }
}