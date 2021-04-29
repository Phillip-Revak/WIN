package com.tts;

public class Main {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        BinaryTree bt = new BinaryTree();

        int[] Nodes = {7, 12, 4, 8, 6, 13, 14, 78, 24, 2};

        for (int n : Nodes) {
            bt.add(n);
        }

        System.out.println(bt);

    }

}
