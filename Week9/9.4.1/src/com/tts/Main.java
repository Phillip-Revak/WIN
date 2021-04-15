package com.tts;

import java.util.*;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        String[] fruitArray = {"orange", "apple", "dragonfruit"};
        int[] intArray;
        boolean[] boolArray;

        System.out.println(fruitArray[1]);

        List<String> stringList = new ArrayList<>();
        List<String> stringLinkedList = new LinkedList<>();
        List<String> stringVector = new Vector<>();
        List<String> stringStack = new Stack<>();

        stringList.add("dog");
        stringList.add("house");
        stringList.add("cell phone");

        System.out.println(stringList.get(0));
        System.out.println(stringList);

        String myString = "I really love icecream!";
        String str[] = myString.split(" ");
        List <String> arrayString = Arrays.asList(str);

        System.out.println(arrayString);

        //Creates a HashMap with a String as key and Integer as the value it points to
        HashMap<String, Integer> personMap = new HashMap<>();

        personMap.put("Bruv", 21);
        personMap.put("Webb", 34);
        personMap.put("Colin", 24);
        personMap.put("Corey", 28);

        System.out.println(personMap);

        personMap.remove("Bruv");
        System.out.println(personMap);
        personMap.containsKey("Daniel");

        List<String> fruitList = Arrays.asList("plum", "grape", "fiji apple");
        for (String fruit : fruitList){
            System.out.println(fruit);
        }

        Scanner input = new Scanner(System.in);
        System.out.println("Please provide 5 integers: (Enter an integer then press enter and continue for 5 nums)");
        int numOne = input.nextInt();
        int numTwo = input.nextInt();
        int numThree = input.nextInt();
        int numFour = input.nextInt();
        int numFive = input.nextInt();
        ArrayList<Integer> numArray = new ArrayList<Integer>(5);
        numArray.add(numOne);
        numArray.add(numTwo);
        numArray.add(numThree);
        numArray.add(numFour);
        numArray.add(numFive);
        System.out.println(numArray);

        JavaMath.max(numArray);
        JavaMath.min(numArray);
        JavaMath.sum(numArray);
        JavaMath.product(numArray);

        HashMap<String, String> cars = new HashMap<>();
        cars.put("Camry", "Toyota");
        cars.put("Highlander", "Toyota");
        cars.put("Civic", "Honda");
        cars.put("Odyssey", "Accord");
        cars.put("R8", "Audi");
        cars.put("Q8", "Audi");
        cars.put("3 Series", "BMW");
        cars.put("5 Series", "BMW");
        System.out.println("What kind of car are you looking for?");
        String carRequest = input.next();
        Boolean inventory = cars.containsKey(carRequest);
        if (inventory == true)
        {
            System.out.println("Oh you're looking for a(an) " + carRequest + "? Our " + cars.get(carRequest) + " selection is right over here!");
        } else if (inventory == false)
        {
            System.out.println("Im sorry we don't have any " + carRequest + "(s).");
        }


//        System.out.printf("%s %s %s %s %s", numOne, numTwo, numThree, numFour, numFive);



    }
}
