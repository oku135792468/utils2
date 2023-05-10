package Gui;

import Quartz.QuartzJob;
import Quartz.QuartzManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.*;


/**
 * 主界面
 */
public class MainGui extends JFrame implements WindowListener, ActionListener {
    Logger log = LoggerFactory.getLogger(MainGui.class);
    Boolean r = true;
    Boolean status = false;

    //设置第一行
    JLabel src_text = new JLabel("源文件地址: ");
    JLabel url_text = new JLabel("推送地址: ");
    JLabel num_text = new JLabel("推送条数: ");
    JLabel cron_text = new JLabel("定时器cron表达式: ");

    JTextArea src_in = new JTextArea("", 1, 70);
    JTextArea url_in = new JTextArea("", 1, 70);
    JTextArea num_in = new JTextArea("", 1, 70);
    JTextArea cron_in = new JTextArea("", 1, 70);


    JButton send = new JButton("立即发送");
    JButton start = new JButton("开始任务");
    JButton read = new JButton("保存配置");


    JPanel row0 = new JPanel();
    JPanel row1 = new JPanel();
    JPanel row2 = new JPanel();
    JPanel row3 = new JPanel();
    JPanel row4 = new JPanel();

    public MainGui() {
        String src = "";
        String url = "";
        String num = "";
        String cron = "";
        File file = new File("setting.txt");
        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            String line;
            int i = 0;
            while ((line = br.readLine()) != null) {
                switch (i) {
                    case 0:
                        src = line;
                    case 1:
                        url = line;
                    case 2:
                        num = line;
                    case 3:
                        cron = line;
                }
                i++;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        //设置窗口
        this.setSize(1000, 800);
        this.setLocation(600, 100);
        this.setTitle("推送url");
        this.setLayout(new GridLayout(5, 2));

        src_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        src_in.setForeground(Color.BLACK);    //设置组件的背景色
        src_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        src_in.setBackground(Color.gray);    //设置按钮背景色
        src_in.setText(src);

        url_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        url_in.setForeground(Color.BLACK);    //设置组件的背景色
        url_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        url_in.setBackground(Color.gray);    //设置按钮背景色
        url_in.setText(url);

        num_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        num_in.setForeground(Color.BLACK);    //设置组件的背景色
        num_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        num_in.setBackground(Color.gray);    //设置按钮背景色
        num_in.setText(num);

        cron_in.setLineWrap(true);    //设置文本域中的文本为自动换行
        cron_in.setForeground(Color.BLACK);    //设置组件的背景色
        cron_in.setFont(new Font("楷体", Font.BOLD, 16));    //修改字体样式
        cron_in.setBackground(Color.gray);    //设置按钮背景色
        cron_in.setText(cron);

        //添加第一行
        row0.add(src_text);
        row0.add(src_in);
        this.add(row0);

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
        row4.add(start);
//        row4.add(read);
        this.add(row4);
        //设置窗体是否可见
        this.setVisible(true);

        //监听窗体变化
        this.addWindowListener(this);
        //监听按钮
        send.addActionListener(this);
        start.addActionListener(this);
        read.addActionListener(this);
    }

    public void actionPerformed(ActionEvent e) {
        //监听发送方法
        String job_name = "定时推送url文件";
        try {

            if (e.getSource() == send) {
                log.info("手动执行一次任务");
                QuartzJob quartzJob = new QuartzJob();
                String src = src_in.getText();
                String url = url_in.getText();
                String num = num_in.getText();
                quartzJob.runJob(src, url, Integer.parseInt(num));
            }

            if (e.getSource() == start) {
                if (status) {
                    // 停止任务
                    start.setText("开始任务");
                    status = false;
                    log.info("【定时任务停止】");
                    QuartzManager.removeJob(job_name);
                } else {
                    // 开始任务
                    start.setText("停止任务");
                    status = true;
                    log.info("【定时任务启动】");
                    QuartzManager.addJob(job_name, QuartzJob.class, src_in.getText(), cron_in.getText(), url_in.getText(), Integer.parseInt(num_in.getText()));
                }
            }
        } catch (Exception ex) {
            System.out.println(ex);
            log.error("程序出错", ex);
            status = false;
            log.info("【定时任务停止】");
            QuartzManager.removeJob(job_name);
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
        String src = src_in.getText();
        String url = url_in.getText();
        String num = num_in.getText();
        String cron = cron_in.getText();

        File file = new File("setting.txt");
        String content = src.replace("\n", "") + "\r\n" + url.replace("\n", "") + "\r\n" + num + "\r\n" + cron;
        log.info("配置信息: \r\n{}", content);
        FileWriter fw = null;
        BufferedWriter bw = null;
        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            fw = new FileWriter(file.getAbsoluteFile(), false);  //true续写新内容
            bw = new BufferedWriter(fw);
            bw.write(content);
            bw.close(); //
        } catch (Exception e1) {
            e1.printStackTrace();
            log.error("【自动保存配置信息失败】");
        }
        log.info("【自动保存配置信息成功】");
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
