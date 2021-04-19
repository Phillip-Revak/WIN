package com.tts;

public class Games {

    private String name;
    private String medium;
    private int rating;

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getMedium(){
        return this.medium;
    }

    public void setMedium(String medium){
        this.medium=medium;
    }

    public int getRating(){
        return this.rating;
    }

    public void setRating(int rating){
        this.rating=rating;
    }


    public Games()
    {
        this.name="Scrabble";
        this.medium="Board";
        this.rating=9;
    }

    public Games(String name, String medium)
    {
        this.setName(name);
        this.setMedium(medium);
    }

    public Games(String name, String medium, int rating)
    {
        this.setName(name);
        this.setMedium(medium);
        this.setRating(rating);
    }

    public boolean checkRating(int rating){
        if(rating > 7){
            System.out.println("This is a good game");
            return true;
        } else {
            System.out.println("Not a great game");
            return false;
        }
    }

    public String nameMedium(){
        return (name + " is a " + medium + " game");
    }
}
