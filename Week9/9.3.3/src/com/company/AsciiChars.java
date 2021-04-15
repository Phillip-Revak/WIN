package com.company;

public class AsciiChars
{
    public static void printNumbers()
    {
        // TODO: print valid numeric input
        int i;
        for(i=48; i>=48 && i<=57; i++)
        {
            System.out.println("The following Ascii values signify numbers: " + i);
        }
    }

    public static void printLowerCase()
    {
        // TODO: print valid lowercase alphabetic input
        int i;
        for(i=97; i>=97 && i<=122; i++)
        {
            System.out.println("The following Ascii values signify lowercase letters: " + i);
        }
    }

    public static void printUpperCase()
    {
        // TODO: print valid uppercase alphabetic input
        int i;
        for(i=65; i>=65 && i<=90; i++)
        {
            System.out.println("The following Ascii values signify UPPERCASE letters: " + i);
        }
    }
}