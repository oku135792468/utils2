package Utils;

import java.awt.*;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class robotutils {
    public void start() {
        try {
            Robot robot = new Robot();

            BufferedReader bufferedReader = new BufferedReader(new FileReader(new File("test.txt")));

            int size = 0;
            String line="";
//            while ((line = bufferedReader.readLine()) != null) {
//                System.out.println(line);
//            }
            while ((line = bufferedReader.readLine()) != null) {
                if (line.indexOf(",")!=-1){
                    String[] split = line.split(",");
                    robot.mouseMove(Integer.parseInt(split[0]),Integer.parseInt(split[1]));
                    robot.mouseMove(Integer.parseInt(split[0]),Integer.parseInt(split[1]));
                    robot.mouseMove(Integer.parseInt(split[0]),Integer.parseInt(split[1]));
                    robot.mouseMove(Integer.parseInt(split[0]),Integer.parseInt(split[1]));
                    robot.mouseMove(Integer.parseInt(split[0]),Integer.parseInt(split[1]));
                    robot.mouseMove(Integer.parseInt(split[0]),Integer.parseInt(split[1]));
                    robot.mouseMove(Integer.parseInt(split[0]),Integer.parseInt(split[1]));
                }else if (Integer.parseInt(line)==1024){
                    robot.mousePress(1024);
                    robot.mouseRelease(1024);
                }else {
                    robot.keyPress(Integer.parseInt(line));
                    robot.keyRelease(Integer.parseInt(line));
                }
            }
            bufferedReader.close();
        } catch (Exception e) {

        }
    }
}
