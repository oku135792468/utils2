package Utils;

import com.melloware.jintellitype.HotkeyListener;
import com.melloware.jintellitype.JIntellitype;

import java.awt.*;
import java.awt.event.InputEvent;
import java.util.Timer;
import java.util.TimerTask;

public class keyUtils {
    Point point;
    writeUtile utile = new writeUtile();

    public void Start() throws AWTException {
        utile.start();
        final Robot robot = new Robot();
        for (int num = 8; num < 123; num++) {
            JIntellitype.getInstance().registerHotKey(num, 0, num);
        }
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                point = java.awt.MouseInfo.getPointerInfo().getLocation();
            }
        }, 100, 100);
        HotkeyListener hotkeyListener = new HotkeyListener() {
            public void onHotKey(int code) {
                switch (code) {
                    case 27:
                        JIntellitype.getInstance().removeHotKeyListener(this);
                        for (int num = 8; num < 123; num++) {
                            JIntellitype.getInstance().unregisterHotKey(num);
                        }
                        JIntellitype.getInstance().registerHotKey(96, 0, 96);
                        JIntellitype.getInstance().registerHotKey(27, 0, 27);
                        JIntellitype.getInstance().addHotKeyListener(this);
                        utile.end();
                        break;
                    case 96:
                        robotutils robotutils = new robotutils();
                        robotutils.start();
                        break;
                    case 97:
                        robot.mousePress(InputEvent.BUTTON1_DOWN_MASK);
                        robot.mouseRelease(InputEvent.BUTTON1_DOWN_MASK);
                        utile.wrte(point.x + "," + point.y);
                        utile.wrte(InputEvent.BUTTON1_DOWN_MASK + "");
                        break;
                    case 98:
                        robot.mousePress(InputEvent.BUTTON3_DOWN_MASK);
                        robot.mouseRelease(InputEvent.BUTTON3_DOWN_MASK);
                        utile.wrte(point.x + "," + point.y);
                        utile.wrte(InputEvent.BUTTON1_DOWN_MASK + "");
                        break;
                    default:
                        utile.wrte(code + "");
                }
            }
        };
        JIntellitype.getInstance().addHotKeyListener(hotkeyListener);
    }
}
