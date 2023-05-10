package Quartz;

import java.io.*;
import java.net.URL;

import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

/**
 * 任务执行类
 */
public class QuartzJob implements Job {
    Logger log = LoggerFactory.getLogger(QuartzJob.class);

    public void execute(JobExecutionContext content) {
        log.info("任务开始执行");
        String jobName = content.getJobDetail().getName();
        JobDataMap dataMap = content.getJobDetail().getJobDataMap();
        String src = dataMap.getString("src");
        String url = dataMap.getString("url");
        int num = dataMap.getInt("num");
        log.info("任务名称;{}", jobName);
        runJob(src, url, num);
    }

    public void runJob(String srcs, String urls, int num) {
        log.info("推送地址;{}", urls);
        log.info("推送条数;{}", num);

        Runtime runtime = Runtime.getRuntime();
        String[] urlArray = urls.split(",");
        String[] srcArray = srcs.split(",");
        for (int i = 0; i < urlArray.length; i++) {
            String url = urlArray[i];
            String src = srcArray[i];
            //生成推送文件
            String srcFileName = "srcFile" + i + ".txt";
            try {
                log.info("获取推送文件内容:{}", src);

                InputStream inputStream = new URL(src).openStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
                String str = null;
                int frameIndex = 0;
                File file = new File(srcFileName);
                FileWriter fw = null;
                BufferedWriter bw = null;
                if (!file.exists()) {
                    file.createNewFile();
                }
                fw = new FileWriter(file.getAbsoluteFile(), false);  //true续写新内容
                bw = new BufferedWriter(fw);
                String content = "";
                while (true) {
                    if (frameIndex > num) {
                        break;
                    }
                    str = reader.readLine();  //按行读取
                    if (str != null) {
                        if (frameIndex != 0) {
                            content = content + str + "\n";
                        }
                        frameIndex++;
                    } else
                        break;
                }
                bw.write(content);
                bw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            log.info("推送文件获取完成 ==> {}", srcFileName);
            if (StringUtils.hasText(url)) {
                String cmd = "cmd /c curl -H 'Content-Type:text/plain' --data-binary @srcFile" + i + ".txt \"" + url + "\"";
                log.info("当前推送命令为:{}", cmd);
                try {
                    Process exec = runtime.exec(cmd);
                    //取得命令结果的输出流
                    InputStream fis = exec.getInputStream();
                    //用一个读输出流类去读
                    InputStreamReader isr = new InputStreamReader(fis);
                    //用缓冲器读行
                    BufferedReader br = new BufferedReader(isr);
                    String line = null;
                    //直到读完为止
                    while ((line = br.readLine()) != null) {
                        log.info("执行结果:{}", line);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                    log.error("【推送命令执行失败!】推送地址为:{}", url, e);
                }
            }
        }
    }
}