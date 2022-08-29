package com.zy.utilsweb.utils;

public class Utils {

    /**
     * @param title
     * @param content
     * @return
     */
    public static double matchByTile(String title, String content) {
        double success = 0;
        double num = 0;
        System.out.println(title);
        for (int j = 0; j < title.length(); j++) {
//            System.out.println("匹配字数 ====> " + j);
            for (int i = 0; i < title.length() - j; i++) {
//                System.out.println(i);
//                System.out.println(i + j + 1);
                String sub = title.substring(i, i + j + 1);
//                System.out.println(sub);
                if (content.contains(sub)) {
                    success++;
                }
                num++;
            }
        }
//        for (int i = 0; i < title.length() - 1; i++) {
//            String sub = title.substring(i, i + 2);
//            if (content.contains(sub)) {
//                success++;
//            }
//            num++;
//        }
//
//        for (int i = 0; i < title.length() - 2; i++) {
//            String sub = title.substring(i, i + 3);
//            if (content.contains(sub)) {
//                success++;
//            }
//            num++;
//        }
        return success / num;
    }

}
