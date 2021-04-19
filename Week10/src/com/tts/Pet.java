package com.tts;

public class Pet {

    private String name;
    private int age;
    private String location;
    private String type;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }



    public Pet()
    {
        this.setName(name);
        this.setAge(age);
        this.setLocation(location);
        this.setType(type);
    }

    public Pet(String name, int age, String location, String type)
    {
        this.setName(name);
        this.setAge(age);
        this.setLocation(location);
        this.setType(type);
    }





}
