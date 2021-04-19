package com.tts;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
	// write your code here

        System.out.println("===== Car =====");

        Car car = new Car();
        car.setColor("blue");
        car.setNumberOfDoors(4);
        System.out.println(car.getColor());
        System.out.println(car.getNumberOfDoors());
        car.start();
        car.stop();
        car.drive();

        Pet bump = new Pet();
        bump.setName("bumper");
        bump.setAge(14);
        bump.setLocation("Raleigh");
        bump.setType("Cockerspaniel");
        System.out.println(bump.getName());
        System.out.println(bump.getAge());
        System.out.println(bump.getLocation());
        System.out.println(bump.getType());

        Pet pipe = new Pet("Piper", 8, "Huntersville", "Wolf");
        System.out.println(pipe.getName());
        System.out.println(pipe.getAge());
        System.out.println(pipe.getLocation());
        System.out.println(pipe.getType());

        pipe.setAge(14);
        System.out.println(pipe.getAge());

        Games scrab = new Games();
        System.out.println(scrab.getName());
        System.out.println(scrab.getRating());
        System.out.println(scrab.getMedium());

        Games soccer = new Games("Soccer", "outdoor", 10);
        System.out.println(soccer.getRating());

        System.out.println(scrab.checkRating(scrab.getRating()));
        System.out.println(scrab.nameMedium());

        Calculator calc = new Calculator();
        System.out.println(calc.add(3, 5));
        System.out.println(calc.subtract(3, 5));
        System.out.println(calc.multiply(3, 5));
        System.out.println(calc.divide(3, 5));
        System.out.println(calc.square(5));

        MagicCalculator magiCalc = new MagicCalculator();
        System.out.println(magiCalc.sqrt(24));
        System.out.println(magiCalc.sin(5));
        System.out.println(magiCalc.cosine(5));
        System.out.println(magiCalc.tangent(5));
        System.out.println(magiCalc.factorial(5));
    }

}
