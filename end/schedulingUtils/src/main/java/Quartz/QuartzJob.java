package Quartz;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
/**
 * 任务执行类
 */
public class QuartzJob implements Job {


    public void execute(JobExecutionContext content) throws JobExecutionException {
        System.out.println("任务开始时间："+new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));

        String jobName = content.getJobDetail().getName();
        JobDataMap dataMap = content.getJobDetail().getJobDataMap();
        String param = dataMap.getString("param");
        System.out.println("传递的参数是="+param +"任务名字是="+jobName);
    }
}