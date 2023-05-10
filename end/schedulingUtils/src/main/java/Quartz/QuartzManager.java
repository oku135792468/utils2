package Quartz;

import org.quartz.CronTrigger;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerFactory;
import org.quartz.impl.StdSchedulerFactory;

import java.util.HashMap;

public class QuartzManager {
    private static SchedulerFactory gSchedulerFactory = new StdSchedulerFactory();
    private static String JOB_GROUP_NAME = "EXTJWEB_JOBGROUP_NAME";
    private static String TRIGGER_GROUP_NAME = "EXTJWEB_TRIGGERGROUP_NAME";

    /**
     * 添加一个定时任务，使用默认的任务组名，触发器名，触发器组名
     *
     * @param jobName 任务名
     * @param cls     任务
     * @param time    时间设置
     */
    @SuppressWarnings("rawtypes")
    public static void addJob(String jobName, Class cls, String src, String time, String url, int num) {
        try {
            Scheduler sched = gSchedulerFactory.getScheduler();
            // 任务名，任务组，任务执行类
            JobDetail jobDetail = new JobDetail(jobName, JOB_GROUP_NAME, cls);
            //可以传递参数
            jobDetail.getJobDataMap().put("src", src);
            jobDetail.getJobDataMap().put("url", url);
            jobDetail.getJobDataMap().put("num", num);
            // 触发器
            CronTrigger trigger = new CronTrigger(jobName, TRIGGER_GROUP_NAME);
            // 触发器名,触发器组
            trigger.setCronExpression(time);
            // 触发器时间设定
            sched.scheduleJob(jobDetail, trigger);
            // 启动
            if (!sched.isShutdown()) {
                sched.start();
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 修改一个任务的触发时间(使用默认的任务组名，触发器名，触发器组名)
     *
     * @param jobName
     * @param time
     */
    @SuppressWarnings("rawtypes")
    public static void modifyJobTime(String jobName, String src, String time, String url, int num) {
        try {
            Scheduler sched = gSchedulerFactory.getScheduler();
            CronTrigger trigger = (CronTrigger) sched.getTrigger(jobName, TRIGGER_GROUP_NAME);
            if (trigger == null) {
                return;
            }
            String oldTime = trigger.getCronExpression();
            if (!oldTime.equalsIgnoreCase(time)) {
                JobDetail jobDetail = sched.getJobDetail(jobName, JOB_GROUP_NAME);
                Class objJobClass = jobDetail.getJobClass();
                removeJob(jobName);
                addJob(jobName, objJobClass, src, time, url, num);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    /**
     * 移除一个任务(使用默认的任务组名，触发器名，触发器组名)
     *
     * @param jobName
     */
    public static void removeJob(String jobName) {
        try {
            Scheduler sched = gSchedulerFactory.getScheduler();
            sched.pauseTrigger(jobName, TRIGGER_GROUP_NAME);// 停止触发器
            sched.unscheduleJob(jobName, TRIGGER_GROUP_NAME);// 移除触发器
            sched.deleteJob(jobName, JOB_GROUP_NAME);// 删除任务
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 启动所有定时任务
     */
    public static void startJobs() {
        try {
            Scheduler sched = gSchedulerFactory.getScheduler();
            sched.start();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 关闭所有定时任务
     */
    public static void shutdownJobs() {
        try {
            Scheduler sched = gSchedulerFactory.getScheduler();
            if (!sched.isShutdown()) {
                sched.shutdown();
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
