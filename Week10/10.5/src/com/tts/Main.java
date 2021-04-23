package com.tts;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // New TicTacToeClass Constructor.
        TicTacToeClass game = new TicTacToeClass();

        // Display the board at the start.
        game.displayBoard();
        System.out.println();

        // Loop until their is a winner or tie.
        int T = game.numTurns();
        while (T < 9) {

            // Print message about next turn for O or X.
            char p;
            if (T % 2 == 0) {
                p = 'X';
                System.out.println(p + ", choose your location (row column):");
            } else {
                p = 'O';
                System.out.println(p + ", choose your location (row column):");
            }

            // Receive input from players.
            Scanner input = new Scanner(System.in);
            int coordinateR = input.nextInt();
            int coordinateC = input.nextInt();

            // Call Play Move
            game.playMove(p, coordinateR, coordinateC);
            System.out.println();
            game.displayBoard();
            System.out.println();

            // Determine if their is a winner or a tie.
            if (game.isWinner(p)) {
                System.out.println("Game Over! " + p + " is the winner!");
                T = 10;
            } else if (game.isCat()) {
                System.out.println("Game Over! It's a tie.");
                T = 10;
            }

            T = T + 1;
        }
    }
}

