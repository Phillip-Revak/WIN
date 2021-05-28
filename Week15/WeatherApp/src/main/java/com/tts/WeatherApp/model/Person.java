package com.tts.WeatherApp.model;

import lombok.Data;

import java.util.List;

@Data
public class Person {

    private String firstName;
    private String lastName;
    private int age;
    private List<String> favoriteFoods;

    public Person(String firstName, String lastName, int age, List<String> favoriteFoods) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.favoriteFoods = favoriteFoods;
    }

    public Person() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public List<String> getFavoriteFoods() {
        return favoriteFoods;
    }

    public void setFavoriteFoods(List<String> favoriteFoods) {
        this.favoriteFoods = favoriteFoods;
    }
}
