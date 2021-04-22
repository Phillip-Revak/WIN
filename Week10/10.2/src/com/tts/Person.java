package com.tts;

public class Person {

    String name;
    int age;
    String location;

    public Person(String name, int age, String location)
    {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    public Person(String name){
        this.name = name;
    }

    public Person(){

    }

    public void sayHello() {
        System.out.println("Hello " + name);
    }

    public int birthday(){
        return age + 1;
    }

}
