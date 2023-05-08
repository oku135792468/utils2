package Gui;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;


/**
 * 主界面
 */
public class MainGui extends JFrame implements WindowListener, ActionListener {

    Boolean r = true;

    //设置第一行
    JLabel url_text = new JLabel("推送地址: ");
    JLabel num_text = new JLabel("推送条数: ");
    JLabel cron_text = new JLabel("定时器cron表达式: ");
//    JTextField serch_in = new JTextField();

    JTextArea url_in = new JTextArea("", 1, 70);
    JTextArea num_in = new JTextArea("", 1, 70);
    JTextArea cron_in = new JTextArea("", 1, 70);



    JButton send = new JButton("开始任务");
    JButton read = new JButton("更新配置");


    JPanel row1 = new JPanel();
    JPanel row2 = new JPanel();
    JPanel row3 = new JPanel();
    JPanel row4 = new JPanel();

    public MainGui() {
        //设置窗口
        this.setSize(1000, 800);
        this.setLocation(600, 100);
        this.setTitle("推送url");
        this.setLayout(new GridLayout(5, 2));

        url_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        url_in.setForeground(Color.BLACK);    //设置组件的背景色
        url_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        url_in.setBackground(Color.gray);    //设置按钮背景色

        num_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        num_in.setForeground(Color.BLACK);    //设置组件的背景色
        num_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        num_in.setBackground(Color.gray);    //设置按钮背景色

        cron_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        cron_in.setForeground(Color.BLACK);    //设置组件的背景色
        cron_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        cron_in.setBackground(Color.gray);    //设置按钮背景色


        //添加第一行
        row1.add(url_text);
        row1.add(url_in);
        this.add(row1);

        //添加第二行
        row2.add(num_text);
        row2.add(num_in);
        this.add(row2);

        //添加第二行
        row3.add(cron_text);
        row3.add(cron_in);
        this.add(row3);

        //添加第二行
        row3.add(cron_text);
        row3.add(cron_in);
        this.add(row3);
        
        //添加第三行
        row4.add(send);
        row4.add(read);
        this.add(row4);
        //设置窗体是否可见
        this.setVisible(true);

        //监听窗体变化
        this.addWindowListener(this);
        //监听按钮
        send.addActionListener(this);
        read.addActionListener(this);
    }

//    Runnable runnable = new Runnable() {
//        int num = 0;
//        int size = 0;
//        int err = 0;
//
//        public void run() {
//            GetFiles getFiles = new GetFiles();
//            ReadImpl readd = new ReadImpl();
//            ArrayList<File> files = getFiles.getListFiles("./read");
//            size = files.size();
//            for (File file : files) {
//                try {
//                    readd.ReadTxt(file);
//                } catch (RuntimeException re) {
//                    err++;
//                    serch_in.append(file.getName() + "\r\n");
//                    System.out.println("出错了");
//                    continue;
//                }
//                num++;
//                if (size - err == num) {
//                    send.setEnabled(true);
//                }
//                text.setText("当前进度:" + num + "/" + size);
//                System.out.println("当前进度:" + num + "/" + size);
//            }
//            JOptionPane.showConfirmDialog(null, "查询完成", "操作信息", JOptionPane.YES_OPTION);
//        }
//    };
//
//    Thread thread = new Thread(runnable);

    public void actionPerformed(ActionEvent e) {


        //监听发送方法
        try {

            if (e.getSource() == send) {
                System.out.println("修改配置");
                JOptionPane.showConfirmDialog(null, "查询完成", "操作信息", JOptionPane.YES_OPTION);
            }

            if (e.getSource() == read) {
                send.setEnabled(false);
                read.setEnabled(false);
//                thread.start();
            }

        } catch (Exception ex) {
            System.out.println(ex);
            if (ex.toString() == "java.lang.IllegalThreadStateException") {
                r = false;
            } else {
                JOptionPane.showConfirmDialog(null, "程序出错，重新执行或者重新打开", "操作信息", JOptionPane.YES_OPTION);
            }
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
}
