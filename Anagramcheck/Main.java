package Javaanagram;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    static boolean isAnagram(String s1, String s2){
            if(s1.length()!=s2.length()){
                return false;
            }
            char[] a1=s1.toLowerCase().toCharArray();
            char[] a2=s2.toLowerCase().toCharArray();
            Arrays.sort(a1);
            Arrays.sort(a2);
            return Arrays.equals(a1, a2);
        }
        public static void main(String[] args) {
            try (Scanner sc = new Scanner(System.in)) {
                System.out.println("Enter the first string:");
                String s1=sc.nextLine();
                System.err.println("Enter the second string:");
                String s2=sc.nextLine();
                boolean res= isAnagram(s1,s2);
                if(res){
                    System.out.println("It is anagram");
                }
                else{
                    System.out.println("No, it's not anagram");
                }
            }
            



    }
}
