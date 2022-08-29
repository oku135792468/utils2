package Gui;

import Utils.GetFiles;
import Utils.writeUtil;
import services.ReadImpl;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.*;
import java.util.ArrayList;


/**
 * 主界面
 */
public class MainGui extends JFrame implements WindowListener, ActionListener {

    Boolean r = true;

    //设置第一行
    JLabel serch_text = new JLabel("输入要转换的文字");
    JLabel text = new JLabel("当前进度");
//    JTextField serch_in = new JTextField();

    JTextArea serch_in = new JTextArea("转换的内容复制到这里点击生成txt按钮", 10, 100);
    JButton send = new JButton("生成txt");
    JButton read = new JButton("读取Read文件夹并生成txt");
    JButton stop = new JButton("停止读取");
    JButton rest = new JButton("重置界面");


    JPanel serch_p = new JPanel();
    JPanel select_p = new JPanel();
    JPanel send_p = new JPanel();

    public MainGui() {
        //设置窗口
        this.setSize(1000, 800);
        this.setLocation(600, 100);
        this.setTitle("翻译");
        this.setLayout(new GridLayout(3, 1));

        serch_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        serch_in.setForeground(Color.BLACK);    //设置组件的背景色
        serch_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        serch_in.setBackground(Color.gray);    //设置按钮背景色
        JScrollPane jsp = new JScrollPane(serch_in);    //将文本域放入滚动窗口
        Dimension size = serch_in.getPreferredSize();    //获得文本域的首选大小
        jsp.setBounds(110, 90, size.width, size.height);


        //添加第一行
        serch_p.add(serch_text);
        serch_p.add(text);
        this.add(serch_p);

        //添加第二行
        select_p.add(jsp);
        this.add(select_p);

        //添加第三行
        send_p.add(send);
        send_p.add(read);
        send_p.add(stop);
        send_p.add(rest);
        this.add(send_p);
        stop.setEnabled(false);
        //设置窗体是否可见
        this.setVisible(true);

        //监听窗体变化
        this.addWindowListener(this);
        //监听按钮
        send.addActionListener(this);
        read.addActionListener(this);
        stop.addActionListener(this);
        rest.addActionListener(this);
    }

    Runnable runnable = new Runnable() {
        int num = 0;
        int size = 0;
        int err = 0;

        public void run() {
            GetFiles getFiles = new GetFiles();
            ReadImpl readd = new ReadImpl();
            ArrayList<File> files = getFiles.getListFiles("./read");
            size = files.size();
            for (File file : files) {
                try {
                    readd.ReadTxt(file);
                } catch (RuntimeException re) {
                    err++;
                    serch_in.append(file.getName() + "\r\n");
                    System.out.println("出错了");
                    continue;
                }
                num++;
                if (size - err == num) {
                    send.setEnabled(true);
                }
                text.setText("当前进度:" + num + "/" + size);
                System.out.println("当前进度:" + num + "/" + size);
            }
            JOptionPane.showConfirmDialog(null, "查询完成", "操作信息", JOptionPane.YES_OPTION);
        }
    };

    Thread thread = new Thread(runnable);

    public void actionPerformed(ActionEvent e) {


        //监听发送方法
        try {

            if (e.getSource() == send) {
                writeUtil util = new writeUtil();
                util.SendAndWrite(serch_in.getText());
                JOptionPane.showConfirmDialog(null, "查询完成", "操作信息", JOptionPane.YES_OPTION);
            }
            if (e.getSource() == rest) {
                thread.stop();
                this.dispose();
                new MainGui();
            }
            if (e.getSource() == read) {
                stop.setEnabled(true);
                send.setEnabled(false);
                serch_in.setText("出错文章\r\n");
                read.setEnabled(false);
                thread.start();
            }
            if (e.getSource() == stop) {
                thread.stop();
                send.setEnabled(true);
                stop.setEnabled(false);
                int mess = JOptionPane.showConfirmDialog(null, "是否重置页面", "操作信息", JOptionPane.YES_OPTION);
                if (mess == 0) {
                    this.dispose();
                    new MainGui();
                }
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
