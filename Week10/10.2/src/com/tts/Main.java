package com.tts;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Person firstPerson = new Person();
        Person secondPerson = new Person("John");
        Person thirdPerson = new Person("Peter", 35, "Israel");

        secondPerson.sayHello();
        thirdPerson.sayHello();

        System.out.println("Peter will be " + thirdPerson.birthday() + " years old next year.");
    }
}
