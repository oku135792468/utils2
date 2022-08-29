package Utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;

public class writeUtile {
    OutputStreamWriter writer;

    public void start() {
        try {
            writer = new OutputStreamWriter(new FileOutputStream(new File("test.txt")));
        } catch (Exception e) {
        }
    }

    public void end() {
        try {
            writer.close();
        } catch (Exception e) {
        }
    }

    public void wrte(String par) {
        try {
            writer.write(par + "\r\n");
            writer.flush();
        } catch (Exception e) {
        }
    }
}
