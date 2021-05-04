package com.tts;

public class BadThreads {

    static String message;

    private static class CorrectorThread extends Thread {

        public void run(){
            try {
                sleep(1000);
            } catch(InterruptedException e){}

                message = "Mares do eat oats.";
        }
    }

    public static void main(String args[])
            throws InterruptedException {

        (new CorrectorThread()).start();
        message = "Mares do not eat oats.";
        System.out.println(message);
        Thread.sleep(2000);

        System.out.println(message);
    }
}

// 2. It will always say "Mares do eat oats" because the sleep time is shorter than for the alternative thread.
// 3. If you change the sleep times so that they are reversed it prints out "Mares do not eat oats" as you would expect.
// 4. Include another system.out.println before the main thread sleeps for 2000.