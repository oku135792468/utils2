package Gui;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;


/**
 * 主界面
 */
public class MainGui extends JFrame implements WindowListener, ActionListener, KeyListener,MouseListener {

    int numAll = 1000000;
    int size = 100000;

    Robot robot = new Robot();

    String cook = "";
    Boolean r = true;

    //设置第一行
    JLabel text = new JLabel("验证码是:");

    JTextArea serch_in = new JTextArea("输入cookies", 10, 100);
    JButton send = new JButton("破解验证码");


    JPanel serch_p = new JPanel();
    JPanel select_p = new JPanel();
    JPanel send_p = new JPanel();

    public MainGui() throws AWTException {
        //设置窗口
        this.setSize(1000, 800);
        this.setLocation(600, 100);
        this.setTitle("破解验证码");
        this.setLayout(new GridLayout(3, 1));

        serch_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        serch_in.setForeground(Color.BLACK);    //设置组件的背景色
        serch_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        serch_in.setBackground(Color.gray);    //设置按钮背景色
        JScrollPane jsp = new JScrollPane(serch_in);    //将文本域放入滚动窗口
        Dimension size = serch_in.getPreferredSize();    //获得文本域的首选大小
        jsp.setBounds(110, 90, size.width, size.height);


        //添加第一行
        serch_p.add(text);
        this.add(serch_p);

        //添加第二行
        select_p.add(jsp);
        this.add(select_p);

        //添加第三行
        send_p.add(send);
        this.add(send_p);
        //设置窗体是否可见
        this.setVisible(true);

        //监听窗体变化
        this.addWindowListener(this);
        //监听按钮
        send.addActionListener(this);

        serch_in.addKeyListener(new KeyListener() {
            public void keyTyped(KeyEvent e) {

            }

            public void keyPressed(KeyEvent e) {
                System.out.println(e.getKeyCode());
            }

            public void keyReleased(KeyEvent e) {

            }
        });
        this.addMouseListener(this);

    }


    public void actionPerformed(ActionEvent e) {
        if(e.getSource()==send){
            robot.keyPress(32);robot.delay(10);
            robot.keyRelease(32);robot.delay(10);
            System.out.println(KeyEvent.VK_SPACE);

        }
    }

    public void windowOpened(WindowEvent e) {

    }

    public void windowClosing(WindowEvent e) {
        this.dispose();
        System.exit(0);
    }

    public void windowClosed(WindowEvent e) {

    }

    public void windowIconified(WindowEvent e) {

    }

    public void windowDeiconified(WindowEvent e) {

    }

    public void windowActivated(WindowEvent e) {

    }

    public void windowDeactivated(WindowEvent e) {

    }

    public void keyTyped(KeyEvent e) {

    }

    public void keyPressed(KeyEvent e) {
        System.out.println("aaaaaaaaaaaaa");
    }

    public void keyReleased(KeyEvent e) {
        System.out.println("aaaaaaaaaaaaa");

    }

    public void mouseClicked(MouseEvent e) {

    }

    public void mousePressed(MouseEvent e) {

    }

    public void mouseReleased(MouseEvent e) {

    }

    public void mouseEntered(MouseEvent e) {

    }

    public void mouseExited(MouseEvent e) {

    }
}
