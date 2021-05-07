import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static <W> void printList(List<W> listIn) {
        for(W element : listIn) {
            System.out.printf("%s ", element);
        }
        System.out.println();
    }

    public static void main(String[] args){

        List<Integer> integerList = new ArrayList<>();
        integerList.add(4);
        integerList.add(45);
        integerList.add(36);

        printList(integerList);

        GenericMethodPractice gen = new GenericMethodPractice();

        Integer[] intArray = { 10, 20, 30, 40, 50 };
        String[] stringArray = { "Java", "Ruby", "Python", "Swift"};
        Character[] charArray = { 'H', 'E', 'L', 'L', 'O' };

        System.out.println("Array integerArray contains:");
        gen.arrayContents(intArray);

        System.out.println("\nArray stringArray contains:");
        gen.arrayContents(stringArray);

        System.out.println("\nArray characterArray contains:");
        gen.arrayContents(charArray);

    }
}


