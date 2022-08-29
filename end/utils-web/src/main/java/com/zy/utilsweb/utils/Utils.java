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
        for (int j = 0; j < title.length(); j++) {
            for (int i = 0; i < title.length() - j; i++) {
                String sub = title.substring(i, i + j + 1);
                if (content.contains(sub)) {
                    success++;
                }
                num++;
            }
        }
        return success / num;
    }

}
