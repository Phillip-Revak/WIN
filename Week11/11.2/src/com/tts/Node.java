package com.tts;

public class Node {
    private int key;
    private Node leftNode;
    private Node rightNode;


    @Override
    public String toString() {
        return "\nKey=" + key + ": \n\tleftNode=" + leftNode + ", \n\trightNode=" + rightNode;
    }

    Node(int key){
        this.key = key;
        this.leftNode = null;
        this.rightNode = null;
    }

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }

    public Node getLeftNode() {
        return leftNode;
    }

    public void setLeftNode(Node leftNode) {
        this.leftNode = leftNode;
    }

    public Node getRightNode() {
        return rightNode;
    }

    public void setRightNode(Node rightNode) {
        this.rightNode = rightNode;
    }
}