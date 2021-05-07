public class GenericMethodPractice {
    public static < W > void arrayContents( W[] arrayIn) {

        for(W element : arrayIn) {
            System.out.printf("%s ", element);
        }
        System.out.println();
    }
}