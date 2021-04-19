package com.tts;

public class Calculator {
    public int add(int num1, int num2){
        return num1+num2;
    }

    public int subtract(int num1, int num2){
        return num1-num2;
    }

    public int multiply(int num1, int num2){
        return num1*num2;
    }

    public int divide(int num1, int num2){
        return num1/num2;
    }

    public int square(int num1){
        return num1*num1;
    }

}

class MagicCalculator extends Calculator{
    public double sqrt(double num1){
        return Math.sqrt(num1);
    }

    public double sin(double num1){
        return Math.sin(num1);
    }

    public double cosine(double num1){
        return Math.cos(num1);
    }

    public double tangent(double num1){
        return Math.tan(num1);
    }

    public int factorial(int num1){
        if (num1 <= 2){
            return num1;
        }
        return num1 * factorial(num1 - 1);
    }




}
